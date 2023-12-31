import {
  AuthorizerChanged as AuthorizerChangedEvent,
  ExternalBalanceTransfer as ExternalBalanceTransferEvent,
  FlashLoan as FlashLoanEvent,
  InternalBalanceChanged as InternalBalanceChangedEvent,
  PausedStateChanged as PausedStateChangedEvent,
  PoolBalanceChanged as PoolBalanceChangedEvent,
  PoolBalanceManaged as PoolBalanceManagedEvent,
  PoolRegistered as PoolRegisteredEvent,
  RelayerApprovalChanged as RelayerApprovalChangedEvent,
  Swap as SwapEvent,
  TokensDeregistered as TokensDeregisteredEvent,
  TokensRegistered as TokensRegisteredEvent
} from "../generated/Contract/Contract"
import {
  AuthorizerChanged,
  ExternalBalanceTransfer,
  FlashLoan,
  InternalBalanceChanged,
  PausedStateChanged,
  PoolBalanceChanged,
  PoolBalanceManaged,
  PoolRegistered,
  RelayerApprovalChanged,
  Swap,
  TokensDeregistered,
  TokensRegistered
} from "../generated/schema"

export function handleAuthorizerChanged(event: AuthorizerChangedEvent): void {
  let entity = new AuthorizerChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newAuthorizer = event.params.newAuthorizer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleExternalBalanceTransfer(
  event: ExternalBalanceTransferEvent
): void {
  let entity = new ExternalBalanceTransfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.sender = event.params.sender
  entity.recipient = event.params.recipient
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFlashLoan(event: FlashLoanEvent): void {
  let entity = new FlashLoan(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.recipient = event.params.recipient
  entity.token = event.params.token
  entity.amount = event.params.amount
  entity.feeAmount = event.params.feeAmount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInternalBalanceChanged(
  event: InternalBalanceChangedEvent
): void {
  let entity = new InternalBalanceChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.token = event.params.token
  entity.delta = event.params.delta

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePausedStateChanged(event: PausedStateChangedEvent): void {
  let entity = new PausedStateChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.paused = event.params.paused

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePoolBalanceChanged(event: PoolBalanceChangedEvent): void {
  let entity = new PoolBalanceChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolId = event.params.poolId
  entity.liquidityProvider = event.params.liquidityProvider
  entity.tokens = event.params.tokens
  entity.deltas = event.params.deltas
  entity.protocolFeeAmounts = event.params.protocolFeeAmounts

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePoolBalanceManaged(event: PoolBalanceManagedEvent): void {
  let entity = new PoolBalanceManaged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolId = event.params.poolId
  entity.assetManager = event.params.assetManager
  entity.token = event.params.token
  entity.cashDelta = event.params.cashDelta
  entity.managedDelta = event.params.managedDelta

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePoolRegistered(event: PoolRegisteredEvent): void {
  let entity = new PoolRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolId = event.params.poolId
  entity.poolAddress = event.params.poolAddress
  entity.specialization = event.params.specialization

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRelayerApprovalChanged(
  event: RelayerApprovalChangedEvent
): void {
  let entity = new RelayerApprovalChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.relayer = event.params.relayer
  entity.sender = event.params.sender
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSwap(event: SwapEvent): void {
  let entity = new Swap(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolId = event.params.poolId
  entity.tokenIn = event.params.tokenIn
  entity.tokenOut = event.params.tokenOut
  entity.amountIn = event.params.amountIn
  entity.amountOut = event.params.amountOut

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokensDeregistered(event: TokensDeregisteredEvent): void {
  let entity = new TokensDeregistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolId = event.params.poolId
  entity.tokens = event.params.tokens

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokensRegistered(event: TokensRegisteredEvent): void {
  let entity = new TokensRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolId = event.params.poolId
  entity.tokens = event.params.tokens
  entity.assetManagers = event.params.assetManagers

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
