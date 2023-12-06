/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../../../../common";

export interface StreamsLookupCompatibleInterfaceInterface extends Interface {
  getFunction(nameOrSignature: "checkCallback"): FunctionFragment;

  encodeFunctionData(
    functionFragment: "checkCallback",
    values: [BytesLike[], BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "checkCallback",
    data: BytesLike
  ): Result;
}

export interface StreamsLookupCompatibleInterface extends BaseContract {
  connect(runner?: ContractRunner | null): StreamsLookupCompatibleInterface;
  waitForDeployment(): Promise<this>;

  interface: StreamsLookupCompatibleInterfaceInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  checkCallback: TypedContractMethod<
    [values: BytesLike[], extraData: BytesLike],
    [[boolean, string] & { upkeepNeeded: boolean; performData: string }],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "checkCallback"
  ): TypedContractMethod<
    [values: BytesLike[], extraData: BytesLike],
    [[boolean, string] & { upkeepNeeded: boolean; performData: string }],
    "view"
  >;

  filters: {};
}
