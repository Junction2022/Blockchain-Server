package keeper

import (
	"context"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"
	"github.com/cosmos/cosmos-sdk/types/query"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"

	"thesis/x/thesis/types"
)

func (k Keeper) Thesises(c context.Context, req *types.QueryThesisRequest) (*types.QueryThesisResponse, error) {

  if req == nil {
    return nil, status.Error(codes.InvalidArgument, "invalid request")
  }

  var thesises []*types.Thesis

  ctx := sdk.UnwrapSDKContext(c)

  store := ctx.KVStore(k.storeKey)

  thesisStore := prefix.NewStore(store, []byte(types.ThesisKey))

  pageRes, err := query.Paginate(thesisStore, req.Pagination, func(key []byte, value []byte) error {
    var thesis types.Thesis
    if err := k.cdc.Unmarshal(value, &thesis); err != nil {
      return err
    }

    thesisList = append(thesises, &thesis)

    return nil
  })

  if err != nil {
    return nil, status.Error(codes.Internal, err.Error())
  }

  return &types.QueryThesisResponse{Thesis: thesisList, Pagination: pageRes}, nil
}