package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgCreateThesis = "create_thesis"

var _ sdk.Msg = &MsgCreateThesis{}

func NewMsgCreateThesis(creator string, title string, file string, createdAt string, language string, topic string, pageCount string, author string) *MsgCreateThesis {
	return &MsgCreateThesis{
		Creator:   creator,
		Title:     title,
		File:      file,
		CreatedAt: createdAt,
		Language:  language,
		Topic:     topic,
		PageCount: pageCount,
		Author:    author,
	}
}

func (msg *MsgCreateThesis) Route() string {
	return RouterKey
}

func (msg *MsgCreateThesis) Type() string {
	return TypeMsgCreateThesis
}

func (msg *MsgCreateThesis) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgCreateThesis) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgCreateThesis) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
