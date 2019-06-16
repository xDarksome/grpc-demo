package main

import (
	"context"
	"fmt"
	"google.golang.org/grpc"
	"log"
	"net"
)

const defaultLimit = 5

type horizon struct {
	lots         []*Lot
	participants map[uint64]*Participant
}

func newHorizon() horizon {
	participants := make(map[uint64]*Participant)

	var lots []*Lot
	for i := uint64(1); i <= 20; i++ {
		p := &Participant{Id: i * 10, LotId: i}
		lots = append(lots, &Lot{
			Id:           i,
			Participants: []uint64{p.Id},
		})
		participants[p.Id] = p
	}

	return horizon{
		lots:         lots,
		participants: participants,
	}
}

func (h horizon) selectLots(selector *LotSelector) []*Lot {
	if selector.Limit == 0 {
		selector.Limit = defaultLimit
	}

	return h.lots[selector.Cursor : selector.Cursor+uint64(selector.Limit)]
}

func (h horizon) lotsParticipants(lots []*Lot) map[uint64]*Participant {
	participants := make(map[uint64]*Participant)
	for _, lot := range lots {
		participants[lot.Participants[0]] = h.participants[lot.Participants[0]]
	}

	return participants
}

func (h horizon) GetLots(ctx context.Context, selector *LotSelector) (*LotsPage, error) {
	lots := h.selectLots(selector)
	participants := h.lotsParticipants(lots)

	page := LotsPage{
		Lots:         lots,
		Participants: participants,
	}
	fmt.Println(page)

	return &page, nil
}

func main() {
	lis, err := net.Listen("tcp", fmt.Sprintf(":%d", 7890))
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	grpcServer := grpc.NewServer()
	RegisterHorizonServer(grpcServer, newHorizon())
	log.Fatal(grpcServer.Serve(lis))
}
