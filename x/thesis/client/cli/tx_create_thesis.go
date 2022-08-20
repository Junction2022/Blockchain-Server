package cli

import (
	"strconv"

	"github.com/cosmos/cosmos-sdk/client"
	"github.com/cosmos/cosmos-sdk/client/flags"
	"github.com/cosmos/cosmos-sdk/client/tx"
	"github.com/spf13/cobra"
	"thesis/x/thesis/types"
)

var _ = strconv.Itoa(0)

func CmdCreateThesis() *cobra.Command {
	cmd := &cobra.Command{
		Use:   "create-thesis [title] [file] [created-at] [language] [topic] [page-count] [author]",
		Short: "Broadcast message createThesis",
		Args:  cobra.ExactArgs(7),
		RunE: func(cmd *cobra.Command, args []string) (err error) {
			argTitle := args[0]
			argFile := args[1]
			argCreatedAt := args[2]
			argLanguage := args[3]
			argTopic := args[4]
			argPageCount := args[5]
			argAuthor := args[6]

			clientCtx, err := client.GetClientTxContext(cmd)
			if err != nil {
				return err
			}

			msg := types.NewMsgCreateThesis(
				clientCtx.GetFromAddress().String(),
				argTitle,
				argFile,
				argCreatedAt,
				argLanguage,
				argTopic,
				argPageCount,
				argAuthor,
			)
			if err := msg.ValidateBasic(); err != nil {
				return err
			}
			return tx.GenerateOrBroadcastTxCLI(clientCtx, cmd.Flags(), msg)
		},
	}

	flags.AddTxFlagsToCmd(cmd)

	return cmd
}
