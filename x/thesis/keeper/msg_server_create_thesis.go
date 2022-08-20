package keeper

import (
	"context"

	"thesis/x/thesis/types"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

func (k msgServer) CreateThesis(goCtx context.Context, msg *types.MsgCreateThesis) (*types.MsgCreateThesisResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	var post = types.Thesis{
		Title: msg.Title,
		File: msg.File,
		CreatedAt: msg.CreatedAt,
		Language: msg.Language,
		Topic: msg.Topic,
		PageCount: msg.PageCount,
		Author: msg.Author,
	}

	id := k.AppendThesis(ctx, post)

	return &types.MsgCreateThesisResponse{Id: id}, nil
}
