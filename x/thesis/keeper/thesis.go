package keeper

import (
	"encoding/binary"

	"github.com/cosmos/cosmos-sdk/store/prefix"
	sdk "github.com/cosmos/cosmos-sdk/types"

	"thesis/x/thesis/types"
)

func (k Keeper) AppendThesis(ctx sdk.Context, thesis types.Thesis) uint64 {
  // Get the current number of posts in the store
  count := k.GetThesisCount(ctx)

  // Assign an ID to the post based on the number of posts in the store
  thesis.Id = count

  // Get the store
  store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.ThesisKey))

  // Convert the post ID into bytes
  byteKey := make([]byte, 8)
  binary.BigEndian.PutUint64(byteKey, thesis.Id)

  // Marshal the post into bytes
  appendedValue := k.cdc.MustMarshal(&thesis)

  // Insert the post bytes using post ID as a key
  store.Set(byteKey, appendedValue)

  // Update the post count
  k.SetThesisCount(ctx, count+1)
  return count
}

func (k Keeper) GetThesisCount(ctx sdk.Context) uint64 {
  // Get the store using storeKey (which is "blog") and PostCountKey (which is "Post-count-")
  store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.ThesisCountKey))

  // Convert the PostCountKey to bytes
  byteKey := []byte(types.ThesisCountKey)

  // Get the value of the count
  bz := store.Get(byteKey)

  // Return zero if the count value is not found (for example, it's the first post)
  if bz == nil {
    return 0
  }

  // Convert the count into a uint64
  return binary.BigEndian.Uint64(bz)
}

func (k Keeper) SetThesisCount(ctx sdk.Context, count uint64) {
  // Get the store using storeKey (which is "blog") and PostCountKey (which is "Post-count-")
  store := prefix.NewStore(ctx.KVStore(k.storeKey), []byte(types.ThesisCountKey))

  // Convert the PostCountKey to bytes
  byteKey := []byte(types.ThesisCountKey)

  // Convert count from uint64 to string and get bytes
  bz := make([]byte, 8)
  binary.BigEndian.PutUint64(bz, count)

  // Set the value of Post-count- to count
  store.Set(byteKey, bz)
}