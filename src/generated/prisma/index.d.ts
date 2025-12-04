
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Paciente
 * 
 */
export type Paciente = $Result.DefaultSelection<Prisma.$PacientePayload>
/**
 * Model Profesional
 * 
 */
export type Profesional = $Result.DefaultSelection<Prisma.$ProfesionalPayload>
/**
 * Model UnidadAtencion
 * 
 */
export type UnidadAtencion = $Result.DefaultSelection<Prisma.$UnidadAtencionPayload>
/**
 * Model BloqueAgenda
 * 
 */
export type BloqueAgenda = $Result.DefaultSelection<Prisma.$BloqueAgendaPayload>
/**
 * Model Cita
 * 
 */
export type Cita = $Result.DefaultSelection<Prisma.$CitaPayload>
/**
 * Model EpisodioAtencion
 * 
 */
export type EpisodioAtencion = $Result.DefaultSelection<Prisma.$EpisodioAtencionPayload>
/**
 * Model NotaClinica
 * 
 */
export type NotaClinica = $Result.DefaultSelection<Prisma.$NotaClinicaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paciente`: Exposes CRUD operations for the **Paciente** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pacientes
    * const pacientes = await prisma.paciente.findMany()
    * ```
    */
  get paciente(): Prisma.PacienteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profesional`: Exposes CRUD operations for the **Profesional** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profesionals
    * const profesionals = await prisma.profesional.findMany()
    * ```
    */
  get profesional(): Prisma.ProfesionalDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.unidadAtencion`: Exposes CRUD operations for the **UnidadAtencion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UnidadAtencions
    * const unidadAtencions = await prisma.unidadAtencion.findMany()
    * ```
    */
  get unidadAtencion(): Prisma.UnidadAtencionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bloqueAgenda`: Exposes CRUD operations for the **BloqueAgenda** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BloqueAgenda
    * const bloqueAgenda = await prisma.bloqueAgenda.findMany()
    * ```
    */
  get bloqueAgenda(): Prisma.BloqueAgendaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cita`: Exposes CRUD operations for the **Cita** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Citas
    * const citas = await prisma.cita.findMany()
    * ```
    */
  get cita(): Prisma.CitaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.episodioAtencion`: Exposes CRUD operations for the **EpisodioAtencion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EpisodioAtencions
    * const episodioAtencions = await prisma.episodioAtencion.findMany()
    * ```
    */
  get episodioAtencion(): Prisma.EpisodioAtencionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notaClinica`: Exposes CRUD operations for the **NotaClinica** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NotaClinicas
    * const notaClinicas = await prisma.notaClinica.findMany()
    * ```
    */
  get notaClinica(): Prisma.NotaClinicaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Paciente: 'Paciente',
    Profesional: 'Profesional',
    UnidadAtencion: 'UnidadAtencion',
    BloqueAgenda: 'BloqueAgenda',
    Cita: 'Cita',
    EpisodioAtencion: 'EpisodioAtencion',
    NotaClinica: 'NotaClinica'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "paciente" | "profesional" | "unidadAtencion" | "bloqueAgenda" | "cita" | "episodioAtencion" | "notaClinica"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Paciente: {
        payload: Prisma.$PacientePayload<ExtArgs>
        fields: Prisma.PacienteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PacienteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PacienteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findFirst: {
            args: Prisma.PacienteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PacienteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          findMany: {
            args: Prisma.PacienteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>[]
          }
          create: {
            args: Prisma.PacienteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          createMany: {
            args: Prisma.PacienteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PacienteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          update: {
            args: Prisma.PacienteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          deleteMany: {
            args: Prisma.PacienteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PacienteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PacienteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PacientePayload>
          }
          aggregate: {
            args: Prisma.PacienteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaciente>
          }
          groupBy: {
            args: Prisma.PacienteGroupByArgs<ExtArgs>
            result: $Utils.Optional<PacienteGroupByOutputType>[]
          }
          count: {
            args: Prisma.PacienteCountArgs<ExtArgs>
            result: $Utils.Optional<PacienteCountAggregateOutputType> | number
          }
        }
      }
      Profesional: {
        payload: Prisma.$ProfesionalPayload<ExtArgs>
        fields: Prisma.ProfesionalFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfesionalFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesionalPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfesionalFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesionalPayload>
          }
          findFirst: {
            args: Prisma.ProfesionalFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesionalPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfesionalFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesionalPayload>
          }
          findMany: {
            args: Prisma.ProfesionalFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesionalPayload>[]
          }
          create: {
            args: Prisma.ProfesionalCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesionalPayload>
          }
          createMany: {
            args: Prisma.ProfesionalCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProfesionalDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesionalPayload>
          }
          update: {
            args: Prisma.ProfesionalUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesionalPayload>
          }
          deleteMany: {
            args: Prisma.ProfesionalDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfesionalUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProfesionalUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfesionalPayload>
          }
          aggregate: {
            args: Prisma.ProfesionalAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfesional>
          }
          groupBy: {
            args: Prisma.ProfesionalGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfesionalGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfesionalCountArgs<ExtArgs>
            result: $Utils.Optional<ProfesionalCountAggregateOutputType> | number
          }
        }
      }
      UnidadAtencion: {
        payload: Prisma.$UnidadAtencionPayload<ExtArgs>
        fields: Prisma.UnidadAtencionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UnidadAtencionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadAtencionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UnidadAtencionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadAtencionPayload>
          }
          findFirst: {
            args: Prisma.UnidadAtencionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadAtencionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UnidadAtencionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadAtencionPayload>
          }
          findMany: {
            args: Prisma.UnidadAtencionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadAtencionPayload>[]
          }
          create: {
            args: Prisma.UnidadAtencionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadAtencionPayload>
          }
          createMany: {
            args: Prisma.UnidadAtencionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UnidadAtencionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadAtencionPayload>
          }
          update: {
            args: Prisma.UnidadAtencionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadAtencionPayload>
          }
          deleteMany: {
            args: Prisma.UnidadAtencionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UnidadAtencionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UnidadAtencionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UnidadAtencionPayload>
          }
          aggregate: {
            args: Prisma.UnidadAtencionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUnidadAtencion>
          }
          groupBy: {
            args: Prisma.UnidadAtencionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UnidadAtencionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UnidadAtencionCountArgs<ExtArgs>
            result: $Utils.Optional<UnidadAtencionCountAggregateOutputType> | number
          }
        }
      }
      BloqueAgenda: {
        payload: Prisma.$BloqueAgendaPayload<ExtArgs>
        fields: Prisma.BloqueAgendaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BloqueAgendaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloqueAgendaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BloqueAgendaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloqueAgendaPayload>
          }
          findFirst: {
            args: Prisma.BloqueAgendaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloqueAgendaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BloqueAgendaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloqueAgendaPayload>
          }
          findMany: {
            args: Prisma.BloqueAgendaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloqueAgendaPayload>[]
          }
          create: {
            args: Prisma.BloqueAgendaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloqueAgendaPayload>
          }
          createMany: {
            args: Prisma.BloqueAgendaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BloqueAgendaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloqueAgendaPayload>
          }
          update: {
            args: Prisma.BloqueAgendaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloqueAgendaPayload>
          }
          deleteMany: {
            args: Prisma.BloqueAgendaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BloqueAgendaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BloqueAgendaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BloqueAgendaPayload>
          }
          aggregate: {
            args: Prisma.BloqueAgendaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBloqueAgenda>
          }
          groupBy: {
            args: Prisma.BloqueAgendaGroupByArgs<ExtArgs>
            result: $Utils.Optional<BloqueAgendaGroupByOutputType>[]
          }
          count: {
            args: Prisma.BloqueAgendaCountArgs<ExtArgs>
            result: $Utils.Optional<BloqueAgendaCountAggregateOutputType> | number
          }
        }
      }
      Cita: {
        payload: Prisma.$CitaPayload<ExtArgs>
        fields: Prisma.CitaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CitaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CitaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>
          }
          findFirst: {
            args: Prisma.CitaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CitaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>
          }
          findMany: {
            args: Prisma.CitaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>[]
          }
          create: {
            args: Prisma.CitaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>
          }
          createMany: {
            args: Prisma.CitaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CitaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>
          }
          update: {
            args: Prisma.CitaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>
          }
          deleteMany: {
            args: Prisma.CitaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CitaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CitaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CitaPayload>
          }
          aggregate: {
            args: Prisma.CitaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCita>
          }
          groupBy: {
            args: Prisma.CitaGroupByArgs<ExtArgs>
            result: $Utils.Optional<CitaGroupByOutputType>[]
          }
          count: {
            args: Prisma.CitaCountArgs<ExtArgs>
            result: $Utils.Optional<CitaCountAggregateOutputType> | number
          }
        }
      }
      EpisodioAtencion: {
        payload: Prisma.$EpisodioAtencionPayload<ExtArgs>
        fields: Prisma.EpisodioAtencionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EpisodioAtencionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodioAtencionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EpisodioAtencionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodioAtencionPayload>
          }
          findFirst: {
            args: Prisma.EpisodioAtencionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodioAtencionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EpisodioAtencionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodioAtencionPayload>
          }
          findMany: {
            args: Prisma.EpisodioAtencionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodioAtencionPayload>[]
          }
          create: {
            args: Prisma.EpisodioAtencionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodioAtencionPayload>
          }
          createMany: {
            args: Prisma.EpisodioAtencionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.EpisodioAtencionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodioAtencionPayload>
          }
          update: {
            args: Prisma.EpisodioAtencionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodioAtencionPayload>
          }
          deleteMany: {
            args: Prisma.EpisodioAtencionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EpisodioAtencionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EpisodioAtencionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EpisodioAtencionPayload>
          }
          aggregate: {
            args: Prisma.EpisodioAtencionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEpisodioAtencion>
          }
          groupBy: {
            args: Prisma.EpisodioAtencionGroupByArgs<ExtArgs>
            result: $Utils.Optional<EpisodioAtencionGroupByOutputType>[]
          }
          count: {
            args: Prisma.EpisodioAtencionCountArgs<ExtArgs>
            result: $Utils.Optional<EpisodioAtencionCountAggregateOutputType> | number
          }
        }
      }
      NotaClinica: {
        payload: Prisma.$NotaClinicaPayload<ExtArgs>
        fields: Prisma.NotaClinicaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotaClinicaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaClinicaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotaClinicaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaClinicaPayload>
          }
          findFirst: {
            args: Prisma.NotaClinicaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaClinicaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotaClinicaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaClinicaPayload>
          }
          findMany: {
            args: Prisma.NotaClinicaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaClinicaPayload>[]
          }
          create: {
            args: Prisma.NotaClinicaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaClinicaPayload>
          }
          createMany: {
            args: Prisma.NotaClinicaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.NotaClinicaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaClinicaPayload>
          }
          update: {
            args: Prisma.NotaClinicaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaClinicaPayload>
          }
          deleteMany: {
            args: Prisma.NotaClinicaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotaClinicaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.NotaClinicaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotaClinicaPayload>
          }
          aggregate: {
            args: Prisma.NotaClinicaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotaClinica>
          }
          groupBy: {
            args: Prisma.NotaClinicaGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotaClinicaGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotaClinicaCountArgs<ExtArgs>
            result: $Utils.Optional<NotaClinicaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    paciente?: PacienteOmit
    profesional?: ProfesionalOmit
    unidadAtencion?: UnidadAtencionOmit
    bloqueAgenda?: BloqueAgendaOmit
    cita?: CitaOmit
    episodioAtencion?: EpisodioAtencionOmit
    notaClinica?: NotaClinicaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PacienteCountOutputType
   */

  export type PacienteCountOutputType = {
    citas: number
    episodios: number
  }

  export type PacienteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    citas?: boolean | PacienteCountOutputTypeCountCitasArgs
    episodios?: boolean | PacienteCountOutputTypeCountEpisodiosArgs
  }

  // Custom InputTypes
  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PacienteCountOutputType
     */
    select?: PacienteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeCountCitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CitaWhereInput
  }

  /**
   * PacienteCountOutputType without action
   */
  export type PacienteCountOutputTypeCountEpisodiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpisodioAtencionWhereInput
  }


  /**
   * Count Type ProfesionalCountOutputType
   */

  export type ProfesionalCountOutputType = {
    bloquesAgenda: number
    citas: number
    notas: number
  }

  export type ProfesionalCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bloquesAgenda?: boolean | ProfesionalCountOutputTypeCountBloquesAgendaArgs
    citas?: boolean | ProfesionalCountOutputTypeCountCitasArgs
    notas?: boolean | ProfesionalCountOutputTypeCountNotasArgs
  }

  // Custom InputTypes
  /**
   * ProfesionalCountOutputType without action
   */
  export type ProfesionalCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfesionalCountOutputType
     */
    select?: ProfesionalCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfesionalCountOutputType without action
   */
  export type ProfesionalCountOutputTypeCountBloquesAgendaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BloqueAgendaWhereInput
  }

  /**
   * ProfesionalCountOutputType without action
   */
  export type ProfesionalCountOutputTypeCountCitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CitaWhereInput
  }

  /**
   * ProfesionalCountOutputType without action
   */
  export type ProfesionalCountOutputTypeCountNotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotaClinicaWhereInput
  }


  /**
   * Count Type UnidadAtencionCountOutputType
   */

  export type UnidadAtencionCountOutputType = {
    bloquesAgenda: number
    citas: number
  }

  export type UnidadAtencionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bloquesAgenda?: boolean | UnidadAtencionCountOutputTypeCountBloquesAgendaArgs
    citas?: boolean | UnidadAtencionCountOutputTypeCountCitasArgs
  }

  // Custom InputTypes
  /**
   * UnidadAtencionCountOutputType without action
   */
  export type UnidadAtencionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnidadAtencionCountOutputType
     */
    select?: UnidadAtencionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UnidadAtencionCountOutputType without action
   */
  export type UnidadAtencionCountOutputTypeCountBloquesAgendaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BloqueAgendaWhereInput
  }

  /**
   * UnidadAtencionCountOutputType without action
   */
  export type UnidadAtencionCountOutputTypeCountCitasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CitaWhereInput
  }


  /**
   * Count Type EpisodioAtencionCountOutputType
   */

  export type EpisodioAtencionCountOutputType = {
    notas: number
  }

  export type EpisodioAtencionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notas?: boolean | EpisodioAtencionCountOutputTypeCountNotasArgs
  }

  // Custom InputTypes
  /**
   * EpisodioAtencionCountOutputType without action
   */
  export type EpisodioAtencionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpisodioAtencionCountOutputType
     */
    select?: EpisodioAtencionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EpisodioAtencionCountOutputType without action
   */
  export type EpisodioAtencionCountOutputTypeCountNotasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotaClinicaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    createdAt: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    email: string
    password: string
    role: string
    createdAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["usuario"]>



  export type UsuarioSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "createdAt", ExtArgs["result"]["usuario"]>

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      role: string
      createdAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly role: FieldRef<"Usuario", 'String'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
  }


  /**
   * Model Paciente
   */

  export type AggregatePaciente = {
    _count: PacienteCountAggregateOutputType | null
    _avg: PacienteAvgAggregateOutputType | null
    _sum: PacienteSumAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  export type PacienteAvgAggregateOutputType = {
    id: number | null
  }

  export type PacienteSumAggregateOutputType = {
    id: number | null
  }

  export type PacienteMinAggregateOutputType = {
    id: number | null
    tipoDocumento: string | null
    numeroDocumento: string | null
    nombres: string | null
    apellidos: string | null
    fechaNacimiento: Date | null
    sexo: string | null
    correo: string | null
    telefono: string | null
    direccion: string | null
    estado: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PacienteMaxAggregateOutputType = {
    id: number | null
    tipoDocumento: string | null
    numeroDocumento: string | null
    nombres: string | null
    apellidos: string | null
    fechaNacimiento: Date | null
    sexo: string | null
    correo: string | null
    telefono: string | null
    direccion: string | null
    estado: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PacienteCountAggregateOutputType = {
    id: number
    tipoDocumento: number
    numeroDocumento: number
    nombres: number
    apellidos: number
    fechaNacimiento: number
    sexo: number
    correo: number
    telefono: number
    direccion: number
    estado: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PacienteAvgAggregateInputType = {
    id?: true
  }

  export type PacienteSumAggregateInputType = {
    id?: true
  }

  export type PacienteMinAggregateInputType = {
    id?: true
    tipoDocumento?: true
    numeroDocumento?: true
    nombres?: true
    apellidos?: true
    fechaNacimiento?: true
    sexo?: true
    correo?: true
    telefono?: true
    direccion?: true
    estado?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PacienteMaxAggregateInputType = {
    id?: true
    tipoDocumento?: true
    numeroDocumento?: true
    nombres?: true
    apellidos?: true
    fechaNacimiento?: true
    sexo?: true
    correo?: true
    telefono?: true
    direccion?: true
    estado?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PacienteCountAggregateInputType = {
    id?: true
    tipoDocumento?: true
    numeroDocumento?: true
    nombres?: true
    apellidos?: true
    fechaNacimiento?: true
    sexo?: true
    correo?: true
    telefono?: true
    direccion?: true
    estado?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PacienteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paciente to aggregate.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pacientes
    **/
    _count?: true | PacienteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PacienteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PacienteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PacienteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PacienteMaxAggregateInputType
  }

  export type GetPacienteAggregateType<T extends PacienteAggregateArgs> = {
        [P in keyof T & keyof AggregatePaciente]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaciente[P]>
      : GetScalarType<T[P], AggregatePaciente[P]>
  }




  export type PacienteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PacienteWhereInput
    orderBy?: PacienteOrderByWithAggregationInput | PacienteOrderByWithAggregationInput[]
    by: PacienteScalarFieldEnum[] | PacienteScalarFieldEnum
    having?: PacienteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PacienteCountAggregateInputType | true
    _avg?: PacienteAvgAggregateInputType
    _sum?: PacienteSumAggregateInputType
    _min?: PacienteMinAggregateInputType
    _max?: PacienteMaxAggregateInputType
  }

  export type PacienteGroupByOutputType = {
    id: number
    tipoDocumento: string
    numeroDocumento: string
    nombres: string
    apellidos: string
    fechaNacimiento: Date
    sexo: string
    correo: string | null
    telefono: string
    direccion: string | null
    estado: boolean
    createdAt: Date
    updatedAt: Date
    _count: PacienteCountAggregateOutputType | null
    _avg: PacienteAvgAggregateOutputType | null
    _sum: PacienteSumAggregateOutputType | null
    _min: PacienteMinAggregateOutputType | null
    _max: PacienteMaxAggregateOutputType | null
  }

  type GetPacienteGroupByPayload<T extends PacienteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PacienteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PacienteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PacienteGroupByOutputType[P]>
            : GetScalarType<T[P], PacienteGroupByOutputType[P]>
        }
      >
    >


  export type PacienteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipoDocumento?: boolean
    numeroDocumento?: boolean
    nombres?: boolean
    apellidos?: boolean
    fechaNacimiento?: boolean
    sexo?: boolean
    correo?: boolean
    telefono?: boolean
    direccion?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    citas?: boolean | Paciente$citasArgs<ExtArgs>
    episodios?: boolean | Paciente$episodiosArgs<ExtArgs>
    _count?: boolean | PacienteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paciente"]>



  export type PacienteSelectScalar = {
    id?: boolean
    tipoDocumento?: boolean
    numeroDocumento?: boolean
    nombres?: boolean
    apellidos?: boolean
    fechaNacimiento?: boolean
    sexo?: boolean
    correo?: boolean
    telefono?: boolean
    direccion?: boolean
    estado?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PacienteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipoDocumento" | "numeroDocumento" | "nombres" | "apellidos" | "fechaNacimiento" | "sexo" | "correo" | "telefono" | "direccion" | "estado" | "createdAt" | "updatedAt", ExtArgs["result"]["paciente"]>
  export type PacienteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    citas?: boolean | Paciente$citasArgs<ExtArgs>
    episodios?: boolean | Paciente$episodiosArgs<ExtArgs>
    _count?: boolean | PacienteCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PacientePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Paciente"
    objects: {
      citas: Prisma.$CitaPayload<ExtArgs>[]
      episodios: Prisma.$EpisodioAtencionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      tipoDocumento: string
      numeroDocumento: string
      nombres: string
      apellidos: string
      fechaNacimiento: Date
      sexo: string
      correo: string | null
      telefono: string
      direccion: string | null
      estado: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["paciente"]>
    composites: {}
  }

  type PacienteGetPayload<S extends boolean | null | undefined | PacienteDefaultArgs> = $Result.GetResult<Prisma.$PacientePayload, S>

  type PacienteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PacienteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PacienteCountAggregateInputType | true
    }

  export interface PacienteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Paciente'], meta: { name: 'Paciente' } }
    /**
     * Find zero or one Paciente that matches the filter.
     * @param {PacienteFindUniqueArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PacienteFindUniqueArgs>(args: SelectSubset<T, PacienteFindUniqueArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paciente that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PacienteFindUniqueOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PacienteFindUniqueOrThrowArgs>(args: SelectSubset<T, PacienteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paciente that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PacienteFindFirstArgs>(args?: SelectSubset<T, PacienteFindFirstArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paciente that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindFirstOrThrowArgs} args - Arguments to find a Paciente
     * @example
     * // Get one Paciente
     * const paciente = await prisma.paciente.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PacienteFindFirstOrThrowArgs>(args?: SelectSubset<T, PacienteFindFirstOrThrowArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pacientes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pacientes
     * const pacientes = await prisma.paciente.findMany()
     * 
     * // Get first 10 Pacientes
     * const pacientes = await prisma.paciente.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pacienteWithIdOnly = await prisma.paciente.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PacienteFindManyArgs>(args?: SelectSubset<T, PacienteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paciente.
     * @param {PacienteCreateArgs} args - Arguments to create a Paciente.
     * @example
     * // Create one Paciente
     * const Paciente = await prisma.paciente.create({
     *   data: {
     *     // ... data to create a Paciente
     *   }
     * })
     * 
     */
    create<T extends PacienteCreateArgs>(args: SelectSubset<T, PacienteCreateArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pacientes.
     * @param {PacienteCreateManyArgs} args - Arguments to create many Pacientes.
     * @example
     * // Create many Pacientes
     * const paciente = await prisma.paciente.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PacienteCreateManyArgs>(args?: SelectSubset<T, PacienteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Paciente.
     * @param {PacienteDeleteArgs} args - Arguments to delete one Paciente.
     * @example
     * // Delete one Paciente
     * const Paciente = await prisma.paciente.delete({
     *   where: {
     *     // ... filter to delete one Paciente
     *   }
     * })
     * 
     */
    delete<T extends PacienteDeleteArgs>(args: SelectSubset<T, PacienteDeleteArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paciente.
     * @param {PacienteUpdateArgs} args - Arguments to update one Paciente.
     * @example
     * // Update one Paciente
     * const paciente = await prisma.paciente.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PacienteUpdateArgs>(args: SelectSubset<T, PacienteUpdateArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pacientes.
     * @param {PacienteDeleteManyArgs} args - Arguments to filter Pacientes to delete.
     * @example
     * // Delete a few Pacientes
     * const { count } = await prisma.paciente.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PacienteDeleteManyArgs>(args?: SelectSubset<T, PacienteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pacientes
     * const paciente = await prisma.paciente.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PacienteUpdateManyArgs>(args: SelectSubset<T, PacienteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Paciente.
     * @param {PacienteUpsertArgs} args - Arguments to update or create a Paciente.
     * @example
     * // Update or create a Paciente
     * const paciente = await prisma.paciente.upsert({
     *   create: {
     *     // ... data to create a Paciente
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paciente we want to update
     *   }
     * })
     */
    upsert<T extends PacienteUpsertArgs>(args: SelectSubset<T, PacienteUpsertArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pacientes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteCountArgs} args - Arguments to filter Pacientes to count.
     * @example
     * // Count the number of Pacientes
     * const count = await prisma.paciente.count({
     *   where: {
     *     // ... the filter for the Pacientes we want to count
     *   }
     * })
    **/
    count<T extends PacienteCountArgs>(
      args?: Subset<T, PacienteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PacienteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PacienteAggregateArgs>(args: Subset<T, PacienteAggregateArgs>): Prisma.PrismaPromise<GetPacienteAggregateType<T>>

    /**
     * Group by Paciente.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PacienteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PacienteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PacienteGroupByArgs['orderBy'] }
        : { orderBy?: PacienteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PacienteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPacienteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Paciente model
   */
  readonly fields: PacienteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Paciente.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PacienteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    citas<T extends Paciente$citasArgs<ExtArgs> = {}>(args?: Subset<T, Paciente$citasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    episodios<T extends Paciente$episodiosArgs<ExtArgs> = {}>(args?: Subset<T, Paciente$episodiosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodioAtencionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Paciente model
   */
  interface PacienteFieldRefs {
    readonly id: FieldRef<"Paciente", 'Int'>
    readonly tipoDocumento: FieldRef<"Paciente", 'String'>
    readonly numeroDocumento: FieldRef<"Paciente", 'String'>
    readonly nombres: FieldRef<"Paciente", 'String'>
    readonly apellidos: FieldRef<"Paciente", 'String'>
    readonly fechaNacimiento: FieldRef<"Paciente", 'DateTime'>
    readonly sexo: FieldRef<"Paciente", 'String'>
    readonly correo: FieldRef<"Paciente", 'String'>
    readonly telefono: FieldRef<"Paciente", 'String'>
    readonly direccion: FieldRef<"Paciente", 'String'>
    readonly estado: FieldRef<"Paciente", 'Boolean'>
    readonly createdAt: FieldRef<"Paciente", 'DateTime'>
    readonly updatedAt: FieldRef<"Paciente", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Paciente findUnique
   */
  export type PacienteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente findUniqueOrThrow
   */
  export type PacienteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente findFirst
   */
  export type PacienteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente findFirstOrThrow
   */
  export type PacienteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Paciente to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pacientes.
     */
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente findMany
   */
  export type PacienteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter, which Pacientes to fetch.
     */
    where?: PacienteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pacientes to fetch.
     */
    orderBy?: PacienteOrderByWithRelationInput | PacienteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pacientes.
     */
    cursor?: PacienteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pacientes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pacientes.
     */
    skip?: number
    distinct?: PacienteScalarFieldEnum | PacienteScalarFieldEnum[]
  }

  /**
   * Paciente create
   */
  export type PacienteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to create a Paciente.
     */
    data: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
  }

  /**
   * Paciente createMany
   */
  export type PacienteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pacientes.
     */
    data: PacienteCreateManyInput | PacienteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paciente update
   */
  export type PacienteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The data needed to update a Paciente.
     */
    data: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
    /**
     * Choose, which Paciente to update.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente updateMany
   */
  export type PacienteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pacientes.
     */
    data: XOR<PacienteUpdateManyMutationInput, PacienteUncheckedUpdateManyInput>
    /**
     * Filter which Pacientes to update
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to update.
     */
    limit?: number
  }

  /**
   * Paciente upsert
   */
  export type PacienteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * The filter to search for the Paciente to update in case it exists.
     */
    where: PacienteWhereUniqueInput
    /**
     * In case the Paciente found by the `where` argument doesn't exist, create a new Paciente with this data.
     */
    create: XOR<PacienteCreateInput, PacienteUncheckedCreateInput>
    /**
     * In case the Paciente was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PacienteUpdateInput, PacienteUncheckedUpdateInput>
  }

  /**
   * Paciente delete
   */
  export type PacienteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
    /**
     * Filter which Paciente to delete.
     */
    where: PacienteWhereUniqueInput
  }

  /**
   * Paciente deleteMany
   */
  export type PacienteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pacientes to delete
     */
    where?: PacienteWhereInput
    /**
     * Limit how many Pacientes to delete.
     */
    limit?: number
  }

  /**
   * Paciente.citas
   */
  export type Paciente$citasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    where?: CitaWhereInput
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    cursor?: CitaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CitaScalarFieldEnum | CitaScalarFieldEnum[]
  }

  /**
   * Paciente.episodios
   */
  export type Paciente$episodiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpisodioAtencion
     */
    select?: EpisodioAtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpisodioAtencion
     */
    omit?: EpisodioAtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodioAtencionInclude<ExtArgs> | null
    where?: EpisodioAtencionWhereInput
    orderBy?: EpisodioAtencionOrderByWithRelationInput | EpisodioAtencionOrderByWithRelationInput[]
    cursor?: EpisodioAtencionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EpisodioAtencionScalarFieldEnum | EpisodioAtencionScalarFieldEnum[]
  }

  /**
   * Paciente without action
   */
  export type PacienteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paciente
     */
    select?: PacienteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paciente
     */
    omit?: PacienteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PacienteInclude<ExtArgs> | null
  }


  /**
   * Model Profesional
   */

  export type AggregateProfesional = {
    _count: ProfesionalCountAggregateOutputType | null
    _avg: ProfesionalAvgAggregateOutputType | null
    _sum: ProfesionalSumAggregateOutputType | null
    _min: ProfesionalMinAggregateOutputType | null
    _max: ProfesionalMaxAggregateOutputType | null
  }

  export type ProfesionalAvgAggregateOutputType = {
    id: number | null
  }

  export type ProfesionalSumAggregateOutputType = {
    id: number | null
  }

  export type ProfesionalMinAggregateOutputType = {
    id: number | null
    nombres: string | null
    apellidos: string | null
    registroMedico: string | null
    especialidad: string | null
    correo: string | null
    telefono: string | null
    agendaHabilitada: boolean | null
  }

  export type ProfesionalMaxAggregateOutputType = {
    id: number | null
    nombres: string | null
    apellidos: string | null
    registroMedico: string | null
    especialidad: string | null
    correo: string | null
    telefono: string | null
    agendaHabilitada: boolean | null
  }

  export type ProfesionalCountAggregateOutputType = {
    id: number
    nombres: number
    apellidos: number
    registroMedico: number
    especialidad: number
    correo: number
    telefono: number
    agendaHabilitada: number
    _all: number
  }


  export type ProfesionalAvgAggregateInputType = {
    id?: true
  }

  export type ProfesionalSumAggregateInputType = {
    id?: true
  }

  export type ProfesionalMinAggregateInputType = {
    id?: true
    nombres?: true
    apellidos?: true
    registroMedico?: true
    especialidad?: true
    correo?: true
    telefono?: true
    agendaHabilitada?: true
  }

  export type ProfesionalMaxAggregateInputType = {
    id?: true
    nombres?: true
    apellidos?: true
    registroMedico?: true
    especialidad?: true
    correo?: true
    telefono?: true
    agendaHabilitada?: true
  }

  export type ProfesionalCountAggregateInputType = {
    id?: true
    nombres?: true
    apellidos?: true
    registroMedico?: true
    especialidad?: true
    correo?: true
    telefono?: true
    agendaHabilitada?: true
    _all?: true
  }

  export type ProfesionalAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profesional to aggregate.
     */
    where?: ProfesionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profesionals to fetch.
     */
    orderBy?: ProfesionalOrderByWithRelationInput | ProfesionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfesionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profesionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profesionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profesionals
    **/
    _count?: true | ProfesionalCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfesionalAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfesionalSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfesionalMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfesionalMaxAggregateInputType
  }

  export type GetProfesionalAggregateType<T extends ProfesionalAggregateArgs> = {
        [P in keyof T & keyof AggregateProfesional]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfesional[P]>
      : GetScalarType<T[P], AggregateProfesional[P]>
  }




  export type ProfesionalGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfesionalWhereInput
    orderBy?: ProfesionalOrderByWithAggregationInput | ProfesionalOrderByWithAggregationInput[]
    by: ProfesionalScalarFieldEnum[] | ProfesionalScalarFieldEnum
    having?: ProfesionalScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfesionalCountAggregateInputType | true
    _avg?: ProfesionalAvgAggregateInputType
    _sum?: ProfesionalSumAggregateInputType
    _min?: ProfesionalMinAggregateInputType
    _max?: ProfesionalMaxAggregateInputType
  }

  export type ProfesionalGroupByOutputType = {
    id: number
    nombres: string
    apellidos: string
    registroMedico: string
    especialidad: string
    correo: string
    telefono: string | null
    agendaHabilitada: boolean
    _count: ProfesionalCountAggregateOutputType | null
    _avg: ProfesionalAvgAggregateOutputType | null
    _sum: ProfesionalSumAggregateOutputType | null
    _min: ProfesionalMinAggregateOutputType | null
    _max: ProfesionalMaxAggregateOutputType | null
  }

  type GetProfesionalGroupByPayload<T extends ProfesionalGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfesionalGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfesionalGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfesionalGroupByOutputType[P]>
            : GetScalarType<T[P], ProfesionalGroupByOutputType[P]>
        }
      >
    >


  export type ProfesionalSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombres?: boolean
    apellidos?: boolean
    registroMedico?: boolean
    especialidad?: boolean
    correo?: boolean
    telefono?: boolean
    agendaHabilitada?: boolean
    bloquesAgenda?: boolean | Profesional$bloquesAgendaArgs<ExtArgs>
    citas?: boolean | Profesional$citasArgs<ExtArgs>
    notas?: boolean | Profesional$notasArgs<ExtArgs>
    _count?: boolean | ProfesionalCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profesional"]>



  export type ProfesionalSelectScalar = {
    id?: boolean
    nombres?: boolean
    apellidos?: boolean
    registroMedico?: boolean
    especialidad?: boolean
    correo?: boolean
    telefono?: boolean
    agendaHabilitada?: boolean
  }

  export type ProfesionalOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombres" | "apellidos" | "registroMedico" | "especialidad" | "correo" | "telefono" | "agendaHabilitada", ExtArgs["result"]["profesional"]>
  export type ProfesionalInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bloquesAgenda?: boolean | Profesional$bloquesAgendaArgs<ExtArgs>
    citas?: boolean | Profesional$citasArgs<ExtArgs>
    notas?: boolean | Profesional$notasArgs<ExtArgs>
    _count?: boolean | ProfesionalCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProfesionalPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profesional"
    objects: {
      bloquesAgenda: Prisma.$BloqueAgendaPayload<ExtArgs>[]
      citas: Prisma.$CitaPayload<ExtArgs>[]
      notas: Prisma.$NotaClinicaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombres: string
      apellidos: string
      registroMedico: string
      especialidad: string
      correo: string
      telefono: string | null
      agendaHabilitada: boolean
    }, ExtArgs["result"]["profesional"]>
    composites: {}
  }

  type ProfesionalGetPayload<S extends boolean | null | undefined | ProfesionalDefaultArgs> = $Result.GetResult<Prisma.$ProfesionalPayload, S>

  type ProfesionalCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfesionalFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfesionalCountAggregateInputType | true
    }

  export interface ProfesionalDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profesional'], meta: { name: 'Profesional' } }
    /**
     * Find zero or one Profesional that matches the filter.
     * @param {ProfesionalFindUniqueArgs} args - Arguments to find a Profesional
     * @example
     * // Get one Profesional
     * const profesional = await prisma.profesional.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfesionalFindUniqueArgs>(args: SelectSubset<T, ProfesionalFindUniqueArgs<ExtArgs>>): Prisma__ProfesionalClient<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profesional that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfesionalFindUniqueOrThrowArgs} args - Arguments to find a Profesional
     * @example
     * // Get one Profesional
     * const profesional = await prisma.profesional.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfesionalFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfesionalFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfesionalClient<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profesional that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesionalFindFirstArgs} args - Arguments to find a Profesional
     * @example
     * // Get one Profesional
     * const profesional = await prisma.profesional.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfesionalFindFirstArgs>(args?: SelectSubset<T, ProfesionalFindFirstArgs<ExtArgs>>): Prisma__ProfesionalClient<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profesional that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesionalFindFirstOrThrowArgs} args - Arguments to find a Profesional
     * @example
     * // Get one Profesional
     * const profesional = await prisma.profesional.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfesionalFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfesionalFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfesionalClient<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profesionals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesionalFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profesionals
     * const profesionals = await prisma.profesional.findMany()
     * 
     * // Get first 10 Profesionals
     * const profesionals = await prisma.profesional.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profesionalWithIdOnly = await prisma.profesional.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfesionalFindManyArgs>(args?: SelectSubset<T, ProfesionalFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profesional.
     * @param {ProfesionalCreateArgs} args - Arguments to create a Profesional.
     * @example
     * // Create one Profesional
     * const Profesional = await prisma.profesional.create({
     *   data: {
     *     // ... data to create a Profesional
     *   }
     * })
     * 
     */
    create<T extends ProfesionalCreateArgs>(args: SelectSubset<T, ProfesionalCreateArgs<ExtArgs>>): Prisma__ProfesionalClient<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profesionals.
     * @param {ProfesionalCreateManyArgs} args - Arguments to create many Profesionals.
     * @example
     * // Create many Profesionals
     * const profesional = await prisma.profesional.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfesionalCreateManyArgs>(args?: SelectSubset<T, ProfesionalCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Profesional.
     * @param {ProfesionalDeleteArgs} args - Arguments to delete one Profesional.
     * @example
     * // Delete one Profesional
     * const Profesional = await prisma.profesional.delete({
     *   where: {
     *     // ... filter to delete one Profesional
     *   }
     * })
     * 
     */
    delete<T extends ProfesionalDeleteArgs>(args: SelectSubset<T, ProfesionalDeleteArgs<ExtArgs>>): Prisma__ProfesionalClient<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profesional.
     * @param {ProfesionalUpdateArgs} args - Arguments to update one Profesional.
     * @example
     * // Update one Profesional
     * const profesional = await prisma.profesional.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfesionalUpdateArgs>(args: SelectSubset<T, ProfesionalUpdateArgs<ExtArgs>>): Prisma__ProfesionalClient<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profesionals.
     * @param {ProfesionalDeleteManyArgs} args - Arguments to filter Profesionals to delete.
     * @example
     * // Delete a few Profesionals
     * const { count } = await prisma.profesional.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfesionalDeleteManyArgs>(args?: SelectSubset<T, ProfesionalDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profesionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesionalUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profesionals
     * const profesional = await prisma.profesional.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfesionalUpdateManyArgs>(args: SelectSubset<T, ProfesionalUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Profesional.
     * @param {ProfesionalUpsertArgs} args - Arguments to update or create a Profesional.
     * @example
     * // Update or create a Profesional
     * const profesional = await prisma.profesional.upsert({
     *   create: {
     *     // ... data to create a Profesional
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profesional we want to update
     *   }
     * })
     */
    upsert<T extends ProfesionalUpsertArgs>(args: SelectSubset<T, ProfesionalUpsertArgs<ExtArgs>>): Prisma__ProfesionalClient<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profesionals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesionalCountArgs} args - Arguments to filter Profesionals to count.
     * @example
     * // Count the number of Profesionals
     * const count = await prisma.profesional.count({
     *   where: {
     *     // ... the filter for the Profesionals we want to count
     *   }
     * })
    **/
    count<T extends ProfesionalCountArgs>(
      args?: Subset<T, ProfesionalCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfesionalCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profesional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesionalAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfesionalAggregateArgs>(args: Subset<T, ProfesionalAggregateArgs>): Prisma.PrismaPromise<GetProfesionalAggregateType<T>>

    /**
     * Group by Profesional.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfesionalGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfesionalGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfesionalGroupByArgs['orderBy'] }
        : { orderBy?: ProfesionalGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfesionalGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfesionalGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profesional model
   */
  readonly fields: ProfesionalFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profesional.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfesionalClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bloquesAgenda<T extends Profesional$bloquesAgendaArgs<ExtArgs> = {}>(args?: Subset<T, Profesional$bloquesAgendaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloqueAgendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    citas<T extends Profesional$citasArgs<ExtArgs> = {}>(args?: Subset<T, Profesional$citasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notas<T extends Profesional$notasArgs<ExtArgs> = {}>(args?: Subset<T, Profesional$notasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotaClinicaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profesional model
   */
  interface ProfesionalFieldRefs {
    readonly id: FieldRef<"Profesional", 'Int'>
    readonly nombres: FieldRef<"Profesional", 'String'>
    readonly apellidos: FieldRef<"Profesional", 'String'>
    readonly registroMedico: FieldRef<"Profesional", 'String'>
    readonly especialidad: FieldRef<"Profesional", 'String'>
    readonly correo: FieldRef<"Profesional", 'String'>
    readonly telefono: FieldRef<"Profesional", 'String'>
    readonly agendaHabilitada: FieldRef<"Profesional", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Profesional findUnique
   */
  export type ProfesionalFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalInclude<ExtArgs> | null
    /**
     * Filter, which Profesional to fetch.
     */
    where: ProfesionalWhereUniqueInput
  }

  /**
   * Profesional findUniqueOrThrow
   */
  export type ProfesionalFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalInclude<ExtArgs> | null
    /**
     * Filter, which Profesional to fetch.
     */
    where: ProfesionalWhereUniqueInput
  }

  /**
   * Profesional findFirst
   */
  export type ProfesionalFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalInclude<ExtArgs> | null
    /**
     * Filter, which Profesional to fetch.
     */
    where?: ProfesionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profesionals to fetch.
     */
    orderBy?: ProfesionalOrderByWithRelationInput | ProfesionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profesionals.
     */
    cursor?: ProfesionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profesionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profesionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profesionals.
     */
    distinct?: ProfesionalScalarFieldEnum | ProfesionalScalarFieldEnum[]
  }

  /**
   * Profesional findFirstOrThrow
   */
  export type ProfesionalFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalInclude<ExtArgs> | null
    /**
     * Filter, which Profesional to fetch.
     */
    where?: ProfesionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profesionals to fetch.
     */
    orderBy?: ProfesionalOrderByWithRelationInput | ProfesionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profesionals.
     */
    cursor?: ProfesionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profesionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profesionals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profesionals.
     */
    distinct?: ProfesionalScalarFieldEnum | ProfesionalScalarFieldEnum[]
  }

  /**
   * Profesional findMany
   */
  export type ProfesionalFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalInclude<ExtArgs> | null
    /**
     * Filter, which Profesionals to fetch.
     */
    where?: ProfesionalWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profesionals to fetch.
     */
    orderBy?: ProfesionalOrderByWithRelationInput | ProfesionalOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profesionals.
     */
    cursor?: ProfesionalWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profesionals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profesionals.
     */
    skip?: number
    distinct?: ProfesionalScalarFieldEnum | ProfesionalScalarFieldEnum[]
  }

  /**
   * Profesional create
   */
  export type ProfesionalCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalInclude<ExtArgs> | null
    /**
     * The data needed to create a Profesional.
     */
    data: XOR<ProfesionalCreateInput, ProfesionalUncheckedCreateInput>
  }

  /**
   * Profesional createMany
   */
  export type ProfesionalCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profesionals.
     */
    data: ProfesionalCreateManyInput | ProfesionalCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profesional update
   */
  export type ProfesionalUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalInclude<ExtArgs> | null
    /**
     * The data needed to update a Profesional.
     */
    data: XOR<ProfesionalUpdateInput, ProfesionalUncheckedUpdateInput>
    /**
     * Choose, which Profesional to update.
     */
    where: ProfesionalWhereUniqueInput
  }

  /**
   * Profesional updateMany
   */
  export type ProfesionalUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profesionals.
     */
    data: XOR<ProfesionalUpdateManyMutationInput, ProfesionalUncheckedUpdateManyInput>
    /**
     * Filter which Profesionals to update
     */
    where?: ProfesionalWhereInput
    /**
     * Limit how many Profesionals to update.
     */
    limit?: number
  }

  /**
   * Profesional upsert
   */
  export type ProfesionalUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalInclude<ExtArgs> | null
    /**
     * The filter to search for the Profesional to update in case it exists.
     */
    where: ProfesionalWhereUniqueInput
    /**
     * In case the Profesional found by the `where` argument doesn't exist, create a new Profesional with this data.
     */
    create: XOR<ProfesionalCreateInput, ProfesionalUncheckedCreateInput>
    /**
     * In case the Profesional was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfesionalUpdateInput, ProfesionalUncheckedUpdateInput>
  }

  /**
   * Profesional delete
   */
  export type ProfesionalDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalInclude<ExtArgs> | null
    /**
     * Filter which Profesional to delete.
     */
    where: ProfesionalWhereUniqueInput
  }

  /**
   * Profesional deleteMany
   */
  export type ProfesionalDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profesionals to delete
     */
    where?: ProfesionalWhereInput
    /**
     * Limit how many Profesionals to delete.
     */
    limit?: number
  }

  /**
   * Profesional.bloquesAgenda
   */
  export type Profesional$bloquesAgendaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloqueAgenda
     */
    select?: BloqueAgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloqueAgenda
     */
    omit?: BloqueAgendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueAgendaInclude<ExtArgs> | null
    where?: BloqueAgendaWhereInput
    orderBy?: BloqueAgendaOrderByWithRelationInput | BloqueAgendaOrderByWithRelationInput[]
    cursor?: BloqueAgendaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BloqueAgendaScalarFieldEnum | BloqueAgendaScalarFieldEnum[]
  }

  /**
   * Profesional.citas
   */
  export type Profesional$citasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    where?: CitaWhereInput
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    cursor?: CitaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CitaScalarFieldEnum | CitaScalarFieldEnum[]
  }

  /**
   * Profesional.notas
   */
  export type Profesional$notasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaClinica
     */
    select?: NotaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotaClinica
     */
    omit?: NotaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaClinicaInclude<ExtArgs> | null
    where?: NotaClinicaWhereInput
    orderBy?: NotaClinicaOrderByWithRelationInput | NotaClinicaOrderByWithRelationInput[]
    cursor?: NotaClinicaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotaClinicaScalarFieldEnum | NotaClinicaScalarFieldEnum[]
  }

  /**
   * Profesional without action
   */
  export type ProfesionalDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profesional
     */
    select?: ProfesionalSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profesional
     */
    omit?: ProfesionalOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfesionalInclude<ExtArgs> | null
  }


  /**
   * Model UnidadAtencion
   */

  export type AggregateUnidadAtencion = {
    _count: UnidadAtencionCountAggregateOutputType | null
    _avg: UnidadAtencionAvgAggregateOutputType | null
    _sum: UnidadAtencionSumAggregateOutputType | null
    _min: UnidadAtencionMinAggregateOutputType | null
    _max: UnidadAtencionMaxAggregateOutputType | null
  }

  export type UnidadAtencionAvgAggregateOutputType = {
    id: number | null
  }

  export type UnidadAtencionSumAggregateOutputType = {
    id: number | null
  }

  export type UnidadAtencionMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    tipo: string | null
    direccion: string | null
    estado: boolean | null
  }

  export type UnidadAtencionMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    tipo: string | null
    direccion: string | null
    estado: boolean | null
  }

  export type UnidadAtencionCountAggregateOutputType = {
    id: number
    nombre: number
    tipo: number
    direccion: number
    estado: number
    _all: number
  }


  export type UnidadAtencionAvgAggregateInputType = {
    id?: true
  }

  export type UnidadAtencionSumAggregateInputType = {
    id?: true
  }

  export type UnidadAtencionMinAggregateInputType = {
    id?: true
    nombre?: true
    tipo?: true
    direccion?: true
    estado?: true
  }

  export type UnidadAtencionMaxAggregateInputType = {
    id?: true
    nombre?: true
    tipo?: true
    direccion?: true
    estado?: true
  }

  export type UnidadAtencionCountAggregateInputType = {
    id?: true
    nombre?: true
    tipo?: true
    direccion?: true
    estado?: true
    _all?: true
  }

  export type UnidadAtencionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnidadAtencion to aggregate.
     */
    where?: UnidadAtencionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnidadAtencions to fetch.
     */
    orderBy?: UnidadAtencionOrderByWithRelationInput | UnidadAtencionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UnidadAtencionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnidadAtencions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnidadAtencions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UnidadAtencions
    **/
    _count?: true | UnidadAtencionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UnidadAtencionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UnidadAtencionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UnidadAtencionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UnidadAtencionMaxAggregateInputType
  }

  export type GetUnidadAtencionAggregateType<T extends UnidadAtencionAggregateArgs> = {
        [P in keyof T & keyof AggregateUnidadAtencion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUnidadAtencion[P]>
      : GetScalarType<T[P], AggregateUnidadAtencion[P]>
  }




  export type UnidadAtencionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UnidadAtencionWhereInput
    orderBy?: UnidadAtencionOrderByWithAggregationInput | UnidadAtencionOrderByWithAggregationInput[]
    by: UnidadAtencionScalarFieldEnum[] | UnidadAtencionScalarFieldEnum
    having?: UnidadAtencionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UnidadAtencionCountAggregateInputType | true
    _avg?: UnidadAtencionAvgAggregateInputType
    _sum?: UnidadAtencionSumAggregateInputType
    _min?: UnidadAtencionMinAggregateInputType
    _max?: UnidadAtencionMaxAggregateInputType
  }

  export type UnidadAtencionGroupByOutputType = {
    id: number
    nombre: string
    tipo: string
    direccion: string
    estado: boolean
    _count: UnidadAtencionCountAggregateOutputType | null
    _avg: UnidadAtencionAvgAggregateOutputType | null
    _sum: UnidadAtencionSumAggregateOutputType | null
    _min: UnidadAtencionMinAggregateOutputType | null
    _max: UnidadAtencionMaxAggregateOutputType | null
  }

  type GetUnidadAtencionGroupByPayload<T extends UnidadAtencionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UnidadAtencionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UnidadAtencionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UnidadAtencionGroupByOutputType[P]>
            : GetScalarType<T[P], UnidadAtencionGroupByOutputType[P]>
        }
      >
    >


  export type UnidadAtencionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    tipo?: boolean
    direccion?: boolean
    estado?: boolean
    bloquesAgenda?: boolean | UnidadAtencion$bloquesAgendaArgs<ExtArgs>
    citas?: boolean | UnidadAtencion$citasArgs<ExtArgs>
    _count?: boolean | UnidadAtencionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["unidadAtencion"]>



  export type UnidadAtencionSelectScalar = {
    id?: boolean
    nombre?: boolean
    tipo?: boolean
    direccion?: boolean
    estado?: boolean
  }

  export type UnidadAtencionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "tipo" | "direccion" | "estado", ExtArgs["result"]["unidadAtencion"]>
  export type UnidadAtencionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    bloquesAgenda?: boolean | UnidadAtencion$bloquesAgendaArgs<ExtArgs>
    citas?: boolean | UnidadAtencion$citasArgs<ExtArgs>
    _count?: boolean | UnidadAtencionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UnidadAtencionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UnidadAtencion"
    objects: {
      bloquesAgenda: Prisma.$BloqueAgendaPayload<ExtArgs>[]
      citas: Prisma.$CitaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      tipo: string
      direccion: string
      estado: boolean
    }, ExtArgs["result"]["unidadAtencion"]>
    composites: {}
  }

  type UnidadAtencionGetPayload<S extends boolean | null | undefined | UnidadAtencionDefaultArgs> = $Result.GetResult<Prisma.$UnidadAtencionPayload, S>

  type UnidadAtencionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UnidadAtencionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UnidadAtencionCountAggregateInputType | true
    }

  export interface UnidadAtencionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UnidadAtencion'], meta: { name: 'UnidadAtencion' } }
    /**
     * Find zero or one UnidadAtencion that matches the filter.
     * @param {UnidadAtencionFindUniqueArgs} args - Arguments to find a UnidadAtencion
     * @example
     * // Get one UnidadAtencion
     * const unidadAtencion = await prisma.unidadAtencion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UnidadAtencionFindUniqueArgs>(args: SelectSubset<T, UnidadAtencionFindUniqueArgs<ExtArgs>>): Prisma__UnidadAtencionClient<$Result.GetResult<Prisma.$UnidadAtencionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UnidadAtencion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UnidadAtencionFindUniqueOrThrowArgs} args - Arguments to find a UnidadAtencion
     * @example
     * // Get one UnidadAtencion
     * const unidadAtencion = await prisma.unidadAtencion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UnidadAtencionFindUniqueOrThrowArgs>(args: SelectSubset<T, UnidadAtencionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UnidadAtencionClient<$Result.GetResult<Prisma.$UnidadAtencionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnidadAtencion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadAtencionFindFirstArgs} args - Arguments to find a UnidadAtencion
     * @example
     * // Get one UnidadAtencion
     * const unidadAtencion = await prisma.unidadAtencion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UnidadAtencionFindFirstArgs>(args?: SelectSubset<T, UnidadAtencionFindFirstArgs<ExtArgs>>): Prisma__UnidadAtencionClient<$Result.GetResult<Prisma.$UnidadAtencionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UnidadAtencion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadAtencionFindFirstOrThrowArgs} args - Arguments to find a UnidadAtencion
     * @example
     * // Get one UnidadAtencion
     * const unidadAtencion = await prisma.unidadAtencion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UnidadAtencionFindFirstOrThrowArgs>(args?: SelectSubset<T, UnidadAtencionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UnidadAtencionClient<$Result.GetResult<Prisma.$UnidadAtencionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UnidadAtencions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadAtencionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UnidadAtencions
     * const unidadAtencions = await prisma.unidadAtencion.findMany()
     * 
     * // Get first 10 UnidadAtencions
     * const unidadAtencions = await prisma.unidadAtencion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const unidadAtencionWithIdOnly = await prisma.unidadAtencion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UnidadAtencionFindManyArgs>(args?: SelectSubset<T, UnidadAtencionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UnidadAtencionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UnidadAtencion.
     * @param {UnidadAtencionCreateArgs} args - Arguments to create a UnidadAtencion.
     * @example
     * // Create one UnidadAtencion
     * const UnidadAtencion = await prisma.unidadAtencion.create({
     *   data: {
     *     // ... data to create a UnidadAtencion
     *   }
     * })
     * 
     */
    create<T extends UnidadAtencionCreateArgs>(args: SelectSubset<T, UnidadAtencionCreateArgs<ExtArgs>>): Prisma__UnidadAtencionClient<$Result.GetResult<Prisma.$UnidadAtencionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UnidadAtencions.
     * @param {UnidadAtencionCreateManyArgs} args - Arguments to create many UnidadAtencions.
     * @example
     * // Create many UnidadAtencions
     * const unidadAtencion = await prisma.unidadAtencion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UnidadAtencionCreateManyArgs>(args?: SelectSubset<T, UnidadAtencionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UnidadAtencion.
     * @param {UnidadAtencionDeleteArgs} args - Arguments to delete one UnidadAtencion.
     * @example
     * // Delete one UnidadAtencion
     * const UnidadAtencion = await prisma.unidadAtencion.delete({
     *   where: {
     *     // ... filter to delete one UnidadAtencion
     *   }
     * })
     * 
     */
    delete<T extends UnidadAtencionDeleteArgs>(args: SelectSubset<T, UnidadAtencionDeleteArgs<ExtArgs>>): Prisma__UnidadAtencionClient<$Result.GetResult<Prisma.$UnidadAtencionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UnidadAtencion.
     * @param {UnidadAtencionUpdateArgs} args - Arguments to update one UnidadAtencion.
     * @example
     * // Update one UnidadAtencion
     * const unidadAtencion = await prisma.unidadAtencion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UnidadAtencionUpdateArgs>(args: SelectSubset<T, UnidadAtencionUpdateArgs<ExtArgs>>): Prisma__UnidadAtencionClient<$Result.GetResult<Prisma.$UnidadAtencionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UnidadAtencions.
     * @param {UnidadAtencionDeleteManyArgs} args - Arguments to filter UnidadAtencions to delete.
     * @example
     * // Delete a few UnidadAtencions
     * const { count } = await prisma.unidadAtencion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UnidadAtencionDeleteManyArgs>(args?: SelectSubset<T, UnidadAtencionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UnidadAtencions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadAtencionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UnidadAtencions
     * const unidadAtencion = await prisma.unidadAtencion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UnidadAtencionUpdateManyArgs>(args: SelectSubset<T, UnidadAtencionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UnidadAtencion.
     * @param {UnidadAtencionUpsertArgs} args - Arguments to update or create a UnidadAtencion.
     * @example
     * // Update or create a UnidadAtencion
     * const unidadAtencion = await prisma.unidadAtencion.upsert({
     *   create: {
     *     // ... data to create a UnidadAtencion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UnidadAtencion we want to update
     *   }
     * })
     */
    upsert<T extends UnidadAtencionUpsertArgs>(args: SelectSubset<T, UnidadAtencionUpsertArgs<ExtArgs>>): Prisma__UnidadAtencionClient<$Result.GetResult<Prisma.$UnidadAtencionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UnidadAtencions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadAtencionCountArgs} args - Arguments to filter UnidadAtencions to count.
     * @example
     * // Count the number of UnidadAtencions
     * const count = await prisma.unidadAtencion.count({
     *   where: {
     *     // ... the filter for the UnidadAtencions we want to count
     *   }
     * })
    **/
    count<T extends UnidadAtencionCountArgs>(
      args?: Subset<T, UnidadAtencionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UnidadAtencionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UnidadAtencion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadAtencionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UnidadAtencionAggregateArgs>(args: Subset<T, UnidadAtencionAggregateArgs>): Prisma.PrismaPromise<GetUnidadAtencionAggregateType<T>>

    /**
     * Group by UnidadAtencion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UnidadAtencionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UnidadAtencionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UnidadAtencionGroupByArgs['orderBy'] }
        : { orderBy?: UnidadAtencionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UnidadAtencionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUnidadAtencionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UnidadAtencion model
   */
  readonly fields: UnidadAtencionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UnidadAtencion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UnidadAtencionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    bloquesAgenda<T extends UnidadAtencion$bloquesAgendaArgs<ExtArgs> = {}>(args?: Subset<T, UnidadAtencion$bloquesAgendaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloqueAgendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    citas<T extends UnidadAtencion$citasArgs<ExtArgs> = {}>(args?: Subset<T, UnidadAtencion$citasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UnidadAtencion model
   */
  interface UnidadAtencionFieldRefs {
    readonly id: FieldRef<"UnidadAtencion", 'Int'>
    readonly nombre: FieldRef<"UnidadAtencion", 'String'>
    readonly tipo: FieldRef<"UnidadAtencion", 'String'>
    readonly direccion: FieldRef<"UnidadAtencion", 'String'>
    readonly estado: FieldRef<"UnidadAtencion", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * UnidadAtencion findUnique
   */
  export type UnidadAtencionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnidadAtencion
     */
    select?: UnidadAtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnidadAtencion
     */
    omit?: UnidadAtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadAtencionInclude<ExtArgs> | null
    /**
     * Filter, which UnidadAtencion to fetch.
     */
    where: UnidadAtencionWhereUniqueInput
  }

  /**
   * UnidadAtencion findUniqueOrThrow
   */
  export type UnidadAtencionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnidadAtencion
     */
    select?: UnidadAtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnidadAtencion
     */
    omit?: UnidadAtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadAtencionInclude<ExtArgs> | null
    /**
     * Filter, which UnidadAtencion to fetch.
     */
    where: UnidadAtencionWhereUniqueInput
  }

  /**
   * UnidadAtencion findFirst
   */
  export type UnidadAtencionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnidadAtencion
     */
    select?: UnidadAtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnidadAtencion
     */
    omit?: UnidadAtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadAtencionInclude<ExtArgs> | null
    /**
     * Filter, which UnidadAtencion to fetch.
     */
    where?: UnidadAtencionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnidadAtencions to fetch.
     */
    orderBy?: UnidadAtencionOrderByWithRelationInput | UnidadAtencionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnidadAtencions.
     */
    cursor?: UnidadAtencionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnidadAtencions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnidadAtencions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnidadAtencions.
     */
    distinct?: UnidadAtencionScalarFieldEnum | UnidadAtencionScalarFieldEnum[]
  }

  /**
   * UnidadAtencion findFirstOrThrow
   */
  export type UnidadAtencionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnidadAtencion
     */
    select?: UnidadAtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnidadAtencion
     */
    omit?: UnidadAtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadAtencionInclude<ExtArgs> | null
    /**
     * Filter, which UnidadAtencion to fetch.
     */
    where?: UnidadAtencionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnidadAtencions to fetch.
     */
    orderBy?: UnidadAtencionOrderByWithRelationInput | UnidadAtencionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UnidadAtencions.
     */
    cursor?: UnidadAtencionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnidadAtencions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnidadAtencions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UnidadAtencions.
     */
    distinct?: UnidadAtencionScalarFieldEnum | UnidadAtencionScalarFieldEnum[]
  }

  /**
   * UnidadAtencion findMany
   */
  export type UnidadAtencionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnidadAtencion
     */
    select?: UnidadAtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnidadAtencion
     */
    omit?: UnidadAtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadAtencionInclude<ExtArgs> | null
    /**
     * Filter, which UnidadAtencions to fetch.
     */
    where?: UnidadAtencionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UnidadAtencions to fetch.
     */
    orderBy?: UnidadAtencionOrderByWithRelationInput | UnidadAtencionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UnidadAtencions.
     */
    cursor?: UnidadAtencionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UnidadAtencions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UnidadAtencions.
     */
    skip?: number
    distinct?: UnidadAtencionScalarFieldEnum | UnidadAtencionScalarFieldEnum[]
  }

  /**
   * UnidadAtencion create
   */
  export type UnidadAtencionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnidadAtencion
     */
    select?: UnidadAtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnidadAtencion
     */
    omit?: UnidadAtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadAtencionInclude<ExtArgs> | null
    /**
     * The data needed to create a UnidadAtencion.
     */
    data: XOR<UnidadAtencionCreateInput, UnidadAtencionUncheckedCreateInput>
  }

  /**
   * UnidadAtencion createMany
   */
  export type UnidadAtencionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UnidadAtencions.
     */
    data: UnidadAtencionCreateManyInput | UnidadAtencionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UnidadAtencion update
   */
  export type UnidadAtencionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnidadAtencion
     */
    select?: UnidadAtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnidadAtencion
     */
    omit?: UnidadAtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadAtencionInclude<ExtArgs> | null
    /**
     * The data needed to update a UnidadAtencion.
     */
    data: XOR<UnidadAtencionUpdateInput, UnidadAtencionUncheckedUpdateInput>
    /**
     * Choose, which UnidadAtencion to update.
     */
    where: UnidadAtencionWhereUniqueInput
  }

  /**
   * UnidadAtencion updateMany
   */
  export type UnidadAtencionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UnidadAtencions.
     */
    data: XOR<UnidadAtencionUpdateManyMutationInput, UnidadAtencionUncheckedUpdateManyInput>
    /**
     * Filter which UnidadAtencions to update
     */
    where?: UnidadAtencionWhereInput
    /**
     * Limit how many UnidadAtencions to update.
     */
    limit?: number
  }

  /**
   * UnidadAtencion upsert
   */
  export type UnidadAtencionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnidadAtencion
     */
    select?: UnidadAtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnidadAtencion
     */
    omit?: UnidadAtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadAtencionInclude<ExtArgs> | null
    /**
     * The filter to search for the UnidadAtencion to update in case it exists.
     */
    where: UnidadAtencionWhereUniqueInput
    /**
     * In case the UnidadAtencion found by the `where` argument doesn't exist, create a new UnidadAtencion with this data.
     */
    create: XOR<UnidadAtencionCreateInput, UnidadAtencionUncheckedCreateInput>
    /**
     * In case the UnidadAtencion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UnidadAtencionUpdateInput, UnidadAtencionUncheckedUpdateInput>
  }

  /**
   * UnidadAtencion delete
   */
  export type UnidadAtencionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnidadAtencion
     */
    select?: UnidadAtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnidadAtencion
     */
    omit?: UnidadAtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadAtencionInclude<ExtArgs> | null
    /**
     * Filter which UnidadAtencion to delete.
     */
    where: UnidadAtencionWhereUniqueInput
  }

  /**
   * UnidadAtencion deleteMany
   */
  export type UnidadAtencionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UnidadAtencions to delete
     */
    where?: UnidadAtencionWhereInput
    /**
     * Limit how many UnidadAtencions to delete.
     */
    limit?: number
  }

  /**
   * UnidadAtencion.bloquesAgenda
   */
  export type UnidadAtencion$bloquesAgendaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloqueAgenda
     */
    select?: BloqueAgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloqueAgenda
     */
    omit?: BloqueAgendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueAgendaInclude<ExtArgs> | null
    where?: BloqueAgendaWhereInput
    orderBy?: BloqueAgendaOrderByWithRelationInput | BloqueAgendaOrderByWithRelationInput[]
    cursor?: BloqueAgendaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BloqueAgendaScalarFieldEnum | BloqueAgendaScalarFieldEnum[]
  }

  /**
   * UnidadAtencion.citas
   */
  export type UnidadAtencion$citasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    where?: CitaWhereInput
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    cursor?: CitaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CitaScalarFieldEnum | CitaScalarFieldEnum[]
  }

  /**
   * UnidadAtencion without action
   */
  export type UnidadAtencionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UnidadAtencion
     */
    select?: UnidadAtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UnidadAtencion
     */
    omit?: UnidadAtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UnidadAtencionInclude<ExtArgs> | null
  }


  /**
   * Model BloqueAgenda
   */

  export type AggregateBloqueAgenda = {
    _count: BloqueAgendaCountAggregateOutputType | null
    _avg: BloqueAgendaAvgAggregateOutputType | null
    _sum: BloqueAgendaSumAggregateOutputType | null
    _min: BloqueAgendaMinAggregateOutputType | null
    _max: BloqueAgendaMaxAggregateOutputType | null
  }

  export type BloqueAgendaAvgAggregateOutputType = {
    id: number | null
    capacidad: number | null
    profesionalId: number | null
    unidadId: number | null
  }

  export type BloqueAgendaSumAggregateOutputType = {
    id: number | null
    capacidad: number | null
    profesionalId: number | null
    unidadId: number | null
  }

  export type BloqueAgendaMinAggregateOutputType = {
    id: number | null
    fechaInicio: Date | null
    fechaFin: Date | null
    capacidad: number | null
    estado: string | null
    profesionalId: number | null
    unidadId: number | null
  }

  export type BloqueAgendaMaxAggregateOutputType = {
    id: number | null
    fechaInicio: Date | null
    fechaFin: Date | null
    capacidad: number | null
    estado: string | null
    profesionalId: number | null
    unidadId: number | null
  }

  export type BloqueAgendaCountAggregateOutputType = {
    id: number
    fechaInicio: number
    fechaFin: number
    capacidad: number
    estado: number
    profesionalId: number
    unidadId: number
    _all: number
  }


  export type BloqueAgendaAvgAggregateInputType = {
    id?: true
    capacidad?: true
    profesionalId?: true
    unidadId?: true
  }

  export type BloqueAgendaSumAggregateInputType = {
    id?: true
    capacidad?: true
    profesionalId?: true
    unidadId?: true
  }

  export type BloqueAgendaMinAggregateInputType = {
    id?: true
    fechaInicio?: true
    fechaFin?: true
    capacidad?: true
    estado?: true
    profesionalId?: true
    unidadId?: true
  }

  export type BloqueAgendaMaxAggregateInputType = {
    id?: true
    fechaInicio?: true
    fechaFin?: true
    capacidad?: true
    estado?: true
    profesionalId?: true
    unidadId?: true
  }

  export type BloqueAgendaCountAggregateInputType = {
    id?: true
    fechaInicio?: true
    fechaFin?: true
    capacidad?: true
    estado?: true
    profesionalId?: true
    unidadId?: true
    _all?: true
  }

  export type BloqueAgendaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BloqueAgenda to aggregate.
     */
    where?: BloqueAgendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloqueAgenda to fetch.
     */
    orderBy?: BloqueAgendaOrderByWithRelationInput | BloqueAgendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BloqueAgendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloqueAgenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloqueAgenda.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BloqueAgenda
    **/
    _count?: true | BloqueAgendaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BloqueAgendaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BloqueAgendaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BloqueAgendaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BloqueAgendaMaxAggregateInputType
  }

  export type GetBloqueAgendaAggregateType<T extends BloqueAgendaAggregateArgs> = {
        [P in keyof T & keyof AggregateBloqueAgenda]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBloqueAgenda[P]>
      : GetScalarType<T[P], AggregateBloqueAgenda[P]>
  }




  export type BloqueAgendaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BloqueAgendaWhereInput
    orderBy?: BloqueAgendaOrderByWithAggregationInput | BloqueAgendaOrderByWithAggregationInput[]
    by: BloqueAgendaScalarFieldEnum[] | BloqueAgendaScalarFieldEnum
    having?: BloqueAgendaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BloqueAgendaCountAggregateInputType | true
    _avg?: BloqueAgendaAvgAggregateInputType
    _sum?: BloqueAgendaSumAggregateInputType
    _min?: BloqueAgendaMinAggregateInputType
    _max?: BloqueAgendaMaxAggregateInputType
  }

  export type BloqueAgendaGroupByOutputType = {
    id: number
    fechaInicio: Date
    fechaFin: Date
    capacidad: number
    estado: string
    profesionalId: number
    unidadId: number
    _count: BloqueAgendaCountAggregateOutputType | null
    _avg: BloqueAgendaAvgAggregateOutputType | null
    _sum: BloqueAgendaSumAggregateOutputType | null
    _min: BloqueAgendaMinAggregateOutputType | null
    _max: BloqueAgendaMaxAggregateOutputType | null
  }

  type GetBloqueAgendaGroupByPayload<T extends BloqueAgendaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BloqueAgendaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BloqueAgendaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BloqueAgendaGroupByOutputType[P]>
            : GetScalarType<T[P], BloqueAgendaGroupByOutputType[P]>
        }
      >
    >


  export type BloqueAgendaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    capacidad?: boolean
    estado?: boolean
    profesionalId?: boolean
    unidadId?: boolean
    profesional?: boolean | ProfesionalDefaultArgs<ExtArgs>
    unidad?: boolean | UnidadAtencionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bloqueAgenda"]>



  export type BloqueAgendaSelectScalar = {
    id?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    capacidad?: boolean
    estado?: boolean
    profesionalId?: boolean
    unidadId?: boolean
  }

  export type BloqueAgendaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fechaInicio" | "fechaFin" | "capacidad" | "estado" | "profesionalId" | "unidadId", ExtArgs["result"]["bloqueAgenda"]>
  export type BloqueAgendaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profesional?: boolean | ProfesionalDefaultArgs<ExtArgs>
    unidad?: boolean | UnidadAtencionDefaultArgs<ExtArgs>
  }

  export type $BloqueAgendaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BloqueAgenda"
    objects: {
      profesional: Prisma.$ProfesionalPayload<ExtArgs>
      unidad: Prisma.$UnidadAtencionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fechaInicio: Date
      fechaFin: Date
      capacidad: number
      estado: string
      profesionalId: number
      unidadId: number
    }, ExtArgs["result"]["bloqueAgenda"]>
    composites: {}
  }

  type BloqueAgendaGetPayload<S extends boolean | null | undefined | BloqueAgendaDefaultArgs> = $Result.GetResult<Prisma.$BloqueAgendaPayload, S>

  type BloqueAgendaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BloqueAgendaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BloqueAgendaCountAggregateInputType | true
    }

  export interface BloqueAgendaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BloqueAgenda'], meta: { name: 'BloqueAgenda' } }
    /**
     * Find zero or one BloqueAgenda that matches the filter.
     * @param {BloqueAgendaFindUniqueArgs} args - Arguments to find a BloqueAgenda
     * @example
     * // Get one BloqueAgenda
     * const bloqueAgenda = await prisma.bloqueAgenda.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BloqueAgendaFindUniqueArgs>(args: SelectSubset<T, BloqueAgendaFindUniqueArgs<ExtArgs>>): Prisma__BloqueAgendaClient<$Result.GetResult<Prisma.$BloqueAgendaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BloqueAgenda that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BloqueAgendaFindUniqueOrThrowArgs} args - Arguments to find a BloqueAgenda
     * @example
     * // Get one BloqueAgenda
     * const bloqueAgenda = await prisma.bloqueAgenda.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BloqueAgendaFindUniqueOrThrowArgs>(args: SelectSubset<T, BloqueAgendaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BloqueAgendaClient<$Result.GetResult<Prisma.$BloqueAgendaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BloqueAgenda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloqueAgendaFindFirstArgs} args - Arguments to find a BloqueAgenda
     * @example
     * // Get one BloqueAgenda
     * const bloqueAgenda = await prisma.bloqueAgenda.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BloqueAgendaFindFirstArgs>(args?: SelectSubset<T, BloqueAgendaFindFirstArgs<ExtArgs>>): Prisma__BloqueAgendaClient<$Result.GetResult<Prisma.$BloqueAgendaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BloqueAgenda that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloqueAgendaFindFirstOrThrowArgs} args - Arguments to find a BloqueAgenda
     * @example
     * // Get one BloqueAgenda
     * const bloqueAgenda = await prisma.bloqueAgenda.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BloqueAgendaFindFirstOrThrowArgs>(args?: SelectSubset<T, BloqueAgendaFindFirstOrThrowArgs<ExtArgs>>): Prisma__BloqueAgendaClient<$Result.GetResult<Prisma.$BloqueAgendaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BloqueAgenda that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloqueAgendaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BloqueAgenda
     * const bloqueAgenda = await prisma.bloqueAgenda.findMany()
     * 
     * // Get first 10 BloqueAgenda
     * const bloqueAgenda = await prisma.bloqueAgenda.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bloqueAgendaWithIdOnly = await prisma.bloqueAgenda.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BloqueAgendaFindManyArgs>(args?: SelectSubset<T, BloqueAgendaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BloqueAgendaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BloqueAgenda.
     * @param {BloqueAgendaCreateArgs} args - Arguments to create a BloqueAgenda.
     * @example
     * // Create one BloqueAgenda
     * const BloqueAgenda = await prisma.bloqueAgenda.create({
     *   data: {
     *     // ... data to create a BloqueAgenda
     *   }
     * })
     * 
     */
    create<T extends BloqueAgendaCreateArgs>(args: SelectSubset<T, BloqueAgendaCreateArgs<ExtArgs>>): Prisma__BloqueAgendaClient<$Result.GetResult<Prisma.$BloqueAgendaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BloqueAgenda.
     * @param {BloqueAgendaCreateManyArgs} args - Arguments to create many BloqueAgenda.
     * @example
     * // Create many BloqueAgenda
     * const bloqueAgenda = await prisma.bloqueAgenda.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BloqueAgendaCreateManyArgs>(args?: SelectSubset<T, BloqueAgendaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BloqueAgenda.
     * @param {BloqueAgendaDeleteArgs} args - Arguments to delete one BloqueAgenda.
     * @example
     * // Delete one BloqueAgenda
     * const BloqueAgenda = await prisma.bloqueAgenda.delete({
     *   where: {
     *     // ... filter to delete one BloqueAgenda
     *   }
     * })
     * 
     */
    delete<T extends BloqueAgendaDeleteArgs>(args: SelectSubset<T, BloqueAgendaDeleteArgs<ExtArgs>>): Prisma__BloqueAgendaClient<$Result.GetResult<Prisma.$BloqueAgendaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BloqueAgenda.
     * @param {BloqueAgendaUpdateArgs} args - Arguments to update one BloqueAgenda.
     * @example
     * // Update one BloqueAgenda
     * const bloqueAgenda = await prisma.bloqueAgenda.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BloqueAgendaUpdateArgs>(args: SelectSubset<T, BloqueAgendaUpdateArgs<ExtArgs>>): Prisma__BloqueAgendaClient<$Result.GetResult<Prisma.$BloqueAgendaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BloqueAgenda.
     * @param {BloqueAgendaDeleteManyArgs} args - Arguments to filter BloqueAgenda to delete.
     * @example
     * // Delete a few BloqueAgenda
     * const { count } = await prisma.bloqueAgenda.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BloqueAgendaDeleteManyArgs>(args?: SelectSubset<T, BloqueAgendaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BloqueAgenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloqueAgendaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BloqueAgenda
     * const bloqueAgenda = await prisma.bloqueAgenda.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BloqueAgendaUpdateManyArgs>(args: SelectSubset<T, BloqueAgendaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BloqueAgenda.
     * @param {BloqueAgendaUpsertArgs} args - Arguments to update or create a BloqueAgenda.
     * @example
     * // Update or create a BloqueAgenda
     * const bloqueAgenda = await prisma.bloqueAgenda.upsert({
     *   create: {
     *     // ... data to create a BloqueAgenda
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BloqueAgenda we want to update
     *   }
     * })
     */
    upsert<T extends BloqueAgendaUpsertArgs>(args: SelectSubset<T, BloqueAgendaUpsertArgs<ExtArgs>>): Prisma__BloqueAgendaClient<$Result.GetResult<Prisma.$BloqueAgendaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BloqueAgenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloqueAgendaCountArgs} args - Arguments to filter BloqueAgenda to count.
     * @example
     * // Count the number of BloqueAgenda
     * const count = await prisma.bloqueAgenda.count({
     *   where: {
     *     // ... the filter for the BloqueAgenda we want to count
     *   }
     * })
    **/
    count<T extends BloqueAgendaCountArgs>(
      args?: Subset<T, BloqueAgendaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BloqueAgendaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BloqueAgenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloqueAgendaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BloqueAgendaAggregateArgs>(args: Subset<T, BloqueAgendaAggregateArgs>): Prisma.PrismaPromise<GetBloqueAgendaAggregateType<T>>

    /**
     * Group by BloqueAgenda.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BloqueAgendaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BloqueAgendaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BloqueAgendaGroupByArgs['orderBy'] }
        : { orderBy?: BloqueAgendaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BloqueAgendaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBloqueAgendaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BloqueAgenda model
   */
  readonly fields: BloqueAgendaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BloqueAgenda.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BloqueAgendaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profesional<T extends ProfesionalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfesionalDefaultArgs<ExtArgs>>): Prisma__ProfesionalClient<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    unidad<T extends UnidadAtencionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnidadAtencionDefaultArgs<ExtArgs>>): Prisma__UnidadAtencionClient<$Result.GetResult<Prisma.$UnidadAtencionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the BloqueAgenda model
   */
  interface BloqueAgendaFieldRefs {
    readonly id: FieldRef<"BloqueAgenda", 'Int'>
    readonly fechaInicio: FieldRef<"BloqueAgenda", 'DateTime'>
    readonly fechaFin: FieldRef<"BloqueAgenda", 'DateTime'>
    readonly capacidad: FieldRef<"BloqueAgenda", 'Int'>
    readonly estado: FieldRef<"BloqueAgenda", 'String'>
    readonly profesionalId: FieldRef<"BloqueAgenda", 'Int'>
    readonly unidadId: FieldRef<"BloqueAgenda", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * BloqueAgenda findUnique
   */
  export type BloqueAgendaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloqueAgenda
     */
    select?: BloqueAgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloqueAgenda
     */
    omit?: BloqueAgendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueAgendaInclude<ExtArgs> | null
    /**
     * Filter, which BloqueAgenda to fetch.
     */
    where: BloqueAgendaWhereUniqueInput
  }

  /**
   * BloqueAgenda findUniqueOrThrow
   */
  export type BloqueAgendaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloqueAgenda
     */
    select?: BloqueAgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloqueAgenda
     */
    omit?: BloqueAgendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueAgendaInclude<ExtArgs> | null
    /**
     * Filter, which BloqueAgenda to fetch.
     */
    where: BloqueAgendaWhereUniqueInput
  }

  /**
   * BloqueAgenda findFirst
   */
  export type BloqueAgendaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloqueAgenda
     */
    select?: BloqueAgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloqueAgenda
     */
    omit?: BloqueAgendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueAgendaInclude<ExtArgs> | null
    /**
     * Filter, which BloqueAgenda to fetch.
     */
    where?: BloqueAgendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloqueAgenda to fetch.
     */
    orderBy?: BloqueAgendaOrderByWithRelationInput | BloqueAgendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BloqueAgenda.
     */
    cursor?: BloqueAgendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloqueAgenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloqueAgenda.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BloqueAgenda.
     */
    distinct?: BloqueAgendaScalarFieldEnum | BloqueAgendaScalarFieldEnum[]
  }

  /**
   * BloqueAgenda findFirstOrThrow
   */
  export type BloqueAgendaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloqueAgenda
     */
    select?: BloqueAgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloqueAgenda
     */
    omit?: BloqueAgendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueAgendaInclude<ExtArgs> | null
    /**
     * Filter, which BloqueAgenda to fetch.
     */
    where?: BloqueAgendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloqueAgenda to fetch.
     */
    orderBy?: BloqueAgendaOrderByWithRelationInput | BloqueAgendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BloqueAgenda.
     */
    cursor?: BloqueAgendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloqueAgenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloqueAgenda.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BloqueAgenda.
     */
    distinct?: BloqueAgendaScalarFieldEnum | BloqueAgendaScalarFieldEnum[]
  }

  /**
   * BloqueAgenda findMany
   */
  export type BloqueAgendaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloqueAgenda
     */
    select?: BloqueAgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloqueAgenda
     */
    omit?: BloqueAgendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueAgendaInclude<ExtArgs> | null
    /**
     * Filter, which BloqueAgenda to fetch.
     */
    where?: BloqueAgendaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BloqueAgenda to fetch.
     */
    orderBy?: BloqueAgendaOrderByWithRelationInput | BloqueAgendaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BloqueAgenda.
     */
    cursor?: BloqueAgendaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BloqueAgenda from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BloqueAgenda.
     */
    skip?: number
    distinct?: BloqueAgendaScalarFieldEnum | BloqueAgendaScalarFieldEnum[]
  }

  /**
   * BloqueAgenda create
   */
  export type BloqueAgendaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloqueAgenda
     */
    select?: BloqueAgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloqueAgenda
     */
    omit?: BloqueAgendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueAgendaInclude<ExtArgs> | null
    /**
     * The data needed to create a BloqueAgenda.
     */
    data: XOR<BloqueAgendaCreateInput, BloqueAgendaUncheckedCreateInput>
  }

  /**
   * BloqueAgenda createMany
   */
  export type BloqueAgendaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BloqueAgenda.
     */
    data: BloqueAgendaCreateManyInput | BloqueAgendaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BloqueAgenda update
   */
  export type BloqueAgendaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloqueAgenda
     */
    select?: BloqueAgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloqueAgenda
     */
    omit?: BloqueAgendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueAgendaInclude<ExtArgs> | null
    /**
     * The data needed to update a BloqueAgenda.
     */
    data: XOR<BloqueAgendaUpdateInput, BloqueAgendaUncheckedUpdateInput>
    /**
     * Choose, which BloqueAgenda to update.
     */
    where: BloqueAgendaWhereUniqueInput
  }

  /**
   * BloqueAgenda updateMany
   */
  export type BloqueAgendaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BloqueAgenda.
     */
    data: XOR<BloqueAgendaUpdateManyMutationInput, BloqueAgendaUncheckedUpdateManyInput>
    /**
     * Filter which BloqueAgenda to update
     */
    where?: BloqueAgendaWhereInput
    /**
     * Limit how many BloqueAgenda to update.
     */
    limit?: number
  }

  /**
   * BloqueAgenda upsert
   */
  export type BloqueAgendaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloqueAgenda
     */
    select?: BloqueAgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloqueAgenda
     */
    omit?: BloqueAgendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueAgendaInclude<ExtArgs> | null
    /**
     * The filter to search for the BloqueAgenda to update in case it exists.
     */
    where: BloqueAgendaWhereUniqueInput
    /**
     * In case the BloqueAgenda found by the `where` argument doesn't exist, create a new BloqueAgenda with this data.
     */
    create: XOR<BloqueAgendaCreateInput, BloqueAgendaUncheckedCreateInput>
    /**
     * In case the BloqueAgenda was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BloqueAgendaUpdateInput, BloqueAgendaUncheckedUpdateInput>
  }

  /**
   * BloqueAgenda delete
   */
  export type BloqueAgendaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloqueAgenda
     */
    select?: BloqueAgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloqueAgenda
     */
    omit?: BloqueAgendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueAgendaInclude<ExtArgs> | null
    /**
     * Filter which BloqueAgenda to delete.
     */
    where: BloqueAgendaWhereUniqueInput
  }

  /**
   * BloqueAgenda deleteMany
   */
  export type BloqueAgendaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BloqueAgenda to delete
     */
    where?: BloqueAgendaWhereInput
    /**
     * Limit how many BloqueAgenda to delete.
     */
    limit?: number
  }

  /**
   * BloqueAgenda without action
   */
  export type BloqueAgendaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BloqueAgenda
     */
    select?: BloqueAgendaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BloqueAgenda
     */
    omit?: BloqueAgendaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BloqueAgendaInclude<ExtArgs> | null
  }


  /**
   * Model Cita
   */

  export type AggregateCita = {
    _count: CitaCountAggregateOutputType | null
    _avg: CitaAvgAggregateOutputType | null
    _sum: CitaSumAggregateOutputType | null
    _min: CitaMinAggregateOutputType | null
    _max: CitaMaxAggregateOutputType | null
  }

  export type CitaAvgAggregateOutputType = {
    id: number | null
    pacienteId: number | null
    profesionalId: number | null
    unidadId: number | null
  }

  export type CitaSumAggregateOutputType = {
    id: number | null
    pacienteId: number | null
    profesionalId: number | null
    unidadId: number | null
  }

  export type CitaMinAggregateOutputType = {
    id: number | null
    fechaInicio: Date | null
    fechaFin: Date | null
    motivo: string | null
    estado: string | null
    canal: string | null
    pacienteId: number | null
    profesionalId: number | null
    unidadId: number | null
  }

  export type CitaMaxAggregateOutputType = {
    id: number | null
    fechaInicio: Date | null
    fechaFin: Date | null
    motivo: string | null
    estado: string | null
    canal: string | null
    pacienteId: number | null
    profesionalId: number | null
    unidadId: number | null
  }

  export type CitaCountAggregateOutputType = {
    id: number
    fechaInicio: number
    fechaFin: number
    motivo: number
    estado: number
    canal: number
    pacienteId: number
    profesionalId: number
    unidadId: number
    _all: number
  }


  export type CitaAvgAggregateInputType = {
    id?: true
    pacienteId?: true
    profesionalId?: true
    unidadId?: true
  }

  export type CitaSumAggregateInputType = {
    id?: true
    pacienteId?: true
    profesionalId?: true
    unidadId?: true
  }

  export type CitaMinAggregateInputType = {
    id?: true
    fechaInicio?: true
    fechaFin?: true
    motivo?: true
    estado?: true
    canal?: true
    pacienteId?: true
    profesionalId?: true
    unidadId?: true
  }

  export type CitaMaxAggregateInputType = {
    id?: true
    fechaInicio?: true
    fechaFin?: true
    motivo?: true
    estado?: true
    canal?: true
    pacienteId?: true
    profesionalId?: true
    unidadId?: true
  }

  export type CitaCountAggregateInputType = {
    id?: true
    fechaInicio?: true
    fechaFin?: true
    motivo?: true
    estado?: true
    canal?: true
    pacienteId?: true
    profesionalId?: true
    unidadId?: true
    _all?: true
  }

  export type CitaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cita to aggregate.
     */
    where?: CitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citas to fetch.
     */
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Citas
    **/
    _count?: true | CitaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CitaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CitaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CitaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CitaMaxAggregateInputType
  }

  export type GetCitaAggregateType<T extends CitaAggregateArgs> = {
        [P in keyof T & keyof AggregateCita]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCita[P]>
      : GetScalarType<T[P], AggregateCita[P]>
  }




  export type CitaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CitaWhereInput
    orderBy?: CitaOrderByWithAggregationInput | CitaOrderByWithAggregationInput[]
    by: CitaScalarFieldEnum[] | CitaScalarFieldEnum
    having?: CitaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CitaCountAggregateInputType | true
    _avg?: CitaAvgAggregateInputType
    _sum?: CitaSumAggregateInputType
    _min?: CitaMinAggregateInputType
    _max?: CitaMaxAggregateInputType
  }

  export type CitaGroupByOutputType = {
    id: number
    fechaInicio: Date
    fechaFin: Date
    motivo: string
    estado: string
    canal: string
    pacienteId: number
    profesionalId: number
    unidadId: number
    _count: CitaCountAggregateOutputType | null
    _avg: CitaAvgAggregateOutputType | null
    _sum: CitaSumAggregateOutputType | null
    _min: CitaMinAggregateOutputType | null
    _max: CitaMaxAggregateOutputType | null
  }

  type GetCitaGroupByPayload<T extends CitaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CitaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CitaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CitaGroupByOutputType[P]>
            : GetScalarType<T[P], CitaGroupByOutputType[P]>
        }
      >
    >


  export type CitaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    motivo?: boolean
    estado?: boolean
    canal?: boolean
    pacienteId?: boolean
    profesionalId?: boolean
    unidadId?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    profesional?: boolean | ProfesionalDefaultArgs<ExtArgs>
    unidad?: boolean | UnidadAtencionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cita"]>



  export type CitaSelectScalar = {
    id?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    motivo?: boolean
    estado?: boolean
    canal?: boolean
    pacienteId?: boolean
    profesionalId?: boolean
    unidadId?: boolean
  }

  export type CitaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fechaInicio" | "fechaFin" | "motivo" | "estado" | "canal" | "pacienteId" | "profesionalId" | "unidadId", ExtArgs["result"]["cita"]>
  export type CitaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    profesional?: boolean | ProfesionalDefaultArgs<ExtArgs>
    unidad?: boolean | UnidadAtencionDefaultArgs<ExtArgs>
  }

  export type $CitaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cita"
    objects: {
      paciente: Prisma.$PacientePayload<ExtArgs>
      profesional: Prisma.$ProfesionalPayload<ExtArgs>
      unidad: Prisma.$UnidadAtencionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fechaInicio: Date
      fechaFin: Date
      motivo: string
      estado: string
      canal: string
      pacienteId: number
      profesionalId: number
      unidadId: number
    }, ExtArgs["result"]["cita"]>
    composites: {}
  }

  type CitaGetPayload<S extends boolean | null | undefined | CitaDefaultArgs> = $Result.GetResult<Prisma.$CitaPayload, S>

  type CitaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CitaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CitaCountAggregateInputType | true
    }

  export interface CitaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cita'], meta: { name: 'Cita' } }
    /**
     * Find zero or one Cita that matches the filter.
     * @param {CitaFindUniqueArgs} args - Arguments to find a Cita
     * @example
     * // Get one Cita
     * const cita = await prisma.cita.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CitaFindUniqueArgs>(args: SelectSubset<T, CitaFindUniqueArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cita that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CitaFindUniqueOrThrowArgs} args - Arguments to find a Cita
     * @example
     * // Get one Cita
     * const cita = await prisma.cita.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CitaFindUniqueOrThrowArgs>(args: SelectSubset<T, CitaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cita that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaFindFirstArgs} args - Arguments to find a Cita
     * @example
     * // Get one Cita
     * const cita = await prisma.cita.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CitaFindFirstArgs>(args?: SelectSubset<T, CitaFindFirstArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cita that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaFindFirstOrThrowArgs} args - Arguments to find a Cita
     * @example
     * // Get one Cita
     * const cita = await prisma.cita.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CitaFindFirstOrThrowArgs>(args?: SelectSubset<T, CitaFindFirstOrThrowArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Citas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Citas
     * const citas = await prisma.cita.findMany()
     * 
     * // Get first 10 Citas
     * const citas = await prisma.cita.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const citaWithIdOnly = await prisma.cita.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CitaFindManyArgs>(args?: SelectSubset<T, CitaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cita.
     * @param {CitaCreateArgs} args - Arguments to create a Cita.
     * @example
     * // Create one Cita
     * const Cita = await prisma.cita.create({
     *   data: {
     *     // ... data to create a Cita
     *   }
     * })
     * 
     */
    create<T extends CitaCreateArgs>(args: SelectSubset<T, CitaCreateArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Citas.
     * @param {CitaCreateManyArgs} args - Arguments to create many Citas.
     * @example
     * // Create many Citas
     * const cita = await prisma.cita.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CitaCreateManyArgs>(args?: SelectSubset<T, CitaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cita.
     * @param {CitaDeleteArgs} args - Arguments to delete one Cita.
     * @example
     * // Delete one Cita
     * const Cita = await prisma.cita.delete({
     *   where: {
     *     // ... filter to delete one Cita
     *   }
     * })
     * 
     */
    delete<T extends CitaDeleteArgs>(args: SelectSubset<T, CitaDeleteArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cita.
     * @param {CitaUpdateArgs} args - Arguments to update one Cita.
     * @example
     * // Update one Cita
     * const cita = await prisma.cita.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CitaUpdateArgs>(args: SelectSubset<T, CitaUpdateArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Citas.
     * @param {CitaDeleteManyArgs} args - Arguments to filter Citas to delete.
     * @example
     * // Delete a few Citas
     * const { count } = await prisma.cita.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CitaDeleteManyArgs>(args?: SelectSubset<T, CitaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Citas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Citas
     * const cita = await prisma.cita.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CitaUpdateManyArgs>(args: SelectSubset<T, CitaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cita.
     * @param {CitaUpsertArgs} args - Arguments to update or create a Cita.
     * @example
     * // Update or create a Cita
     * const cita = await prisma.cita.upsert({
     *   create: {
     *     // ... data to create a Cita
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cita we want to update
     *   }
     * })
     */
    upsert<T extends CitaUpsertArgs>(args: SelectSubset<T, CitaUpsertArgs<ExtArgs>>): Prisma__CitaClient<$Result.GetResult<Prisma.$CitaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Citas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaCountArgs} args - Arguments to filter Citas to count.
     * @example
     * // Count the number of Citas
     * const count = await prisma.cita.count({
     *   where: {
     *     // ... the filter for the Citas we want to count
     *   }
     * })
    **/
    count<T extends CitaCountArgs>(
      args?: Subset<T, CitaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CitaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CitaAggregateArgs>(args: Subset<T, CitaAggregateArgs>): Prisma.PrismaPromise<GetCitaAggregateType<T>>

    /**
     * Group by Cita.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CitaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CitaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CitaGroupByArgs['orderBy'] }
        : { orderBy?: CitaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CitaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCitaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cita model
   */
  readonly fields: CitaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cita.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CitaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paciente<T extends PacienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PacienteDefaultArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profesional<T extends ProfesionalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfesionalDefaultArgs<ExtArgs>>): Prisma__ProfesionalClient<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    unidad<T extends UnidadAtencionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UnidadAtencionDefaultArgs<ExtArgs>>): Prisma__UnidadAtencionClient<$Result.GetResult<Prisma.$UnidadAtencionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cita model
   */
  interface CitaFieldRefs {
    readonly id: FieldRef<"Cita", 'Int'>
    readonly fechaInicio: FieldRef<"Cita", 'DateTime'>
    readonly fechaFin: FieldRef<"Cita", 'DateTime'>
    readonly motivo: FieldRef<"Cita", 'String'>
    readonly estado: FieldRef<"Cita", 'String'>
    readonly canal: FieldRef<"Cita", 'String'>
    readonly pacienteId: FieldRef<"Cita", 'Int'>
    readonly profesionalId: FieldRef<"Cita", 'Int'>
    readonly unidadId: FieldRef<"Cita", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Cita findUnique
   */
  export type CitaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * Filter, which Cita to fetch.
     */
    where: CitaWhereUniqueInput
  }

  /**
   * Cita findUniqueOrThrow
   */
  export type CitaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * Filter, which Cita to fetch.
     */
    where: CitaWhereUniqueInput
  }

  /**
   * Cita findFirst
   */
  export type CitaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * Filter, which Cita to fetch.
     */
    where?: CitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citas to fetch.
     */
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Citas.
     */
    cursor?: CitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Citas.
     */
    distinct?: CitaScalarFieldEnum | CitaScalarFieldEnum[]
  }

  /**
   * Cita findFirstOrThrow
   */
  export type CitaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * Filter, which Cita to fetch.
     */
    where?: CitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citas to fetch.
     */
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Citas.
     */
    cursor?: CitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Citas.
     */
    distinct?: CitaScalarFieldEnum | CitaScalarFieldEnum[]
  }

  /**
   * Cita findMany
   */
  export type CitaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * Filter, which Citas to fetch.
     */
    where?: CitaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Citas to fetch.
     */
    orderBy?: CitaOrderByWithRelationInput | CitaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Citas.
     */
    cursor?: CitaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Citas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Citas.
     */
    skip?: number
    distinct?: CitaScalarFieldEnum | CitaScalarFieldEnum[]
  }

  /**
   * Cita create
   */
  export type CitaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * The data needed to create a Cita.
     */
    data: XOR<CitaCreateInput, CitaUncheckedCreateInput>
  }

  /**
   * Cita createMany
   */
  export type CitaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Citas.
     */
    data: CitaCreateManyInput | CitaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cita update
   */
  export type CitaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * The data needed to update a Cita.
     */
    data: XOR<CitaUpdateInput, CitaUncheckedUpdateInput>
    /**
     * Choose, which Cita to update.
     */
    where: CitaWhereUniqueInput
  }

  /**
   * Cita updateMany
   */
  export type CitaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Citas.
     */
    data: XOR<CitaUpdateManyMutationInput, CitaUncheckedUpdateManyInput>
    /**
     * Filter which Citas to update
     */
    where?: CitaWhereInput
    /**
     * Limit how many Citas to update.
     */
    limit?: number
  }

  /**
   * Cita upsert
   */
  export type CitaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * The filter to search for the Cita to update in case it exists.
     */
    where: CitaWhereUniqueInput
    /**
     * In case the Cita found by the `where` argument doesn't exist, create a new Cita with this data.
     */
    create: XOR<CitaCreateInput, CitaUncheckedCreateInput>
    /**
     * In case the Cita was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CitaUpdateInput, CitaUncheckedUpdateInput>
  }

  /**
   * Cita delete
   */
  export type CitaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
    /**
     * Filter which Cita to delete.
     */
    where: CitaWhereUniqueInput
  }

  /**
   * Cita deleteMany
   */
  export type CitaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Citas to delete
     */
    where?: CitaWhereInput
    /**
     * Limit how many Citas to delete.
     */
    limit?: number
  }

  /**
   * Cita without action
   */
  export type CitaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cita
     */
    select?: CitaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cita
     */
    omit?: CitaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CitaInclude<ExtArgs> | null
  }


  /**
   * Model EpisodioAtencion
   */

  export type AggregateEpisodioAtencion = {
    _count: EpisodioAtencionCountAggregateOutputType | null
    _avg: EpisodioAtencionAvgAggregateOutputType | null
    _sum: EpisodioAtencionSumAggregateOutputType | null
    _min: EpisodioAtencionMinAggregateOutputType | null
    _max: EpisodioAtencionMaxAggregateOutputType | null
  }

  export type EpisodioAtencionAvgAggregateOutputType = {
    id: number | null
    pacienteId: number | null
  }

  export type EpisodioAtencionSumAggregateOutputType = {
    id: number | null
    pacienteId: number | null
  }

  export type EpisodioAtencionMinAggregateOutputType = {
    id: number | null
    motivo: string | null
    fecha: Date | null
    estado: string | null
    pacienteId: number | null
  }

  export type EpisodioAtencionMaxAggregateOutputType = {
    id: number | null
    motivo: string | null
    fecha: Date | null
    estado: string | null
    pacienteId: number | null
  }

  export type EpisodioAtencionCountAggregateOutputType = {
    id: number
    motivo: number
    fecha: number
    estado: number
    pacienteId: number
    _all: number
  }


  export type EpisodioAtencionAvgAggregateInputType = {
    id?: true
    pacienteId?: true
  }

  export type EpisodioAtencionSumAggregateInputType = {
    id?: true
    pacienteId?: true
  }

  export type EpisodioAtencionMinAggregateInputType = {
    id?: true
    motivo?: true
    fecha?: true
    estado?: true
    pacienteId?: true
  }

  export type EpisodioAtencionMaxAggregateInputType = {
    id?: true
    motivo?: true
    fecha?: true
    estado?: true
    pacienteId?: true
  }

  export type EpisodioAtencionCountAggregateInputType = {
    id?: true
    motivo?: true
    fecha?: true
    estado?: true
    pacienteId?: true
    _all?: true
  }

  export type EpisodioAtencionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EpisodioAtencion to aggregate.
     */
    where?: EpisodioAtencionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EpisodioAtencions to fetch.
     */
    orderBy?: EpisodioAtencionOrderByWithRelationInput | EpisodioAtencionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EpisodioAtencionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EpisodioAtencions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EpisodioAtencions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EpisodioAtencions
    **/
    _count?: true | EpisodioAtencionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EpisodioAtencionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EpisodioAtencionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EpisodioAtencionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EpisodioAtencionMaxAggregateInputType
  }

  export type GetEpisodioAtencionAggregateType<T extends EpisodioAtencionAggregateArgs> = {
        [P in keyof T & keyof AggregateEpisodioAtencion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEpisodioAtencion[P]>
      : GetScalarType<T[P], AggregateEpisodioAtencion[P]>
  }




  export type EpisodioAtencionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EpisodioAtencionWhereInput
    orderBy?: EpisodioAtencionOrderByWithAggregationInput | EpisodioAtencionOrderByWithAggregationInput[]
    by: EpisodioAtencionScalarFieldEnum[] | EpisodioAtencionScalarFieldEnum
    having?: EpisodioAtencionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EpisodioAtencionCountAggregateInputType | true
    _avg?: EpisodioAtencionAvgAggregateInputType
    _sum?: EpisodioAtencionSumAggregateInputType
    _min?: EpisodioAtencionMinAggregateInputType
    _max?: EpisodioAtencionMaxAggregateInputType
  }

  export type EpisodioAtencionGroupByOutputType = {
    id: number
    motivo: string
    fecha: Date
    estado: string
    pacienteId: number
    _count: EpisodioAtencionCountAggregateOutputType | null
    _avg: EpisodioAtencionAvgAggregateOutputType | null
    _sum: EpisodioAtencionSumAggregateOutputType | null
    _min: EpisodioAtencionMinAggregateOutputType | null
    _max: EpisodioAtencionMaxAggregateOutputType | null
  }

  type GetEpisodioAtencionGroupByPayload<T extends EpisodioAtencionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EpisodioAtencionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EpisodioAtencionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EpisodioAtencionGroupByOutputType[P]>
            : GetScalarType<T[P], EpisodioAtencionGroupByOutputType[P]>
        }
      >
    >


  export type EpisodioAtencionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    motivo?: boolean
    fecha?: boolean
    estado?: boolean
    pacienteId?: boolean
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    notas?: boolean | EpisodioAtencion$notasArgs<ExtArgs>
    _count?: boolean | EpisodioAtencionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["episodioAtencion"]>



  export type EpisodioAtencionSelectScalar = {
    id?: boolean
    motivo?: boolean
    fecha?: boolean
    estado?: boolean
    pacienteId?: boolean
  }

  export type EpisodioAtencionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "motivo" | "fecha" | "estado" | "pacienteId", ExtArgs["result"]["episodioAtencion"]>
  export type EpisodioAtencionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    paciente?: boolean | PacienteDefaultArgs<ExtArgs>
    notas?: boolean | EpisodioAtencion$notasArgs<ExtArgs>
    _count?: boolean | EpisodioAtencionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $EpisodioAtencionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EpisodioAtencion"
    objects: {
      paciente: Prisma.$PacientePayload<ExtArgs>
      notas: Prisma.$NotaClinicaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      motivo: string
      fecha: Date
      estado: string
      pacienteId: number
    }, ExtArgs["result"]["episodioAtencion"]>
    composites: {}
  }

  type EpisodioAtencionGetPayload<S extends boolean | null | undefined | EpisodioAtencionDefaultArgs> = $Result.GetResult<Prisma.$EpisodioAtencionPayload, S>

  type EpisodioAtencionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EpisodioAtencionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EpisodioAtencionCountAggregateInputType | true
    }

  export interface EpisodioAtencionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EpisodioAtencion'], meta: { name: 'EpisodioAtencion' } }
    /**
     * Find zero or one EpisodioAtencion that matches the filter.
     * @param {EpisodioAtencionFindUniqueArgs} args - Arguments to find a EpisodioAtencion
     * @example
     * // Get one EpisodioAtencion
     * const episodioAtencion = await prisma.episodioAtencion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EpisodioAtencionFindUniqueArgs>(args: SelectSubset<T, EpisodioAtencionFindUniqueArgs<ExtArgs>>): Prisma__EpisodioAtencionClient<$Result.GetResult<Prisma.$EpisodioAtencionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EpisodioAtencion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EpisodioAtencionFindUniqueOrThrowArgs} args - Arguments to find a EpisodioAtencion
     * @example
     * // Get one EpisodioAtencion
     * const episodioAtencion = await prisma.episodioAtencion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EpisodioAtencionFindUniqueOrThrowArgs>(args: SelectSubset<T, EpisodioAtencionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EpisodioAtencionClient<$Result.GetResult<Prisma.$EpisodioAtencionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EpisodioAtencion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodioAtencionFindFirstArgs} args - Arguments to find a EpisodioAtencion
     * @example
     * // Get one EpisodioAtencion
     * const episodioAtencion = await prisma.episodioAtencion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EpisodioAtencionFindFirstArgs>(args?: SelectSubset<T, EpisodioAtencionFindFirstArgs<ExtArgs>>): Prisma__EpisodioAtencionClient<$Result.GetResult<Prisma.$EpisodioAtencionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EpisodioAtencion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodioAtencionFindFirstOrThrowArgs} args - Arguments to find a EpisodioAtencion
     * @example
     * // Get one EpisodioAtencion
     * const episodioAtencion = await prisma.episodioAtencion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EpisodioAtencionFindFirstOrThrowArgs>(args?: SelectSubset<T, EpisodioAtencionFindFirstOrThrowArgs<ExtArgs>>): Prisma__EpisodioAtencionClient<$Result.GetResult<Prisma.$EpisodioAtencionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EpisodioAtencions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodioAtencionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EpisodioAtencions
     * const episodioAtencions = await prisma.episodioAtencion.findMany()
     * 
     * // Get first 10 EpisodioAtencions
     * const episodioAtencions = await prisma.episodioAtencion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const episodioAtencionWithIdOnly = await prisma.episodioAtencion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EpisodioAtencionFindManyArgs>(args?: SelectSubset<T, EpisodioAtencionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EpisodioAtencionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EpisodioAtencion.
     * @param {EpisodioAtencionCreateArgs} args - Arguments to create a EpisodioAtencion.
     * @example
     * // Create one EpisodioAtencion
     * const EpisodioAtencion = await prisma.episodioAtencion.create({
     *   data: {
     *     // ... data to create a EpisodioAtencion
     *   }
     * })
     * 
     */
    create<T extends EpisodioAtencionCreateArgs>(args: SelectSubset<T, EpisodioAtencionCreateArgs<ExtArgs>>): Prisma__EpisodioAtencionClient<$Result.GetResult<Prisma.$EpisodioAtencionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EpisodioAtencions.
     * @param {EpisodioAtencionCreateManyArgs} args - Arguments to create many EpisodioAtencions.
     * @example
     * // Create many EpisodioAtencions
     * const episodioAtencion = await prisma.episodioAtencion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EpisodioAtencionCreateManyArgs>(args?: SelectSubset<T, EpisodioAtencionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a EpisodioAtencion.
     * @param {EpisodioAtencionDeleteArgs} args - Arguments to delete one EpisodioAtencion.
     * @example
     * // Delete one EpisodioAtencion
     * const EpisodioAtencion = await prisma.episodioAtencion.delete({
     *   where: {
     *     // ... filter to delete one EpisodioAtencion
     *   }
     * })
     * 
     */
    delete<T extends EpisodioAtencionDeleteArgs>(args: SelectSubset<T, EpisodioAtencionDeleteArgs<ExtArgs>>): Prisma__EpisodioAtencionClient<$Result.GetResult<Prisma.$EpisodioAtencionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EpisodioAtencion.
     * @param {EpisodioAtencionUpdateArgs} args - Arguments to update one EpisodioAtencion.
     * @example
     * // Update one EpisodioAtencion
     * const episodioAtencion = await prisma.episodioAtencion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EpisodioAtencionUpdateArgs>(args: SelectSubset<T, EpisodioAtencionUpdateArgs<ExtArgs>>): Prisma__EpisodioAtencionClient<$Result.GetResult<Prisma.$EpisodioAtencionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EpisodioAtencions.
     * @param {EpisodioAtencionDeleteManyArgs} args - Arguments to filter EpisodioAtencions to delete.
     * @example
     * // Delete a few EpisodioAtencions
     * const { count } = await prisma.episodioAtencion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EpisodioAtencionDeleteManyArgs>(args?: SelectSubset<T, EpisodioAtencionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EpisodioAtencions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodioAtencionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EpisodioAtencions
     * const episodioAtencion = await prisma.episodioAtencion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EpisodioAtencionUpdateManyArgs>(args: SelectSubset<T, EpisodioAtencionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one EpisodioAtencion.
     * @param {EpisodioAtencionUpsertArgs} args - Arguments to update or create a EpisodioAtencion.
     * @example
     * // Update or create a EpisodioAtencion
     * const episodioAtencion = await prisma.episodioAtencion.upsert({
     *   create: {
     *     // ... data to create a EpisodioAtencion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EpisodioAtencion we want to update
     *   }
     * })
     */
    upsert<T extends EpisodioAtencionUpsertArgs>(args: SelectSubset<T, EpisodioAtencionUpsertArgs<ExtArgs>>): Prisma__EpisodioAtencionClient<$Result.GetResult<Prisma.$EpisodioAtencionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EpisodioAtencions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodioAtencionCountArgs} args - Arguments to filter EpisodioAtencions to count.
     * @example
     * // Count the number of EpisodioAtencions
     * const count = await prisma.episodioAtencion.count({
     *   where: {
     *     // ... the filter for the EpisodioAtencions we want to count
     *   }
     * })
    **/
    count<T extends EpisodioAtencionCountArgs>(
      args?: Subset<T, EpisodioAtencionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EpisodioAtencionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EpisodioAtencion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodioAtencionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EpisodioAtencionAggregateArgs>(args: Subset<T, EpisodioAtencionAggregateArgs>): Prisma.PrismaPromise<GetEpisodioAtencionAggregateType<T>>

    /**
     * Group by EpisodioAtencion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpisodioAtencionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EpisodioAtencionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EpisodioAtencionGroupByArgs['orderBy'] }
        : { orderBy?: EpisodioAtencionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EpisodioAtencionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEpisodioAtencionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EpisodioAtencion model
   */
  readonly fields: EpisodioAtencionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EpisodioAtencion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EpisodioAtencionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    paciente<T extends PacienteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PacienteDefaultArgs<ExtArgs>>): Prisma__PacienteClient<$Result.GetResult<Prisma.$PacientePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    notas<T extends EpisodioAtencion$notasArgs<ExtArgs> = {}>(args?: Subset<T, EpisodioAtencion$notasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotaClinicaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EpisodioAtencion model
   */
  interface EpisodioAtencionFieldRefs {
    readonly id: FieldRef<"EpisodioAtencion", 'Int'>
    readonly motivo: FieldRef<"EpisodioAtencion", 'String'>
    readonly fecha: FieldRef<"EpisodioAtencion", 'DateTime'>
    readonly estado: FieldRef<"EpisodioAtencion", 'String'>
    readonly pacienteId: FieldRef<"EpisodioAtencion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * EpisodioAtencion findUnique
   */
  export type EpisodioAtencionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpisodioAtencion
     */
    select?: EpisodioAtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpisodioAtencion
     */
    omit?: EpisodioAtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodioAtencionInclude<ExtArgs> | null
    /**
     * Filter, which EpisodioAtencion to fetch.
     */
    where: EpisodioAtencionWhereUniqueInput
  }

  /**
   * EpisodioAtencion findUniqueOrThrow
   */
  export type EpisodioAtencionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpisodioAtencion
     */
    select?: EpisodioAtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpisodioAtencion
     */
    omit?: EpisodioAtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodioAtencionInclude<ExtArgs> | null
    /**
     * Filter, which EpisodioAtencion to fetch.
     */
    where: EpisodioAtencionWhereUniqueInput
  }

  /**
   * EpisodioAtencion findFirst
   */
  export type EpisodioAtencionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpisodioAtencion
     */
    select?: EpisodioAtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpisodioAtencion
     */
    omit?: EpisodioAtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodioAtencionInclude<ExtArgs> | null
    /**
     * Filter, which EpisodioAtencion to fetch.
     */
    where?: EpisodioAtencionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EpisodioAtencions to fetch.
     */
    orderBy?: EpisodioAtencionOrderByWithRelationInput | EpisodioAtencionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EpisodioAtencions.
     */
    cursor?: EpisodioAtencionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EpisodioAtencions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EpisodioAtencions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EpisodioAtencions.
     */
    distinct?: EpisodioAtencionScalarFieldEnum | EpisodioAtencionScalarFieldEnum[]
  }

  /**
   * EpisodioAtencion findFirstOrThrow
   */
  export type EpisodioAtencionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpisodioAtencion
     */
    select?: EpisodioAtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpisodioAtencion
     */
    omit?: EpisodioAtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodioAtencionInclude<ExtArgs> | null
    /**
     * Filter, which EpisodioAtencion to fetch.
     */
    where?: EpisodioAtencionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EpisodioAtencions to fetch.
     */
    orderBy?: EpisodioAtencionOrderByWithRelationInput | EpisodioAtencionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EpisodioAtencions.
     */
    cursor?: EpisodioAtencionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EpisodioAtencions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EpisodioAtencions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EpisodioAtencions.
     */
    distinct?: EpisodioAtencionScalarFieldEnum | EpisodioAtencionScalarFieldEnum[]
  }

  /**
   * EpisodioAtencion findMany
   */
  export type EpisodioAtencionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpisodioAtencion
     */
    select?: EpisodioAtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpisodioAtencion
     */
    omit?: EpisodioAtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodioAtencionInclude<ExtArgs> | null
    /**
     * Filter, which EpisodioAtencions to fetch.
     */
    where?: EpisodioAtencionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EpisodioAtencions to fetch.
     */
    orderBy?: EpisodioAtencionOrderByWithRelationInput | EpisodioAtencionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EpisodioAtencions.
     */
    cursor?: EpisodioAtencionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EpisodioAtencions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EpisodioAtencions.
     */
    skip?: number
    distinct?: EpisodioAtencionScalarFieldEnum | EpisodioAtencionScalarFieldEnum[]
  }

  /**
   * EpisodioAtencion create
   */
  export type EpisodioAtencionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpisodioAtencion
     */
    select?: EpisodioAtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpisodioAtencion
     */
    omit?: EpisodioAtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodioAtencionInclude<ExtArgs> | null
    /**
     * The data needed to create a EpisodioAtencion.
     */
    data: XOR<EpisodioAtencionCreateInput, EpisodioAtencionUncheckedCreateInput>
  }

  /**
   * EpisodioAtencion createMany
   */
  export type EpisodioAtencionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EpisodioAtencions.
     */
    data: EpisodioAtencionCreateManyInput | EpisodioAtencionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EpisodioAtencion update
   */
  export type EpisodioAtencionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpisodioAtencion
     */
    select?: EpisodioAtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpisodioAtencion
     */
    omit?: EpisodioAtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodioAtencionInclude<ExtArgs> | null
    /**
     * The data needed to update a EpisodioAtencion.
     */
    data: XOR<EpisodioAtencionUpdateInput, EpisodioAtencionUncheckedUpdateInput>
    /**
     * Choose, which EpisodioAtencion to update.
     */
    where: EpisodioAtencionWhereUniqueInput
  }

  /**
   * EpisodioAtencion updateMany
   */
  export type EpisodioAtencionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EpisodioAtencions.
     */
    data: XOR<EpisodioAtencionUpdateManyMutationInput, EpisodioAtencionUncheckedUpdateManyInput>
    /**
     * Filter which EpisodioAtencions to update
     */
    where?: EpisodioAtencionWhereInput
    /**
     * Limit how many EpisodioAtencions to update.
     */
    limit?: number
  }

  /**
   * EpisodioAtencion upsert
   */
  export type EpisodioAtencionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpisodioAtencion
     */
    select?: EpisodioAtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpisodioAtencion
     */
    omit?: EpisodioAtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodioAtencionInclude<ExtArgs> | null
    /**
     * The filter to search for the EpisodioAtencion to update in case it exists.
     */
    where: EpisodioAtencionWhereUniqueInput
    /**
     * In case the EpisodioAtencion found by the `where` argument doesn't exist, create a new EpisodioAtencion with this data.
     */
    create: XOR<EpisodioAtencionCreateInput, EpisodioAtencionUncheckedCreateInput>
    /**
     * In case the EpisodioAtencion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EpisodioAtencionUpdateInput, EpisodioAtencionUncheckedUpdateInput>
  }

  /**
   * EpisodioAtencion delete
   */
  export type EpisodioAtencionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpisodioAtencion
     */
    select?: EpisodioAtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpisodioAtencion
     */
    omit?: EpisodioAtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodioAtencionInclude<ExtArgs> | null
    /**
     * Filter which EpisodioAtencion to delete.
     */
    where: EpisodioAtencionWhereUniqueInput
  }

  /**
   * EpisodioAtencion deleteMany
   */
  export type EpisodioAtencionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EpisodioAtencions to delete
     */
    where?: EpisodioAtencionWhereInput
    /**
     * Limit how many EpisodioAtencions to delete.
     */
    limit?: number
  }

  /**
   * EpisodioAtencion.notas
   */
  export type EpisodioAtencion$notasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaClinica
     */
    select?: NotaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotaClinica
     */
    omit?: NotaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaClinicaInclude<ExtArgs> | null
    where?: NotaClinicaWhereInput
    orderBy?: NotaClinicaOrderByWithRelationInput | NotaClinicaOrderByWithRelationInput[]
    cursor?: NotaClinicaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotaClinicaScalarFieldEnum | NotaClinicaScalarFieldEnum[]
  }

  /**
   * EpisodioAtencion without action
   */
  export type EpisodioAtencionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EpisodioAtencion
     */
    select?: EpisodioAtencionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EpisodioAtencion
     */
    omit?: EpisodioAtencionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EpisodioAtencionInclude<ExtArgs> | null
  }


  /**
   * Model NotaClinica
   */

  export type AggregateNotaClinica = {
    _count: NotaClinicaCountAggregateOutputType | null
    _avg: NotaClinicaAvgAggregateOutputType | null
    _sum: NotaClinicaSumAggregateOutputType | null
    _min: NotaClinicaMinAggregateOutputType | null
    _max: NotaClinicaMaxAggregateOutputType | null
  }

  export type NotaClinicaAvgAggregateOutputType = {
    id: number | null
    episodioId: number | null
    profesionalId: number | null
  }

  export type NotaClinicaSumAggregateOutputType = {
    id: number | null
    episodioId: number | null
    profesionalId: number | null
  }

  export type NotaClinicaMinAggregateOutputType = {
    id: number | null
    subjetivo: string | null
    objetivo: string | null
    analisis: string | null
    plan: string | null
    fecha: Date | null
    episodioId: number | null
    profesionalId: number | null
  }

  export type NotaClinicaMaxAggregateOutputType = {
    id: number | null
    subjetivo: string | null
    objetivo: string | null
    analisis: string | null
    plan: string | null
    fecha: Date | null
    episodioId: number | null
    profesionalId: number | null
  }

  export type NotaClinicaCountAggregateOutputType = {
    id: number
    subjetivo: number
    objetivo: number
    analisis: number
    plan: number
    fecha: number
    episodioId: number
    profesionalId: number
    _all: number
  }


  export type NotaClinicaAvgAggregateInputType = {
    id?: true
    episodioId?: true
    profesionalId?: true
  }

  export type NotaClinicaSumAggregateInputType = {
    id?: true
    episodioId?: true
    profesionalId?: true
  }

  export type NotaClinicaMinAggregateInputType = {
    id?: true
    subjetivo?: true
    objetivo?: true
    analisis?: true
    plan?: true
    fecha?: true
    episodioId?: true
    profesionalId?: true
  }

  export type NotaClinicaMaxAggregateInputType = {
    id?: true
    subjetivo?: true
    objetivo?: true
    analisis?: true
    plan?: true
    fecha?: true
    episodioId?: true
    profesionalId?: true
  }

  export type NotaClinicaCountAggregateInputType = {
    id?: true
    subjetivo?: true
    objetivo?: true
    analisis?: true
    plan?: true
    fecha?: true
    episodioId?: true
    profesionalId?: true
    _all?: true
  }

  export type NotaClinicaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotaClinica to aggregate.
     */
    where?: NotaClinicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotaClinicas to fetch.
     */
    orderBy?: NotaClinicaOrderByWithRelationInput | NotaClinicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotaClinicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotaClinicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotaClinicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NotaClinicas
    **/
    _count?: true | NotaClinicaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotaClinicaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotaClinicaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotaClinicaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotaClinicaMaxAggregateInputType
  }

  export type GetNotaClinicaAggregateType<T extends NotaClinicaAggregateArgs> = {
        [P in keyof T & keyof AggregateNotaClinica]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotaClinica[P]>
      : GetScalarType<T[P], AggregateNotaClinica[P]>
  }




  export type NotaClinicaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotaClinicaWhereInput
    orderBy?: NotaClinicaOrderByWithAggregationInput | NotaClinicaOrderByWithAggregationInput[]
    by: NotaClinicaScalarFieldEnum[] | NotaClinicaScalarFieldEnum
    having?: NotaClinicaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotaClinicaCountAggregateInputType | true
    _avg?: NotaClinicaAvgAggregateInputType
    _sum?: NotaClinicaSumAggregateInputType
    _min?: NotaClinicaMinAggregateInputType
    _max?: NotaClinicaMaxAggregateInputType
  }

  export type NotaClinicaGroupByOutputType = {
    id: number
    subjetivo: string
    objetivo: string
    analisis: string
    plan: string
    fecha: Date
    episodioId: number
    profesionalId: number
    _count: NotaClinicaCountAggregateOutputType | null
    _avg: NotaClinicaAvgAggregateOutputType | null
    _sum: NotaClinicaSumAggregateOutputType | null
    _min: NotaClinicaMinAggregateOutputType | null
    _max: NotaClinicaMaxAggregateOutputType | null
  }

  type GetNotaClinicaGroupByPayload<T extends NotaClinicaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotaClinicaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotaClinicaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotaClinicaGroupByOutputType[P]>
            : GetScalarType<T[P], NotaClinicaGroupByOutputType[P]>
        }
      >
    >


  export type NotaClinicaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subjetivo?: boolean
    objetivo?: boolean
    analisis?: boolean
    plan?: boolean
    fecha?: boolean
    episodioId?: boolean
    profesionalId?: boolean
    episodio?: boolean | EpisodioAtencionDefaultArgs<ExtArgs>
    profesional?: boolean | ProfesionalDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notaClinica"]>



  export type NotaClinicaSelectScalar = {
    id?: boolean
    subjetivo?: boolean
    objetivo?: boolean
    analisis?: boolean
    plan?: boolean
    fecha?: boolean
    episodioId?: boolean
    profesionalId?: boolean
  }

  export type NotaClinicaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "subjetivo" | "objetivo" | "analisis" | "plan" | "fecha" | "episodioId" | "profesionalId", ExtArgs["result"]["notaClinica"]>
  export type NotaClinicaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episodio?: boolean | EpisodioAtencionDefaultArgs<ExtArgs>
    profesional?: boolean | ProfesionalDefaultArgs<ExtArgs>
  }

  export type $NotaClinicaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NotaClinica"
    objects: {
      episodio: Prisma.$EpisodioAtencionPayload<ExtArgs>
      profesional: Prisma.$ProfesionalPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      subjetivo: string
      objetivo: string
      analisis: string
      plan: string
      fecha: Date
      episodioId: number
      profesionalId: number
    }, ExtArgs["result"]["notaClinica"]>
    composites: {}
  }

  type NotaClinicaGetPayload<S extends boolean | null | undefined | NotaClinicaDefaultArgs> = $Result.GetResult<Prisma.$NotaClinicaPayload, S>

  type NotaClinicaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotaClinicaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotaClinicaCountAggregateInputType | true
    }

  export interface NotaClinicaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NotaClinica'], meta: { name: 'NotaClinica' } }
    /**
     * Find zero or one NotaClinica that matches the filter.
     * @param {NotaClinicaFindUniqueArgs} args - Arguments to find a NotaClinica
     * @example
     * // Get one NotaClinica
     * const notaClinica = await prisma.notaClinica.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotaClinicaFindUniqueArgs>(args: SelectSubset<T, NotaClinicaFindUniqueArgs<ExtArgs>>): Prisma__NotaClinicaClient<$Result.GetResult<Prisma.$NotaClinicaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NotaClinica that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotaClinicaFindUniqueOrThrowArgs} args - Arguments to find a NotaClinica
     * @example
     * // Get one NotaClinica
     * const notaClinica = await prisma.notaClinica.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotaClinicaFindUniqueOrThrowArgs>(args: SelectSubset<T, NotaClinicaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotaClinicaClient<$Result.GetResult<Prisma.$NotaClinicaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotaClinica that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaClinicaFindFirstArgs} args - Arguments to find a NotaClinica
     * @example
     * // Get one NotaClinica
     * const notaClinica = await prisma.notaClinica.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotaClinicaFindFirstArgs>(args?: SelectSubset<T, NotaClinicaFindFirstArgs<ExtArgs>>): Prisma__NotaClinicaClient<$Result.GetResult<Prisma.$NotaClinicaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NotaClinica that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaClinicaFindFirstOrThrowArgs} args - Arguments to find a NotaClinica
     * @example
     * // Get one NotaClinica
     * const notaClinica = await prisma.notaClinica.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotaClinicaFindFirstOrThrowArgs>(args?: SelectSubset<T, NotaClinicaFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotaClinicaClient<$Result.GetResult<Prisma.$NotaClinicaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NotaClinicas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaClinicaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NotaClinicas
     * const notaClinicas = await prisma.notaClinica.findMany()
     * 
     * // Get first 10 NotaClinicas
     * const notaClinicas = await prisma.notaClinica.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notaClinicaWithIdOnly = await prisma.notaClinica.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotaClinicaFindManyArgs>(args?: SelectSubset<T, NotaClinicaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotaClinicaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NotaClinica.
     * @param {NotaClinicaCreateArgs} args - Arguments to create a NotaClinica.
     * @example
     * // Create one NotaClinica
     * const NotaClinica = await prisma.notaClinica.create({
     *   data: {
     *     // ... data to create a NotaClinica
     *   }
     * })
     * 
     */
    create<T extends NotaClinicaCreateArgs>(args: SelectSubset<T, NotaClinicaCreateArgs<ExtArgs>>): Prisma__NotaClinicaClient<$Result.GetResult<Prisma.$NotaClinicaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NotaClinicas.
     * @param {NotaClinicaCreateManyArgs} args - Arguments to create many NotaClinicas.
     * @example
     * // Create many NotaClinicas
     * const notaClinica = await prisma.notaClinica.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotaClinicaCreateManyArgs>(args?: SelectSubset<T, NotaClinicaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a NotaClinica.
     * @param {NotaClinicaDeleteArgs} args - Arguments to delete one NotaClinica.
     * @example
     * // Delete one NotaClinica
     * const NotaClinica = await prisma.notaClinica.delete({
     *   where: {
     *     // ... filter to delete one NotaClinica
     *   }
     * })
     * 
     */
    delete<T extends NotaClinicaDeleteArgs>(args: SelectSubset<T, NotaClinicaDeleteArgs<ExtArgs>>): Prisma__NotaClinicaClient<$Result.GetResult<Prisma.$NotaClinicaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NotaClinica.
     * @param {NotaClinicaUpdateArgs} args - Arguments to update one NotaClinica.
     * @example
     * // Update one NotaClinica
     * const notaClinica = await prisma.notaClinica.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotaClinicaUpdateArgs>(args: SelectSubset<T, NotaClinicaUpdateArgs<ExtArgs>>): Prisma__NotaClinicaClient<$Result.GetResult<Prisma.$NotaClinicaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NotaClinicas.
     * @param {NotaClinicaDeleteManyArgs} args - Arguments to filter NotaClinicas to delete.
     * @example
     * // Delete a few NotaClinicas
     * const { count } = await prisma.notaClinica.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotaClinicaDeleteManyArgs>(args?: SelectSubset<T, NotaClinicaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NotaClinicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaClinicaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NotaClinicas
     * const notaClinica = await prisma.notaClinica.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotaClinicaUpdateManyArgs>(args: SelectSubset<T, NotaClinicaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one NotaClinica.
     * @param {NotaClinicaUpsertArgs} args - Arguments to update or create a NotaClinica.
     * @example
     * // Update or create a NotaClinica
     * const notaClinica = await prisma.notaClinica.upsert({
     *   create: {
     *     // ... data to create a NotaClinica
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NotaClinica we want to update
     *   }
     * })
     */
    upsert<T extends NotaClinicaUpsertArgs>(args: SelectSubset<T, NotaClinicaUpsertArgs<ExtArgs>>): Prisma__NotaClinicaClient<$Result.GetResult<Prisma.$NotaClinicaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NotaClinicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaClinicaCountArgs} args - Arguments to filter NotaClinicas to count.
     * @example
     * // Count the number of NotaClinicas
     * const count = await prisma.notaClinica.count({
     *   where: {
     *     // ... the filter for the NotaClinicas we want to count
     *   }
     * })
    **/
    count<T extends NotaClinicaCountArgs>(
      args?: Subset<T, NotaClinicaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotaClinicaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NotaClinica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaClinicaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NotaClinicaAggregateArgs>(args: Subset<T, NotaClinicaAggregateArgs>): Prisma.PrismaPromise<GetNotaClinicaAggregateType<T>>

    /**
     * Group by NotaClinica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotaClinicaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NotaClinicaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotaClinicaGroupByArgs['orderBy'] }
        : { orderBy?: NotaClinicaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NotaClinicaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotaClinicaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NotaClinica model
   */
  readonly fields: NotaClinicaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NotaClinica.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotaClinicaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    episodio<T extends EpisodioAtencionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EpisodioAtencionDefaultArgs<ExtArgs>>): Prisma__EpisodioAtencionClient<$Result.GetResult<Prisma.$EpisodioAtencionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    profesional<T extends ProfesionalDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfesionalDefaultArgs<ExtArgs>>): Prisma__ProfesionalClient<$Result.GetResult<Prisma.$ProfesionalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NotaClinica model
   */
  interface NotaClinicaFieldRefs {
    readonly id: FieldRef<"NotaClinica", 'Int'>
    readonly subjetivo: FieldRef<"NotaClinica", 'String'>
    readonly objetivo: FieldRef<"NotaClinica", 'String'>
    readonly analisis: FieldRef<"NotaClinica", 'String'>
    readonly plan: FieldRef<"NotaClinica", 'String'>
    readonly fecha: FieldRef<"NotaClinica", 'DateTime'>
    readonly episodioId: FieldRef<"NotaClinica", 'Int'>
    readonly profesionalId: FieldRef<"NotaClinica", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * NotaClinica findUnique
   */
  export type NotaClinicaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaClinica
     */
    select?: NotaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotaClinica
     */
    omit?: NotaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaClinicaInclude<ExtArgs> | null
    /**
     * Filter, which NotaClinica to fetch.
     */
    where: NotaClinicaWhereUniqueInput
  }

  /**
   * NotaClinica findUniqueOrThrow
   */
  export type NotaClinicaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaClinica
     */
    select?: NotaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotaClinica
     */
    omit?: NotaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaClinicaInclude<ExtArgs> | null
    /**
     * Filter, which NotaClinica to fetch.
     */
    where: NotaClinicaWhereUniqueInput
  }

  /**
   * NotaClinica findFirst
   */
  export type NotaClinicaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaClinica
     */
    select?: NotaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotaClinica
     */
    omit?: NotaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaClinicaInclude<ExtArgs> | null
    /**
     * Filter, which NotaClinica to fetch.
     */
    where?: NotaClinicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotaClinicas to fetch.
     */
    orderBy?: NotaClinicaOrderByWithRelationInput | NotaClinicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotaClinicas.
     */
    cursor?: NotaClinicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotaClinicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotaClinicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotaClinicas.
     */
    distinct?: NotaClinicaScalarFieldEnum | NotaClinicaScalarFieldEnum[]
  }

  /**
   * NotaClinica findFirstOrThrow
   */
  export type NotaClinicaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaClinica
     */
    select?: NotaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotaClinica
     */
    omit?: NotaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaClinicaInclude<ExtArgs> | null
    /**
     * Filter, which NotaClinica to fetch.
     */
    where?: NotaClinicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotaClinicas to fetch.
     */
    orderBy?: NotaClinicaOrderByWithRelationInput | NotaClinicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NotaClinicas.
     */
    cursor?: NotaClinicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotaClinicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotaClinicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NotaClinicas.
     */
    distinct?: NotaClinicaScalarFieldEnum | NotaClinicaScalarFieldEnum[]
  }

  /**
   * NotaClinica findMany
   */
  export type NotaClinicaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaClinica
     */
    select?: NotaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotaClinica
     */
    omit?: NotaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaClinicaInclude<ExtArgs> | null
    /**
     * Filter, which NotaClinicas to fetch.
     */
    where?: NotaClinicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NotaClinicas to fetch.
     */
    orderBy?: NotaClinicaOrderByWithRelationInput | NotaClinicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NotaClinicas.
     */
    cursor?: NotaClinicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NotaClinicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NotaClinicas.
     */
    skip?: number
    distinct?: NotaClinicaScalarFieldEnum | NotaClinicaScalarFieldEnum[]
  }

  /**
   * NotaClinica create
   */
  export type NotaClinicaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaClinica
     */
    select?: NotaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotaClinica
     */
    omit?: NotaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaClinicaInclude<ExtArgs> | null
    /**
     * The data needed to create a NotaClinica.
     */
    data: XOR<NotaClinicaCreateInput, NotaClinicaUncheckedCreateInput>
  }

  /**
   * NotaClinica createMany
   */
  export type NotaClinicaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NotaClinicas.
     */
    data: NotaClinicaCreateManyInput | NotaClinicaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NotaClinica update
   */
  export type NotaClinicaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaClinica
     */
    select?: NotaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotaClinica
     */
    omit?: NotaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaClinicaInclude<ExtArgs> | null
    /**
     * The data needed to update a NotaClinica.
     */
    data: XOR<NotaClinicaUpdateInput, NotaClinicaUncheckedUpdateInput>
    /**
     * Choose, which NotaClinica to update.
     */
    where: NotaClinicaWhereUniqueInput
  }

  /**
   * NotaClinica updateMany
   */
  export type NotaClinicaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NotaClinicas.
     */
    data: XOR<NotaClinicaUpdateManyMutationInput, NotaClinicaUncheckedUpdateManyInput>
    /**
     * Filter which NotaClinicas to update
     */
    where?: NotaClinicaWhereInput
    /**
     * Limit how many NotaClinicas to update.
     */
    limit?: number
  }

  /**
   * NotaClinica upsert
   */
  export type NotaClinicaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaClinica
     */
    select?: NotaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotaClinica
     */
    omit?: NotaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaClinicaInclude<ExtArgs> | null
    /**
     * The filter to search for the NotaClinica to update in case it exists.
     */
    where: NotaClinicaWhereUniqueInput
    /**
     * In case the NotaClinica found by the `where` argument doesn't exist, create a new NotaClinica with this data.
     */
    create: XOR<NotaClinicaCreateInput, NotaClinicaUncheckedCreateInput>
    /**
     * In case the NotaClinica was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotaClinicaUpdateInput, NotaClinicaUncheckedUpdateInput>
  }

  /**
   * NotaClinica delete
   */
  export type NotaClinicaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaClinica
     */
    select?: NotaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotaClinica
     */
    omit?: NotaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaClinicaInclude<ExtArgs> | null
    /**
     * Filter which NotaClinica to delete.
     */
    where: NotaClinicaWhereUniqueInput
  }

  /**
   * NotaClinica deleteMany
   */
  export type NotaClinicaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NotaClinicas to delete
     */
    where?: NotaClinicaWhereInput
    /**
     * Limit how many NotaClinicas to delete.
     */
    limit?: number
  }

  /**
   * NotaClinica without action
   */
  export type NotaClinicaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NotaClinica
     */
    select?: NotaClinicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NotaClinica
     */
    omit?: NotaClinicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotaClinicaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const PacienteScalarFieldEnum: {
    id: 'id',
    tipoDocumento: 'tipoDocumento',
    numeroDocumento: 'numeroDocumento',
    nombres: 'nombres',
    apellidos: 'apellidos',
    fechaNacimiento: 'fechaNacimiento',
    sexo: 'sexo',
    correo: 'correo',
    telefono: 'telefono',
    direccion: 'direccion',
    estado: 'estado',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PacienteScalarFieldEnum = (typeof PacienteScalarFieldEnum)[keyof typeof PacienteScalarFieldEnum]


  export const ProfesionalScalarFieldEnum: {
    id: 'id',
    nombres: 'nombres',
    apellidos: 'apellidos',
    registroMedico: 'registroMedico',
    especialidad: 'especialidad',
    correo: 'correo',
    telefono: 'telefono',
    agendaHabilitada: 'agendaHabilitada'
  };

  export type ProfesionalScalarFieldEnum = (typeof ProfesionalScalarFieldEnum)[keyof typeof ProfesionalScalarFieldEnum]


  export const UnidadAtencionScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    tipo: 'tipo',
    direccion: 'direccion',
    estado: 'estado'
  };

  export type UnidadAtencionScalarFieldEnum = (typeof UnidadAtencionScalarFieldEnum)[keyof typeof UnidadAtencionScalarFieldEnum]


  export const BloqueAgendaScalarFieldEnum: {
    id: 'id',
    fechaInicio: 'fechaInicio',
    fechaFin: 'fechaFin',
    capacidad: 'capacidad',
    estado: 'estado',
    profesionalId: 'profesionalId',
    unidadId: 'unidadId'
  };

  export type BloqueAgendaScalarFieldEnum = (typeof BloqueAgendaScalarFieldEnum)[keyof typeof BloqueAgendaScalarFieldEnum]


  export const CitaScalarFieldEnum: {
    id: 'id',
    fechaInicio: 'fechaInicio',
    fechaFin: 'fechaFin',
    motivo: 'motivo',
    estado: 'estado',
    canal: 'canal',
    pacienteId: 'pacienteId',
    profesionalId: 'profesionalId',
    unidadId: 'unidadId'
  };

  export type CitaScalarFieldEnum = (typeof CitaScalarFieldEnum)[keyof typeof CitaScalarFieldEnum]


  export const EpisodioAtencionScalarFieldEnum: {
    id: 'id',
    motivo: 'motivo',
    fecha: 'fecha',
    estado: 'estado',
    pacienteId: 'pacienteId'
  };

  export type EpisodioAtencionScalarFieldEnum = (typeof EpisodioAtencionScalarFieldEnum)[keyof typeof EpisodioAtencionScalarFieldEnum]


  export const NotaClinicaScalarFieldEnum: {
    id: 'id',
    subjetivo: 'subjetivo',
    objetivo: 'objetivo',
    analisis: 'analisis',
    plan: 'plan',
    fecha: 'fecha',
    episodioId: 'episodioId',
    profesionalId: 'profesionalId'
  };

  export type NotaClinicaScalarFieldEnum = (typeof NotaClinicaScalarFieldEnum)[keyof typeof NotaClinicaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const UsuarioOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type UsuarioOrderByRelevanceFieldEnum = (typeof UsuarioOrderByRelevanceFieldEnum)[keyof typeof UsuarioOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const PacienteOrderByRelevanceFieldEnum: {
    tipoDocumento: 'tipoDocumento',
    numeroDocumento: 'numeroDocumento',
    nombres: 'nombres',
    apellidos: 'apellidos',
    sexo: 'sexo',
    correo: 'correo',
    telefono: 'telefono',
    direccion: 'direccion'
  };

  export type PacienteOrderByRelevanceFieldEnum = (typeof PacienteOrderByRelevanceFieldEnum)[keyof typeof PacienteOrderByRelevanceFieldEnum]


  export const ProfesionalOrderByRelevanceFieldEnum: {
    nombres: 'nombres',
    apellidos: 'apellidos',
    registroMedico: 'registroMedico',
    especialidad: 'especialidad',
    correo: 'correo',
    telefono: 'telefono'
  };

  export type ProfesionalOrderByRelevanceFieldEnum = (typeof ProfesionalOrderByRelevanceFieldEnum)[keyof typeof ProfesionalOrderByRelevanceFieldEnum]


  export const UnidadAtencionOrderByRelevanceFieldEnum: {
    nombre: 'nombre',
    tipo: 'tipo',
    direccion: 'direccion'
  };

  export type UnidadAtencionOrderByRelevanceFieldEnum = (typeof UnidadAtencionOrderByRelevanceFieldEnum)[keyof typeof UnidadAtencionOrderByRelevanceFieldEnum]


  export const BloqueAgendaOrderByRelevanceFieldEnum: {
    estado: 'estado'
  };

  export type BloqueAgendaOrderByRelevanceFieldEnum = (typeof BloqueAgendaOrderByRelevanceFieldEnum)[keyof typeof BloqueAgendaOrderByRelevanceFieldEnum]


  export const CitaOrderByRelevanceFieldEnum: {
    motivo: 'motivo',
    estado: 'estado',
    canal: 'canal'
  };

  export type CitaOrderByRelevanceFieldEnum = (typeof CitaOrderByRelevanceFieldEnum)[keyof typeof CitaOrderByRelevanceFieldEnum]


  export const EpisodioAtencionOrderByRelevanceFieldEnum: {
    motivo: 'motivo',
    estado: 'estado'
  };

  export type EpisodioAtencionOrderByRelevanceFieldEnum = (typeof EpisodioAtencionOrderByRelevanceFieldEnum)[keyof typeof EpisodioAtencionOrderByRelevanceFieldEnum]


  export const NotaClinicaOrderByRelevanceFieldEnum: {
    subjetivo: 'subjetivo',
    objetivo: 'objetivo',
    analisis: 'analisis',
    plan: 'plan'
  };

  export type NotaClinicaOrderByRelevanceFieldEnum = (typeof NotaClinicaOrderByRelevanceFieldEnum)[keyof typeof NotaClinicaOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    email?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    role?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _relevance?: UsuarioOrderByRelevanceInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    password?: StringFilter<"Usuario"> | string
    role?: StringFilter<"Usuario"> | string
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    email?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    role?: StringWithAggregatesFilter<"Usuario"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type PacienteWhereInput = {
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    id?: IntFilter<"Paciente"> | number
    tipoDocumento?: StringFilter<"Paciente"> | string
    numeroDocumento?: StringFilter<"Paciente"> | string
    nombres?: StringFilter<"Paciente"> | string
    apellidos?: StringFilter<"Paciente"> | string
    fechaNacimiento?: DateTimeFilter<"Paciente"> | Date | string
    sexo?: StringFilter<"Paciente"> | string
    correo?: StringNullableFilter<"Paciente"> | string | null
    telefono?: StringFilter<"Paciente"> | string
    direccion?: StringNullableFilter<"Paciente"> | string | null
    estado?: BoolFilter<"Paciente"> | boolean
    createdAt?: DateTimeFilter<"Paciente"> | Date | string
    updatedAt?: DateTimeFilter<"Paciente"> | Date | string
    citas?: CitaListRelationFilter
    episodios?: EpisodioAtencionListRelationFilter
  }

  export type PacienteOrderByWithRelationInput = {
    id?: SortOrder
    tipoDocumento?: SortOrder
    numeroDocumento?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    fechaNacimiento?: SortOrder
    sexo?: SortOrder
    correo?: SortOrderInput | SortOrder
    telefono?: SortOrder
    direccion?: SortOrderInput | SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    citas?: CitaOrderByRelationAggregateInput
    episodios?: EpisodioAtencionOrderByRelationAggregateInput
    _relevance?: PacienteOrderByRelevanceInput
  }

  export type PacienteWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    numeroDocumento?: string
    AND?: PacienteWhereInput | PacienteWhereInput[]
    OR?: PacienteWhereInput[]
    NOT?: PacienteWhereInput | PacienteWhereInput[]
    tipoDocumento?: StringFilter<"Paciente"> | string
    nombres?: StringFilter<"Paciente"> | string
    apellidos?: StringFilter<"Paciente"> | string
    fechaNacimiento?: DateTimeFilter<"Paciente"> | Date | string
    sexo?: StringFilter<"Paciente"> | string
    correo?: StringNullableFilter<"Paciente"> | string | null
    telefono?: StringFilter<"Paciente"> | string
    direccion?: StringNullableFilter<"Paciente"> | string | null
    estado?: BoolFilter<"Paciente"> | boolean
    createdAt?: DateTimeFilter<"Paciente"> | Date | string
    updatedAt?: DateTimeFilter<"Paciente"> | Date | string
    citas?: CitaListRelationFilter
    episodios?: EpisodioAtencionListRelationFilter
  }, "id" | "numeroDocumento">

  export type PacienteOrderByWithAggregationInput = {
    id?: SortOrder
    tipoDocumento?: SortOrder
    numeroDocumento?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    fechaNacimiento?: SortOrder
    sexo?: SortOrder
    correo?: SortOrderInput | SortOrder
    telefono?: SortOrder
    direccion?: SortOrderInput | SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PacienteCountOrderByAggregateInput
    _avg?: PacienteAvgOrderByAggregateInput
    _max?: PacienteMaxOrderByAggregateInput
    _min?: PacienteMinOrderByAggregateInput
    _sum?: PacienteSumOrderByAggregateInput
  }

  export type PacienteScalarWhereWithAggregatesInput = {
    AND?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    OR?: PacienteScalarWhereWithAggregatesInput[]
    NOT?: PacienteScalarWhereWithAggregatesInput | PacienteScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Paciente"> | number
    tipoDocumento?: StringWithAggregatesFilter<"Paciente"> | string
    numeroDocumento?: StringWithAggregatesFilter<"Paciente"> | string
    nombres?: StringWithAggregatesFilter<"Paciente"> | string
    apellidos?: StringWithAggregatesFilter<"Paciente"> | string
    fechaNacimiento?: DateTimeWithAggregatesFilter<"Paciente"> | Date | string
    sexo?: StringWithAggregatesFilter<"Paciente"> | string
    correo?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
    telefono?: StringWithAggregatesFilter<"Paciente"> | string
    direccion?: StringNullableWithAggregatesFilter<"Paciente"> | string | null
    estado?: BoolWithAggregatesFilter<"Paciente"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Paciente"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Paciente"> | Date | string
  }

  export type ProfesionalWhereInput = {
    AND?: ProfesionalWhereInput | ProfesionalWhereInput[]
    OR?: ProfesionalWhereInput[]
    NOT?: ProfesionalWhereInput | ProfesionalWhereInput[]
    id?: IntFilter<"Profesional"> | number
    nombres?: StringFilter<"Profesional"> | string
    apellidos?: StringFilter<"Profesional"> | string
    registroMedico?: StringFilter<"Profesional"> | string
    especialidad?: StringFilter<"Profesional"> | string
    correo?: StringFilter<"Profesional"> | string
    telefono?: StringNullableFilter<"Profesional"> | string | null
    agendaHabilitada?: BoolFilter<"Profesional"> | boolean
    bloquesAgenda?: BloqueAgendaListRelationFilter
    citas?: CitaListRelationFilter
    notas?: NotaClinicaListRelationFilter
  }

  export type ProfesionalOrderByWithRelationInput = {
    id?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    registroMedico?: SortOrder
    especialidad?: SortOrder
    correo?: SortOrder
    telefono?: SortOrderInput | SortOrder
    agendaHabilitada?: SortOrder
    bloquesAgenda?: BloqueAgendaOrderByRelationAggregateInput
    citas?: CitaOrderByRelationAggregateInput
    notas?: NotaClinicaOrderByRelationAggregateInput
    _relevance?: ProfesionalOrderByRelevanceInput
  }

  export type ProfesionalWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    registroMedico?: string
    correo?: string
    AND?: ProfesionalWhereInput | ProfesionalWhereInput[]
    OR?: ProfesionalWhereInput[]
    NOT?: ProfesionalWhereInput | ProfesionalWhereInput[]
    nombres?: StringFilter<"Profesional"> | string
    apellidos?: StringFilter<"Profesional"> | string
    especialidad?: StringFilter<"Profesional"> | string
    telefono?: StringNullableFilter<"Profesional"> | string | null
    agendaHabilitada?: BoolFilter<"Profesional"> | boolean
    bloquesAgenda?: BloqueAgendaListRelationFilter
    citas?: CitaListRelationFilter
    notas?: NotaClinicaListRelationFilter
  }, "id" | "registroMedico" | "correo">

  export type ProfesionalOrderByWithAggregationInput = {
    id?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    registroMedico?: SortOrder
    especialidad?: SortOrder
    correo?: SortOrder
    telefono?: SortOrderInput | SortOrder
    agendaHabilitada?: SortOrder
    _count?: ProfesionalCountOrderByAggregateInput
    _avg?: ProfesionalAvgOrderByAggregateInput
    _max?: ProfesionalMaxOrderByAggregateInput
    _min?: ProfesionalMinOrderByAggregateInput
    _sum?: ProfesionalSumOrderByAggregateInput
  }

  export type ProfesionalScalarWhereWithAggregatesInput = {
    AND?: ProfesionalScalarWhereWithAggregatesInput | ProfesionalScalarWhereWithAggregatesInput[]
    OR?: ProfesionalScalarWhereWithAggregatesInput[]
    NOT?: ProfesionalScalarWhereWithAggregatesInput | ProfesionalScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Profesional"> | number
    nombres?: StringWithAggregatesFilter<"Profesional"> | string
    apellidos?: StringWithAggregatesFilter<"Profesional"> | string
    registroMedico?: StringWithAggregatesFilter<"Profesional"> | string
    especialidad?: StringWithAggregatesFilter<"Profesional"> | string
    correo?: StringWithAggregatesFilter<"Profesional"> | string
    telefono?: StringNullableWithAggregatesFilter<"Profesional"> | string | null
    agendaHabilitada?: BoolWithAggregatesFilter<"Profesional"> | boolean
  }

  export type UnidadAtencionWhereInput = {
    AND?: UnidadAtencionWhereInput | UnidadAtencionWhereInput[]
    OR?: UnidadAtencionWhereInput[]
    NOT?: UnidadAtencionWhereInput | UnidadAtencionWhereInput[]
    id?: IntFilter<"UnidadAtencion"> | number
    nombre?: StringFilter<"UnidadAtencion"> | string
    tipo?: StringFilter<"UnidadAtencion"> | string
    direccion?: StringFilter<"UnidadAtencion"> | string
    estado?: BoolFilter<"UnidadAtencion"> | boolean
    bloquesAgenda?: BloqueAgendaListRelationFilter
    citas?: CitaListRelationFilter
  }

  export type UnidadAtencionOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    direccion?: SortOrder
    estado?: SortOrder
    bloquesAgenda?: BloqueAgendaOrderByRelationAggregateInput
    citas?: CitaOrderByRelationAggregateInput
    _relevance?: UnidadAtencionOrderByRelevanceInput
  }

  export type UnidadAtencionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UnidadAtencionWhereInput | UnidadAtencionWhereInput[]
    OR?: UnidadAtencionWhereInput[]
    NOT?: UnidadAtencionWhereInput | UnidadAtencionWhereInput[]
    nombre?: StringFilter<"UnidadAtencion"> | string
    tipo?: StringFilter<"UnidadAtencion"> | string
    direccion?: StringFilter<"UnidadAtencion"> | string
    estado?: BoolFilter<"UnidadAtencion"> | boolean
    bloquesAgenda?: BloqueAgendaListRelationFilter
    citas?: CitaListRelationFilter
  }, "id">

  export type UnidadAtencionOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    direccion?: SortOrder
    estado?: SortOrder
    _count?: UnidadAtencionCountOrderByAggregateInput
    _avg?: UnidadAtencionAvgOrderByAggregateInput
    _max?: UnidadAtencionMaxOrderByAggregateInput
    _min?: UnidadAtencionMinOrderByAggregateInput
    _sum?: UnidadAtencionSumOrderByAggregateInput
  }

  export type UnidadAtencionScalarWhereWithAggregatesInput = {
    AND?: UnidadAtencionScalarWhereWithAggregatesInput | UnidadAtencionScalarWhereWithAggregatesInput[]
    OR?: UnidadAtencionScalarWhereWithAggregatesInput[]
    NOT?: UnidadAtencionScalarWhereWithAggregatesInput | UnidadAtencionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UnidadAtencion"> | number
    nombre?: StringWithAggregatesFilter<"UnidadAtencion"> | string
    tipo?: StringWithAggregatesFilter<"UnidadAtencion"> | string
    direccion?: StringWithAggregatesFilter<"UnidadAtencion"> | string
    estado?: BoolWithAggregatesFilter<"UnidadAtencion"> | boolean
  }

  export type BloqueAgendaWhereInput = {
    AND?: BloqueAgendaWhereInput | BloqueAgendaWhereInput[]
    OR?: BloqueAgendaWhereInput[]
    NOT?: BloqueAgendaWhereInput | BloqueAgendaWhereInput[]
    id?: IntFilter<"BloqueAgenda"> | number
    fechaInicio?: DateTimeFilter<"BloqueAgenda"> | Date | string
    fechaFin?: DateTimeFilter<"BloqueAgenda"> | Date | string
    capacidad?: IntFilter<"BloqueAgenda"> | number
    estado?: StringFilter<"BloqueAgenda"> | string
    profesionalId?: IntFilter<"BloqueAgenda"> | number
    unidadId?: IntFilter<"BloqueAgenda"> | number
    profesional?: XOR<ProfesionalScalarRelationFilter, ProfesionalWhereInput>
    unidad?: XOR<UnidadAtencionScalarRelationFilter, UnidadAtencionWhereInput>
  }

  export type BloqueAgendaOrderByWithRelationInput = {
    id?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    capacidad?: SortOrder
    estado?: SortOrder
    profesionalId?: SortOrder
    unidadId?: SortOrder
    profesional?: ProfesionalOrderByWithRelationInput
    unidad?: UnidadAtencionOrderByWithRelationInput
    _relevance?: BloqueAgendaOrderByRelevanceInput
  }

  export type BloqueAgendaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BloqueAgendaWhereInput | BloqueAgendaWhereInput[]
    OR?: BloqueAgendaWhereInput[]
    NOT?: BloqueAgendaWhereInput | BloqueAgendaWhereInput[]
    fechaInicio?: DateTimeFilter<"BloqueAgenda"> | Date | string
    fechaFin?: DateTimeFilter<"BloqueAgenda"> | Date | string
    capacidad?: IntFilter<"BloqueAgenda"> | number
    estado?: StringFilter<"BloqueAgenda"> | string
    profesionalId?: IntFilter<"BloqueAgenda"> | number
    unidadId?: IntFilter<"BloqueAgenda"> | number
    profesional?: XOR<ProfesionalScalarRelationFilter, ProfesionalWhereInput>
    unidad?: XOR<UnidadAtencionScalarRelationFilter, UnidadAtencionWhereInput>
  }, "id">

  export type BloqueAgendaOrderByWithAggregationInput = {
    id?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    capacidad?: SortOrder
    estado?: SortOrder
    profesionalId?: SortOrder
    unidadId?: SortOrder
    _count?: BloqueAgendaCountOrderByAggregateInput
    _avg?: BloqueAgendaAvgOrderByAggregateInput
    _max?: BloqueAgendaMaxOrderByAggregateInput
    _min?: BloqueAgendaMinOrderByAggregateInput
    _sum?: BloqueAgendaSumOrderByAggregateInput
  }

  export type BloqueAgendaScalarWhereWithAggregatesInput = {
    AND?: BloqueAgendaScalarWhereWithAggregatesInput | BloqueAgendaScalarWhereWithAggregatesInput[]
    OR?: BloqueAgendaScalarWhereWithAggregatesInput[]
    NOT?: BloqueAgendaScalarWhereWithAggregatesInput | BloqueAgendaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BloqueAgenda"> | number
    fechaInicio?: DateTimeWithAggregatesFilter<"BloqueAgenda"> | Date | string
    fechaFin?: DateTimeWithAggregatesFilter<"BloqueAgenda"> | Date | string
    capacidad?: IntWithAggregatesFilter<"BloqueAgenda"> | number
    estado?: StringWithAggregatesFilter<"BloqueAgenda"> | string
    profesionalId?: IntWithAggregatesFilter<"BloqueAgenda"> | number
    unidadId?: IntWithAggregatesFilter<"BloqueAgenda"> | number
  }

  export type CitaWhereInput = {
    AND?: CitaWhereInput | CitaWhereInput[]
    OR?: CitaWhereInput[]
    NOT?: CitaWhereInput | CitaWhereInput[]
    id?: IntFilter<"Cita"> | number
    fechaInicio?: DateTimeFilter<"Cita"> | Date | string
    fechaFin?: DateTimeFilter<"Cita"> | Date | string
    motivo?: StringFilter<"Cita"> | string
    estado?: StringFilter<"Cita"> | string
    canal?: StringFilter<"Cita"> | string
    pacienteId?: IntFilter<"Cita"> | number
    profesionalId?: IntFilter<"Cita"> | number
    unidadId?: IntFilter<"Cita"> | number
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    profesional?: XOR<ProfesionalScalarRelationFilter, ProfesionalWhereInput>
    unidad?: XOR<UnidadAtencionScalarRelationFilter, UnidadAtencionWhereInput>
  }

  export type CitaOrderByWithRelationInput = {
    id?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    motivo?: SortOrder
    estado?: SortOrder
    canal?: SortOrder
    pacienteId?: SortOrder
    profesionalId?: SortOrder
    unidadId?: SortOrder
    paciente?: PacienteOrderByWithRelationInput
    profesional?: ProfesionalOrderByWithRelationInput
    unidad?: UnidadAtencionOrderByWithRelationInput
    _relevance?: CitaOrderByRelevanceInput
  }

  export type CitaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CitaWhereInput | CitaWhereInput[]
    OR?: CitaWhereInput[]
    NOT?: CitaWhereInput | CitaWhereInput[]
    fechaInicio?: DateTimeFilter<"Cita"> | Date | string
    fechaFin?: DateTimeFilter<"Cita"> | Date | string
    motivo?: StringFilter<"Cita"> | string
    estado?: StringFilter<"Cita"> | string
    canal?: StringFilter<"Cita"> | string
    pacienteId?: IntFilter<"Cita"> | number
    profesionalId?: IntFilter<"Cita"> | number
    unidadId?: IntFilter<"Cita"> | number
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    profesional?: XOR<ProfesionalScalarRelationFilter, ProfesionalWhereInput>
    unidad?: XOR<UnidadAtencionScalarRelationFilter, UnidadAtencionWhereInput>
  }, "id">

  export type CitaOrderByWithAggregationInput = {
    id?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    motivo?: SortOrder
    estado?: SortOrder
    canal?: SortOrder
    pacienteId?: SortOrder
    profesionalId?: SortOrder
    unidadId?: SortOrder
    _count?: CitaCountOrderByAggregateInput
    _avg?: CitaAvgOrderByAggregateInput
    _max?: CitaMaxOrderByAggregateInput
    _min?: CitaMinOrderByAggregateInput
    _sum?: CitaSumOrderByAggregateInput
  }

  export type CitaScalarWhereWithAggregatesInput = {
    AND?: CitaScalarWhereWithAggregatesInput | CitaScalarWhereWithAggregatesInput[]
    OR?: CitaScalarWhereWithAggregatesInput[]
    NOT?: CitaScalarWhereWithAggregatesInput | CitaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Cita"> | number
    fechaInicio?: DateTimeWithAggregatesFilter<"Cita"> | Date | string
    fechaFin?: DateTimeWithAggregatesFilter<"Cita"> | Date | string
    motivo?: StringWithAggregatesFilter<"Cita"> | string
    estado?: StringWithAggregatesFilter<"Cita"> | string
    canal?: StringWithAggregatesFilter<"Cita"> | string
    pacienteId?: IntWithAggregatesFilter<"Cita"> | number
    profesionalId?: IntWithAggregatesFilter<"Cita"> | number
    unidadId?: IntWithAggregatesFilter<"Cita"> | number
  }

  export type EpisodioAtencionWhereInput = {
    AND?: EpisodioAtencionWhereInput | EpisodioAtencionWhereInput[]
    OR?: EpisodioAtencionWhereInput[]
    NOT?: EpisodioAtencionWhereInput | EpisodioAtencionWhereInput[]
    id?: IntFilter<"EpisodioAtencion"> | number
    motivo?: StringFilter<"EpisodioAtencion"> | string
    fecha?: DateTimeFilter<"EpisodioAtencion"> | Date | string
    estado?: StringFilter<"EpisodioAtencion"> | string
    pacienteId?: IntFilter<"EpisodioAtencion"> | number
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    notas?: NotaClinicaListRelationFilter
  }

  export type EpisodioAtencionOrderByWithRelationInput = {
    id?: SortOrder
    motivo?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
    pacienteId?: SortOrder
    paciente?: PacienteOrderByWithRelationInput
    notas?: NotaClinicaOrderByRelationAggregateInput
    _relevance?: EpisodioAtencionOrderByRelevanceInput
  }

  export type EpisodioAtencionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EpisodioAtencionWhereInput | EpisodioAtencionWhereInput[]
    OR?: EpisodioAtencionWhereInput[]
    NOT?: EpisodioAtencionWhereInput | EpisodioAtencionWhereInput[]
    motivo?: StringFilter<"EpisodioAtencion"> | string
    fecha?: DateTimeFilter<"EpisodioAtencion"> | Date | string
    estado?: StringFilter<"EpisodioAtencion"> | string
    pacienteId?: IntFilter<"EpisodioAtencion"> | number
    paciente?: XOR<PacienteScalarRelationFilter, PacienteWhereInput>
    notas?: NotaClinicaListRelationFilter
  }, "id">

  export type EpisodioAtencionOrderByWithAggregationInput = {
    id?: SortOrder
    motivo?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
    pacienteId?: SortOrder
    _count?: EpisodioAtencionCountOrderByAggregateInput
    _avg?: EpisodioAtencionAvgOrderByAggregateInput
    _max?: EpisodioAtencionMaxOrderByAggregateInput
    _min?: EpisodioAtencionMinOrderByAggregateInput
    _sum?: EpisodioAtencionSumOrderByAggregateInput
  }

  export type EpisodioAtencionScalarWhereWithAggregatesInput = {
    AND?: EpisodioAtencionScalarWhereWithAggregatesInput | EpisodioAtencionScalarWhereWithAggregatesInput[]
    OR?: EpisodioAtencionScalarWhereWithAggregatesInput[]
    NOT?: EpisodioAtencionScalarWhereWithAggregatesInput | EpisodioAtencionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"EpisodioAtencion"> | number
    motivo?: StringWithAggregatesFilter<"EpisodioAtencion"> | string
    fecha?: DateTimeWithAggregatesFilter<"EpisodioAtencion"> | Date | string
    estado?: StringWithAggregatesFilter<"EpisodioAtencion"> | string
    pacienteId?: IntWithAggregatesFilter<"EpisodioAtencion"> | number
  }

  export type NotaClinicaWhereInput = {
    AND?: NotaClinicaWhereInput | NotaClinicaWhereInput[]
    OR?: NotaClinicaWhereInput[]
    NOT?: NotaClinicaWhereInput | NotaClinicaWhereInput[]
    id?: IntFilter<"NotaClinica"> | number
    subjetivo?: StringFilter<"NotaClinica"> | string
    objetivo?: StringFilter<"NotaClinica"> | string
    analisis?: StringFilter<"NotaClinica"> | string
    plan?: StringFilter<"NotaClinica"> | string
    fecha?: DateTimeFilter<"NotaClinica"> | Date | string
    episodioId?: IntFilter<"NotaClinica"> | number
    profesionalId?: IntFilter<"NotaClinica"> | number
    episodio?: XOR<EpisodioAtencionScalarRelationFilter, EpisodioAtencionWhereInput>
    profesional?: XOR<ProfesionalScalarRelationFilter, ProfesionalWhereInput>
  }

  export type NotaClinicaOrderByWithRelationInput = {
    id?: SortOrder
    subjetivo?: SortOrder
    objetivo?: SortOrder
    analisis?: SortOrder
    plan?: SortOrder
    fecha?: SortOrder
    episodioId?: SortOrder
    profesionalId?: SortOrder
    episodio?: EpisodioAtencionOrderByWithRelationInput
    profesional?: ProfesionalOrderByWithRelationInput
    _relevance?: NotaClinicaOrderByRelevanceInput
  }

  export type NotaClinicaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotaClinicaWhereInput | NotaClinicaWhereInput[]
    OR?: NotaClinicaWhereInput[]
    NOT?: NotaClinicaWhereInput | NotaClinicaWhereInput[]
    subjetivo?: StringFilter<"NotaClinica"> | string
    objetivo?: StringFilter<"NotaClinica"> | string
    analisis?: StringFilter<"NotaClinica"> | string
    plan?: StringFilter<"NotaClinica"> | string
    fecha?: DateTimeFilter<"NotaClinica"> | Date | string
    episodioId?: IntFilter<"NotaClinica"> | number
    profesionalId?: IntFilter<"NotaClinica"> | number
    episodio?: XOR<EpisodioAtencionScalarRelationFilter, EpisodioAtencionWhereInput>
    profesional?: XOR<ProfesionalScalarRelationFilter, ProfesionalWhereInput>
  }, "id">

  export type NotaClinicaOrderByWithAggregationInput = {
    id?: SortOrder
    subjetivo?: SortOrder
    objetivo?: SortOrder
    analisis?: SortOrder
    plan?: SortOrder
    fecha?: SortOrder
    episodioId?: SortOrder
    profesionalId?: SortOrder
    _count?: NotaClinicaCountOrderByAggregateInput
    _avg?: NotaClinicaAvgOrderByAggregateInput
    _max?: NotaClinicaMaxOrderByAggregateInput
    _min?: NotaClinicaMinOrderByAggregateInput
    _sum?: NotaClinicaSumOrderByAggregateInput
  }

  export type NotaClinicaScalarWhereWithAggregatesInput = {
    AND?: NotaClinicaScalarWhereWithAggregatesInput | NotaClinicaScalarWhereWithAggregatesInput[]
    OR?: NotaClinicaScalarWhereWithAggregatesInput[]
    NOT?: NotaClinicaScalarWhereWithAggregatesInput | NotaClinicaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"NotaClinica"> | number
    subjetivo?: StringWithAggregatesFilter<"NotaClinica"> | string
    objetivo?: StringWithAggregatesFilter<"NotaClinica"> | string
    analisis?: StringWithAggregatesFilter<"NotaClinica"> | string
    plan?: StringWithAggregatesFilter<"NotaClinica"> | string
    fecha?: DateTimeWithAggregatesFilter<"NotaClinica"> | Date | string
    episodioId?: IntWithAggregatesFilter<"NotaClinica"> | number
    profesionalId?: IntWithAggregatesFilter<"NotaClinica"> | number
  }

  export type UsuarioCreateInput = {
    email: string
    password: string
    role: string
    createdAt?: Date | string
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    role: string
    createdAt?: Date | string
  }

  export type UsuarioUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioCreateManyInput = {
    id?: number
    email: string
    password: string
    role: string
    createdAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacienteCreateInput = {
    tipoDocumento: string
    numeroDocumento: string
    nombres: string
    apellidos: string
    fechaNacimiento: Date | string
    sexo: string
    correo?: string | null
    telefono: string
    direccion?: string | null
    estado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    citas?: CitaCreateNestedManyWithoutPacienteInput
    episodios?: EpisodioAtencionCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateInput = {
    id?: number
    tipoDocumento: string
    numeroDocumento: string
    nombres: string
    apellidos: string
    fechaNacimiento: Date | string
    sexo: string
    correo?: string | null
    telefono: string
    direccion?: string | null
    estado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    citas?: CitaUncheckedCreateNestedManyWithoutPacienteInput
    episodios?: EpisodioAtencionUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUpdateInput = {
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    numeroDocumento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    citas?: CitaUpdateManyWithoutPacienteNestedInput
    episodios?: EpisodioAtencionUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    numeroDocumento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    citas?: CitaUncheckedUpdateManyWithoutPacienteNestedInput
    episodios?: EpisodioAtencionUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteCreateManyInput = {
    id?: number
    tipoDocumento: string
    numeroDocumento: string
    nombres: string
    apellidos: string
    fechaNacimiento: Date | string
    sexo: string
    correo?: string | null
    telefono: string
    direccion?: string | null
    estado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PacienteUpdateManyMutationInput = {
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    numeroDocumento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PacienteUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    numeroDocumento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfesionalCreateInput = {
    nombres: string
    apellidos: string
    registroMedico: string
    especialidad: string
    correo: string
    telefono?: string | null
    agendaHabilitada?: boolean
    bloquesAgenda?: BloqueAgendaCreateNestedManyWithoutProfesionalInput
    citas?: CitaCreateNestedManyWithoutProfesionalInput
    notas?: NotaClinicaCreateNestedManyWithoutProfesionalInput
  }

  export type ProfesionalUncheckedCreateInput = {
    id?: number
    nombres: string
    apellidos: string
    registroMedico: string
    especialidad: string
    correo: string
    telefono?: string | null
    agendaHabilitada?: boolean
    bloquesAgenda?: BloqueAgendaUncheckedCreateNestedManyWithoutProfesionalInput
    citas?: CitaUncheckedCreateNestedManyWithoutProfesionalInput
    notas?: NotaClinicaUncheckedCreateNestedManyWithoutProfesionalInput
  }

  export type ProfesionalUpdateInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    registroMedico?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    agendaHabilitada?: BoolFieldUpdateOperationsInput | boolean
    bloquesAgenda?: BloqueAgendaUpdateManyWithoutProfesionalNestedInput
    citas?: CitaUpdateManyWithoutProfesionalNestedInput
    notas?: NotaClinicaUpdateManyWithoutProfesionalNestedInput
  }

  export type ProfesionalUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    registroMedico?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    agendaHabilitada?: BoolFieldUpdateOperationsInput | boolean
    bloquesAgenda?: BloqueAgendaUncheckedUpdateManyWithoutProfesionalNestedInput
    citas?: CitaUncheckedUpdateManyWithoutProfesionalNestedInput
    notas?: NotaClinicaUncheckedUpdateManyWithoutProfesionalNestedInput
  }

  export type ProfesionalCreateManyInput = {
    id?: number
    nombres: string
    apellidos: string
    registroMedico: string
    especialidad: string
    correo: string
    telefono?: string | null
    agendaHabilitada?: boolean
  }

  export type ProfesionalUpdateManyMutationInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    registroMedico?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    agendaHabilitada?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProfesionalUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    registroMedico?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    agendaHabilitada?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UnidadAtencionCreateInput = {
    nombre: string
    tipo: string
    direccion: string
    estado?: boolean
    bloquesAgenda?: BloqueAgendaCreateNestedManyWithoutUnidadInput
    citas?: CitaCreateNestedManyWithoutUnidadInput
  }

  export type UnidadAtencionUncheckedCreateInput = {
    id?: number
    nombre: string
    tipo: string
    direccion: string
    estado?: boolean
    bloquesAgenda?: BloqueAgendaUncheckedCreateNestedManyWithoutUnidadInput
    citas?: CitaUncheckedCreateNestedManyWithoutUnidadInput
  }

  export type UnidadAtencionUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    bloquesAgenda?: BloqueAgendaUpdateManyWithoutUnidadNestedInput
    citas?: CitaUpdateManyWithoutUnidadNestedInput
  }

  export type UnidadAtencionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    bloquesAgenda?: BloqueAgendaUncheckedUpdateManyWithoutUnidadNestedInput
    citas?: CitaUncheckedUpdateManyWithoutUnidadNestedInput
  }

  export type UnidadAtencionCreateManyInput = {
    id?: number
    nombre: string
    tipo: string
    direccion: string
    estado?: boolean
  }

  export type UnidadAtencionUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UnidadAtencionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BloqueAgendaCreateInput = {
    fechaInicio: Date | string
    fechaFin: Date | string
    capacidad?: number
    estado: string
    profesional: ProfesionalCreateNestedOneWithoutBloquesAgendaInput
    unidad: UnidadAtencionCreateNestedOneWithoutBloquesAgendaInput
  }

  export type BloqueAgendaUncheckedCreateInput = {
    id?: number
    fechaInicio: Date | string
    fechaFin: Date | string
    capacidad?: number
    estado: string
    profesionalId: number
    unidadId: number
  }

  export type BloqueAgendaUpdateInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    capacidad?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    profesional?: ProfesionalUpdateOneRequiredWithoutBloquesAgendaNestedInput
    unidad?: UnidadAtencionUpdateOneRequiredWithoutBloquesAgendaNestedInput
  }

  export type BloqueAgendaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    capacidad?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    profesionalId?: IntFieldUpdateOperationsInput | number
    unidadId?: IntFieldUpdateOperationsInput | number
  }

  export type BloqueAgendaCreateManyInput = {
    id?: number
    fechaInicio: Date | string
    fechaFin: Date | string
    capacidad?: number
    estado: string
    profesionalId: number
    unidadId: number
  }

  export type BloqueAgendaUpdateManyMutationInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    capacidad?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type BloqueAgendaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    capacidad?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    profesionalId?: IntFieldUpdateOperationsInput | number
    unidadId?: IntFieldUpdateOperationsInput | number
  }

  export type CitaCreateInput = {
    fechaInicio: Date | string
    fechaFin: Date | string
    motivo: string
    estado: string
    canal: string
    paciente: PacienteCreateNestedOneWithoutCitasInput
    profesional: ProfesionalCreateNestedOneWithoutCitasInput
    unidad: UnidadAtencionCreateNestedOneWithoutCitasInput
  }

  export type CitaUncheckedCreateInput = {
    id?: number
    fechaInicio: Date | string
    fechaFin: Date | string
    motivo: string
    estado: string
    canal: string
    pacienteId: number
    profesionalId: number
    unidadId: number
  }

  export type CitaUpdateInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    canal?: StringFieldUpdateOperationsInput | string
    paciente?: PacienteUpdateOneRequiredWithoutCitasNestedInput
    profesional?: ProfesionalUpdateOneRequiredWithoutCitasNestedInput
    unidad?: UnidadAtencionUpdateOneRequiredWithoutCitasNestedInput
  }

  export type CitaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    canal?: StringFieldUpdateOperationsInput | string
    pacienteId?: IntFieldUpdateOperationsInput | number
    profesionalId?: IntFieldUpdateOperationsInput | number
    unidadId?: IntFieldUpdateOperationsInput | number
  }

  export type CitaCreateManyInput = {
    id?: number
    fechaInicio: Date | string
    fechaFin: Date | string
    motivo: string
    estado: string
    canal: string
    pacienteId: number
    profesionalId: number
    unidadId: number
  }

  export type CitaUpdateManyMutationInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    canal?: StringFieldUpdateOperationsInput | string
  }

  export type CitaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    canal?: StringFieldUpdateOperationsInput | string
    pacienteId?: IntFieldUpdateOperationsInput | number
    profesionalId?: IntFieldUpdateOperationsInput | number
    unidadId?: IntFieldUpdateOperationsInput | number
  }

  export type EpisodioAtencionCreateInput = {
    motivo: string
    fecha?: Date | string
    estado: string
    paciente: PacienteCreateNestedOneWithoutEpisodiosInput
    notas?: NotaClinicaCreateNestedManyWithoutEpisodioInput
  }

  export type EpisodioAtencionUncheckedCreateInput = {
    id?: number
    motivo: string
    fecha?: Date | string
    estado: string
    pacienteId: number
    notas?: NotaClinicaUncheckedCreateNestedManyWithoutEpisodioInput
  }

  export type EpisodioAtencionUpdateInput = {
    motivo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    paciente?: PacienteUpdateOneRequiredWithoutEpisodiosNestedInput
    notas?: NotaClinicaUpdateManyWithoutEpisodioNestedInput
  }

  export type EpisodioAtencionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    motivo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    pacienteId?: IntFieldUpdateOperationsInput | number
    notas?: NotaClinicaUncheckedUpdateManyWithoutEpisodioNestedInput
  }

  export type EpisodioAtencionCreateManyInput = {
    id?: number
    motivo: string
    fecha?: Date | string
    estado: string
    pacienteId: number
  }

  export type EpisodioAtencionUpdateManyMutationInput = {
    motivo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type EpisodioAtencionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    motivo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    pacienteId?: IntFieldUpdateOperationsInput | number
  }

  export type NotaClinicaCreateInput = {
    subjetivo: string
    objetivo: string
    analisis: string
    plan: string
    fecha?: Date | string
    episodio: EpisodioAtencionCreateNestedOneWithoutNotasInput
    profesional: ProfesionalCreateNestedOneWithoutNotasInput
  }

  export type NotaClinicaUncheckedCreateInput = {
    id?: number
    subjetivo: string
    objetivo: string
    analisis: string
    plan: string
    fecha?: Date | string
    episodioId: number
    profesionalId: number
  }

  export type NotaClinicaUpdateInput = {
    subjetivo?: StringFieldUpdateOperationsInput | string
    objetivo?: StringFieldUpdateOperationsInput | string
    analisis?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    episodio?: EpisodioAtencionUpdateOneRequiredWithoutNotasNestedInput
    profesional?: ProfesionalUpdateOneRequiredWithoutNotasNestedInput
  }

  export type NotaClinicaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjetivo?: StringFieldUpdateOperationsInput | string
    objetivo?: StringFieldUpdateOperationsInput | string
    analisis?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    episodioId?: IntFieldUpdateOperationsInput | number
    profesionalId?: IntFieldUpdateOperationsInput | number
  }

  export type NotaClinicaCreateManyInput = {
    id?: number
    subjetivo: string
    objetivo: string
    analisis: string
    plan: string
    fecha?: Date | string
    episodioId: number
    profesionalId: number
  }

  export type NotaClinicaUpdateManyMutationInput = {
    subjetivo?: StringFieldUpdateOperationsInput | string
    objetivo?: StringFieldUpdateOperationsInput | string
    analisis?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotaClinicaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjetivo?: StringFieldUpdateOperationsInput | string
    objetivo?: StringFieldUpdateOperationsInput | string
    analisis?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    episodioId?: IntFieldUpdateOperationsInput | number
    profesionalId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsuarioOrderByRelevanceInput = {
    fields: UsuarioOrderByRelevanceFieldEnum | UsuarioOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CitaListRelationFilter = {
    every?: CitaWhereInput
    some?: CitaWhereInput
    none?: CitaWhereInput
  }

  export type EpisodioAtencionListRelationFilter = {
    every?: EpisodioAtencionWhereInput
    some?: EpisodioAtencionWhereInput
    none?: EpisodioAtencionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CitaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EpisodioAtencionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PacienteOrderByRelevanceInput = {
    fields: PacienteOrderByRelevanceFieldEnum | PacienteOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PacienteCountOrderByAggregateInput = {
    id?: SortOrder
    tipoDocumento?: SortOrder
    numeroDocumento?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    fechaNacimiento?: SortOrder
    sexo?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PacienteAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PacienteMaxOrderByAggregateInput = {
    id?: SortOrder
    tipoDocumento?: SortOrder
    numeroDocumento?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    fechaNacimiento?: SortOrder
    sexo?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PacienteMinOrderByAggregateInput = {
    id?: SortOrder
    tipoDocumento?: SortOrder
    numeroDocumento?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    fechaNacimiento?: SortOrder
    sexo?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    direccion?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PacienteSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type BloqueAgendaListRelationFilter = {
    every?: BloqueAgendaWhereInput
    some?: BloqueAgendaWhereInput
    none?: BloqueAgendaWhereInput
  }

  export type NotaClinicaListRelationFilter = {
    every?: NotaClinicaWhereInput
    some?: NotaClinicaWhereInput
    none?: NotaClinicaWhereInput
  }

  export type BloqueAgendaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotaClinicaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfesionalOrderByRelevanceInput = {
    fields: ProfesionalOrderByRelevanceFieldEnum | ProfesionalOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ProfesionalCountOrderByAggregateInput = {
    id?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    registroMedico?: SortOrder
    especialidad?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    agendaHabilitada?: SortOrder
  }

  export type ProfesionalAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProfesionalMaxOrderByAggregateInput = {
    id?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    registroMedico?: SortOrder
    especialidad?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    agendaHabilitada?: SortOrder
  }

  export type ProfesionalMinOrderByAggregateInput = {
    id?: SortOrder
    nombres?: SortOrder
    apellidos?: SortOrder
    registroMedico?: SortOrder
    especialidad?: SortOrder
    correo?: SortOrder
    telefono?: SortOrder
    agendaHabilitada?: SortOrder
  }

  export type ProfesionalSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UnidadAtencionOrderByRelevanceInput = {
    fields: UnidadAtencionOrderByRelevanceFieldEnum | UnidadAtencionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UnidadAtencionCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    direccion?: SortOrder
    estado?: SortOrder
  }

  export type UnidadAtencionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UnidadAtencionMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    direccion?: SortOrder
    estado?: SortOrder
  }

  export type UnidadAtencionMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    tipo?: SortOrder
    direccion?: SortOrder
    estado?: SortOrder
  }

  export type UnidadAtencionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProfesionalScalarRelationFilter = {
    is?: ProfesionalWhereInput
    isNot?: ProfesionalWhereInput
  }

  export type UnidadAtencionScalarRelationFilter = {
    is?: UnidadAtencionWhereInput
    isNot?: UnidadAtencionWhereInput
  }

  export type BloqueAgendaOrderByRelevanceInput = {
    fields: BloqueAgendaOrderByRelevanceFieldEnum | BloqueAgendaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BloqueAgendaCountOrderByAggregateInput = {
    id?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    capacidad?: SortOrder
    estado?: SortOrder
    profesionalId?: SortOrder
    unidadId?: SortOrder
  }

  export type BloqueAgendaAvgOrderByAggregateInput = {
    id?: SortOrder
    capacidad?: SortOrder
    profesionalId?: SortOrder
    unidadId?: SortOrder
  }

  export type BloqueAgendaMaxOrderByAggregateInput = {
    id?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    capacidad?: SortOrder
    estado?: SortOrder
    profesionalId?: SortOrder
    unidadId?: SortOrder
  }

  export type BloqueAgendaMinOrderByAggregateInput = {
    id?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    capacidad?: SortOrder
    estado?: SortOrder
    profesionalId?: SortOrder
    unidadId?: SortOrder
  }

  export type BloqueAgendaSumOrderByAggregateInput = {
    id?: SortOrder
    capacidad?: SortOrder
    profesionalId?: SortOrder
    unidadId?: SortOrder
  }

  export type PacienteScalarRelationFilter = {
    is?: PacienteWhereInput
    isNot?: PacienteWhereInput
  }

  export type CitaOrderByRelevanceInput = {
    fields: CitaOrderByRelevanceFieldEnum | CitaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type CitaCountOrderByAggregateInput = {
    id?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    motivo?: SortOrder
    estado?: SortOrder
    canal?: SortOrder
    pacienteId?: SortOrder
    profesionalId?: SortOrder
    unidadId?: SortOrder
  }

  export type CitaAvgOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    profesionalId?: SortOrder
    unidadId?: SortOrder
  }

  export type CitaMaxOrderByAggregateInput = {
    id?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    motivo?: SortOrder
    estado?: SortOrder
    canal?: SortOrder
    pacienteId?: SortOrder
    profesionalId?: SortOrder
    unidadId?: SortOrder
  }

  export type CitaMinOrderByAggregateInput = {
    id?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    motivo?: SortOrder
    estado?: SortOrder
    canal?: SortOrder
    pacienteId?: SortOrder
    profesionalId?: SortOrder
    unidadId?: SortOrder
  }

  export type CitaSumOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
    profesionalId?: SortOrder
    unidadId?: SortOrder
  }

  export type EpisodioAtencionOrderByRelevanceInput = {
    fields: EpisodioAtencionOrderByRelevanceFieldEnum | EpisodioAtencionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type EpisodioAtencionCountOrderByAggregateInput = {
    id?: SortOrder
    motivo?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
    pacienteId?: SortOrder
  }

  export type EpisodioAtencionAvgOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
  }

  export type EpisodioAtencionMaxOrderByAggregateInput = {
    id?: SortOrder
    motivo?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
    pacienteId?: SortOrder
  }

  export type EpisodioAtencionMinOrderByAggregateInput = {
    id?: SortOrder
    motivo?: SortOrder
    fecha?: SortOrder
    estado?: SortOrder
    pacienteId?: SortOrder
  }

  export type EpisodioAtencionSumOrderByAggregateInput = {
    id?: SortOrder
    pacienteId?: SortOrder
  }

  export type EpisodioAtencionScalarRelationFilter = {
    is?: EpisodioAtencionWhereInput
    isNot?: EpisodioAtencionWhereInput
  }

  export type NotaClinicaOrderByRelevanceInput = {
    fields: NotaClinicaOrderByRelevanceFieldEnum | NotaClinicaOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type NotaClinicaCountOrderByAggregateInput = {
    id?: SortOrder
    subjetivo?: SortOrder
    objetivo?: SortOrder
    analisis?: SortOrder
    plan?: SortOrder
    fecha?: SortOrder
    episodioId?: SortOrder
    profesionalId?: SortOrder
  }

  export type NotaClinicaAvgOrderByAggregateInput = {
    id?: SortOrder
    episodioId?: SortOrder
    profesionalId?: SortOrder
  }

  export type NotaClinicaMaxOrderByAggregateInput = {
    id?: SortOrder
    subjetivo?: SortOrder
    objetivo?: SortOrder
    analisis?: SortOrder
    plan?: SortOrder
    fecha?: SortOrder
    episodioId?: SortOrder
    profesionalId?: SortOrder
  }

  export type NotaClinicaMinOrderByAggregateInput = {
    id?: SortOrder
    subjetivo?: SortOrder
    objetivo?: SortOrder
    analisis?: SortOrder
    plan?: SortOrder
    fecha?: SortOrder
    episodioId?: SortOrder
    profesionalId?: SortOrder
  }

  export type NotaClinicaSumOrderByAggregateInput = {
    id?: SortOrder
    episodioId?: SortOrder
    profesionalId?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CitaCreateNestedManyWithoutPacienteInput = {
    create?: XOR<CitaCreateWithoutPacienteInput, CitaUncheckedCreateWithoutPacienteInput> | CitaCreateWithoutPacienteInput[] | CitaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutPacienteInput | CitaCreateOrConnectWithoutPacienteInput[]
    createMany?: CitaCreateManyPacienteInputEnvelope
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
  }

  export type EpisodioAtencionCreateNestedManyWithoutPacienteInput = {
    create?: XOR<EpisodioAtencionCreateWithoutPacienteInput, EpisodioAtencionUncheckedCreateWithoutPacienteInput> | EpisodioAtencionCreateWithoutPacienteInput[] | EpisodioAtencionUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: EpisodioAtencionCreateOrConnectWithoutPacienteInput | EpisodioAtencionCreateOrConnectWithoutPacienteInput[]
    createMany?: EpisodioAtencionCreateManyPacienteInputEnvelope
    connect?: EpisodioAtencionWhereUniqueInput | EpisodioAtencionWhereUniqueInput[]
  }

  export type CitaUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: XOR<CitaCreateWithoutPacienteInput, CitaUncheckedCreateWithoutPacienteInput> | CitaCreateWithoutPacienteInput[] | CitaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutPacienteInput | CitaCreateOrConnectWithoutPacienteInput[]
    createMany?: CitaCreateManyPacienteInputEnvelope
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
  }

  export type EpisodioAtencionUncheckedCreateNestedManyWithoutPacienteInput = {
    create?: XOR<EpisodioAtencionCreateWithoutPacienteInput, EpisodioAtencionUncheckedCreateWithoutPacienteInput> | EpisodioAtencionCreateWithoutPacienteInput[] | EpisodioAtencionUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: EpisodioAtencionCreateOrConnectWithoutPacienteInput | EpisodioAtencionCreateOrConnectWithoutPacienteInput[]
    createMany?: EpisodioAtencionCreateManyPacienteInputEnvelope
    connect?: EpisodioAtencionWhereUniqueInput | EpisodioAtencionWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CitaUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<CitaCreateWithoutPacienteInput, CitaUncheckedCreateWithoutPacienteInput> | CitaCreateWithoutPacienteInput[] | CitaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutPacienteInput | CitaCreateOrConnectWithoutPacienteInput[]
    upsert?: CitaUpsertWithWhereUniqueWithoutPacienteInput | CitaUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: CitaCreateManyPacienteInputEnvelope
    set?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    disconnect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    delete?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    update?: CitaUpdateWithWhereUniqueWithoutPacienteInput | CitaUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: CitaUpdateManyWithWhereWithoutPacienteInput | CitaUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: CitaScalarWhereInput | CitaScalarWhereInput[]
  }

  export type EpisodioAtencionUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<EpisodioAtencionCreateWithoutPacienteInput, EpisodioAtencionUncheckedCreateWithoutPacienteInput> | EpisodioAtencionCreateWithoutPacienteInput[] | EpisodioAtencionUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: EpisodioAtencionCreateOrConnectWithoutPacienteInput | EpisodioAtencionCreateOrConnectWithoutPacienteInput[]
    upsert?: EpisodioAtencionUpsertWithWhereUniqueWithoutPacienteInput | EpisodioAtencionUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: EpisodioAtencionCreateManyPacienteInputEnvelope
    set?: EpisodioAtencionWhereUniqueInput | EpisodioAtencionWhereUniqueInput[]
    disconnect?: EpisodioAtencionWhereUniqueInput | EpisodioAtencionWhereUniqueInput[]
    delete?: EpisodioAtencionWhereUniqueInput | EpisodioAtencionWhereUniqueInput[]
    connect?: EpisodioAtencionWhereUniqueInput | EpisodioAtencionWhereUniqueInput[]
    update?: EpisodioAtencionUpdateWithWhereUniqueWithoutPacienteInput | EpisodioAtencionUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: EpisodioAtencionUpdateManyWithWhereWithoutPacienteInput | EpisodioAtencionUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: EpisodioAtencionScalarWhereInput | EpisodioAtencionScalarWhereInput[]
  }

  export type CitaUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<CitaCreateWithoutPacienteInput, CitaUncheckedCreateWithoutPacienteInput> | CitaCreateWithoutPacienteInput[] | CitaUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutPacienteInput | CitaCreateOrConnectWithoutPacienteInput[]
    upsert?: CitaUpsertWithWhereUniqueWithoutPacienteInput | CitaUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: CitaCreateManyPacienteInputEnvelope
    set?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    disconnect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    delete?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    update?: CitaUpdateWithWhereUniqueWithoutPacienteInput | CitaUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: CitaUpdateManyWithWhereWithoutPacienteInput | CitaUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: CitaScalarWhereInput | CitaScalarWhereInput[]
  }

  export type EpisodioAtencionUncheckedUpdateManyWithoutPacienteNestedInput = {
    create?: XOR<EpisodioAtencionCreateWithoutPacienteInput, EpisodioAtencionUncheckedCreateWithoutPacienteInput> | EpisodioAtencionCreateWithoutPacienteInput[] | EpisodioAtencionUncheckedCreateWithoutPacienteInput[]
    connectOrCreate?: EpisodioAtencionCreateOrConnectWithoutPacienteInput | EpisodioAtencionCreateOrConnectWithoutPacienteInput[]
    upsert?: EpisodioAtencionUpsertWithWhereUniqueWithoutPacienteInput | EpisodioAtencionUpsertWithWhereUniqueWithoutPacienteInput[]
    createMany?: EpisodioAtencionCreateManyPacienteInputEnvelope
    set?: EpisodioAtencionWhereUniqueInput | EpisodioAtencionWhereUniqueInput[]
    disconnect?: EpisodioAtencionWhereUniqueInput | EpisodioAtencionWhereUniqueInput[]
    delete?: EpisodioAtencionWhereUniqueInput | EpisodioAtencionWhereUniqueInput[]
    connect?: EpisodioAtencionWhereUniqueInput | EpisodioAtencionWhereUniqueInput[]
    update?: EpisodioAtencionUpdateWithWhereUniqueWithoutPacienteInput | EpisodioAtencionUpdateWithWhereUniqueWithoutPacienteInput[]
    updateMany?: EpisodioAtencionUpdateManyWithWhereWithoutPacienteInput | EpisodioAtencionUpdateManyWithWhereWithoutPacienteInput[]
    deleteMany?: EpisodioAtencionScalarWhereInput | EpisodioAtencionScalarWhereInput[]
  }

  export type BloqueAgendaCreateNestedManyWithoutProfesionalInput = {
    create?: XOR<BloqueAgendaCreateWithoutProfesionalInput, BloqueAgendaUncheckedCreateWithoutProfesionalInput> | BloqueAgendaCreateWithoutProfesionalInput[] | BloqueAgendaUncheckedCreateWithoutProfesionalInput[]
    connectOrCreate?: BloqueAgendaCreateOrConnectWithoutProfesionalInput | BloqueAgendaCreateOrConnectWithoutProfesionalInput[]
    createMany?: BloqueAgendaCreateManyProfesionalInputEnvelope
    connect?: BloqueAgendaWhereUniqueInput | BloqueAgendaWhereUniqueInput[]
  }

  export type CitaCreateNestedManyWithoutProfesionalInput = {
    create?: XOR<CitaCreateWithoutProfesionalInput, CitaUncheckedCreateWithoutProfesionalInput> | CitaCreateWithoutProfesionalInput[] | CitaUncheckedCreateWithoutProfesionalInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutProfesionalInput | CitaCreateOrConnectWithoutProfesionalInput[]
    createMany?: CitaCreateManyProfesionalInputEnvelope
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
  }

  export type NotaClinicaCreateNestedManyWithoutProfesionalInput = {
    create?: XOR<NotaClinicaCreateWithoutProfesionalInput, NotaClinicaUncheckedCreateWithoutProfesionalInput> | NotaClinicaCreateWithoutProfesionalInput[] | NotaClinicaUncheckedCreateWithoutProfesionalInput[]
    connectOrCreate?: NotaClinicaCreateOrConnectWithoutProfesionalInput | NotaClinicaCreateOrConnectWithoutProfesionalInput[]
    createMany?: NotaClinicaCreateManyProfesionalInputEnvelope
    connect?: NotaClinicaWhereUniqueInput | NotaClinicaWhereUniqueInput[]
  }

  export type BloqueAgendaUncheckedCreateNestedManyWithoutProfesionalInput = {
    create?: XOR<BloqueAgendaCreateWithoutProfesionalInput, BloqueAgendaUncheckedCreateWithoutProfesionalInput> | BloqueAgendaCreateWithoutProfesionalInput[] | BloqueAgendaUncheckedCreateWithoutProfesionalInput[]
    connectOrCreate?: BloqueAgendaCreateOrConnectWithoutProfesionalInput | BloqueAgendaCreateOrConnectWithoutProfesionalInput[]
    createMany?: BloqueAgendaCreateManyProfesionalInputEnvelope
    connect?: BloqueAgendaWhereUniqueInput | BloqueAgendaWhereUniqueInput[]
  }

  export type CitaUncheckedCreateNestedManyWithoutProfesionalInput = {
    create?: XOR<CitaCreateWithoutProfesionalInput, CitaUncheckedCreateWithoutProfesionalInput> | CitaCreateWithoutProfesionalInput[] | CitaUncheckedCreateWithoutProfesionalInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutProfesionalInput | CitaCreateOrConnectWithoutProfesionalInput[]
    createMany?: CitaCreateManyProfesionalInputEnvelope
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
  }

  export type NotaClinicaUncheckedCreateNestedManyWithoutProfesionalInput = {
    create?: XOR<NotaClinicaCreateWithoutProfesionalInput, NotaClinicaUncheckedCreateWithoutProfesionalInput> | NotaClinicaCreateWithoutProfesionalInput[] | NotaClinicaUncheckedCreateWithoutProfesionalInput[]
    connectOrCreate?: NotaClinicaCreateOrConnectWithoutProfesionalInput | NotaClinicaCreateOrConnectWithoutProfesionalInput[]
    createMany?: NotaClinicaCreateManyProfesionalInputEnvelope
    connect?: NotaClinicaWhereUniqueInput | NotaClinicaWhereUniqueInput[]
  }

  export type BloqueAgendaUpdateManyWithoutProfesionalNestedInput = {
    create?: XOR<BloqueAgendaCreateWithoutProfesionalInput, BloqueAgendaUncheckedCreateWithoutProfesionalInput> | BloqueAgendaCreateWithoutProfesionalInput[] | BloqueAgendaUncheckedCreateWithoutProfesionalInput[]
    connectOrCreate?: BloqueAgendaCreateOrConnectWithoutProfesionalInput | BloqueAgendaCreateOrConnectWithoutProfesionalInput[]
    upsert?: BloqueAgendaUpsertWithWhereUniqueWithoutProfesionalInput | BloqueAgendaUpsertWithWhereUniqueWithoutProfesionalInput[]
    createMany?: BloqueAgendaCreateManyProfesionalInputEnvelope
    set?: BloqueAgendaWhereUniqueInput | BloqueAgendaWhereUniqueInput[]
    disconnect?: BloqueAgendaWhereUniqueInput | BloqueAgendaWhereUniqueInput[]
    delete?: BloqueAgendaWhereUniqueInput | BloqueAgendaWhereUniqueInput[]
    connect?: BloqueAgendaWhereUniqueInput | BloqueAgendaWhereUniqueInput[]
    update?: BloqueAgendaUpdateWithWhereUniqueWithoutProfesionalInput | BloqueAgendaUpdateWithWhereUniqueWithoutProfesionalInput[]
    updateMany?: BloqueAgendaUpdateManyWithWhereWithoutProfesionalInput | BloqueAgendaUpdateManyWithWhereWithoutProfesionalInput[]
    deleteMany?: BloqueAgendaScalarWhereInput | BloqueAgendaScalarWhereInput[]
  }

  export type CitaUpdateManyWithoutProfesionalNestedInput = {
    create?: XOR<CitaCreateWithoutProfesionalInput, CitaUncheckedCreateWithoutProfesionalInput> | CitaCreateWithoutProfesionalInput[] | CitaUncheckedCreateWithoutProfesionalInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutProfesionalInput | CitaCreateOrConnectWithoutProfesionalInput[]
    upsert?: CitaUpsertWithWhereUniqueWithoutProfesionalInput | CitaUpsertWithWhereUniqueWithoutProfesionalInput[]
    createMany?: CitaCreateManyProfesionalInputEnvelope
    set?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    disconnect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    delete?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    update?: CitaUpdateWithWhereUniqueWithoutProfesionalInput | CitaUpdateWithWhereUniqueWithoutProfesionalInput[]
    updateMany?: CitaUpdateManyWithWhereWithoutProfesionalInput | CitaUpdateManyWithWhereWithoutProfesionalInput[]
    deleteMany?: CitaScalarWhereInput | CitaScalarWhereInput[]
  }

  export type NotaClinicaUpdateManyWithoutProfesionalNestedInput = {
    create?: XOR<NotaClinicaCreateWithoutProfesionalInput, NotaClinicaUncheckedCreateWithoutProfesionalInput> | NotaClinicaCreateWithoutProfesionalInput[] | NotaClinicaUncheckedCreateWithoutProfesionalInput[]
    connectOrCreate?: NotaClinicaCreateOrConnectWithoutProfesionalInput | NotaClinicaCreateOrConnectWithoutProfesionalInput[]
    upsert?: NotaClinicaUpsertWithWhereUniqueWithoutProfesionalInput | NotaClinicaUpsertWithWhereUniqueWithoutProfesionalInput[]
    createMany?: NotaClinicaCreateManyProfesionalInputEnvelope
    set?: NotaClinicaWhereUniqueInput | NotaClinicaWhereUniqueInput[]
    disconnect?: NotaClinicaWhereUniqueInput | NotaClinicaWhereUniqueInput[]
    delete?: NotaClinicaWhereUniqueInput | NotaClinicaWhereUniqueInput[]
    connect?: NotaClinicaWhereUniqueInput | NotaClinicaWhereUniqueInput[]
    update?: NotaClinicaUpdateWithWhereUniqueWithoutProfesionalInput | NotaClinicaUpdateWithWhereUniqueWithoutProfesionalInput[]
    updateMany?: NotaClinicaUpdateManyWithWhereWithoutProfesionalInput | NotaClinicaUpdateManyWithWhereWithoutProfesionalInput[]
    deleteMany?: NotaClinicaScalarWhereInput | NotaClinicaScalarWhereInput[]
  }

  export type BloqueAgendaUncheckedUpdateManyWithoutProfesionalNestedInput = {
    create?: XOR<BloqueAgendaCreateWithoutProfesionalInput, BloqueAgendaUncheckedCreateWithoutProfesionalInput> | BloqueAgendaCreateWithoutProfesionalInput[] | BloqueAgendaUncheckedCreateWithoutProfesionalInput[]
    connectOrCreate?: BloqueAgendaCreateOrConnectWithoutProfesionalInput | BloqueAgendaCreateOrConnectWithoutProfesionalInput[]
    upsert?: BloqueAgendaUpsertWithWhereUniqueWithoutProfesionalInput | BloqueAgendaUpsertWithWhereUniqueWithoutProfesionalInput[]
    createMany?: BloqueAgendaCreateManyProfesionalInputEnvelope
    set?: BloqueAgendaWhereUniqueInput | BloqueAgendaWhereUniqueInput[]
    disconnect?: BloqueAgendaWhereUniqueInput | BloqueAgendaWhereUniqueInput[]
    delete?: BloqueAgendaWhereUniqueInput | BloqueAgendaWhereUniqueInput[]
    connect?: BloqueAgendaWhereUniqueInput | BloqueAgendaWhereUniqueInput[]
    update?: BloqueAgendaUpdateWithWhereUniqueWithoutProfesionalInput | BloqueAgendaUpdateWithWhereUniqueWithoutProfesionalInput[]
    updateMany?: BloqueAgendaUpdateManyWithWhereWithoutProfesionalInput | BloqueAgendaUpdateManyWithWhereWithoutProfesionalInput[]
    deleteMany?: BloqueAgendaScalarWhereInput | BloqueAgendaScalarWhereInput[]
  }

  export type CitaUncheckedUpdateManyWithoutProfesionalNestedInput = {
    create?: XOR<CitaCreateWithoutProfesionalInput, CitaUncheckedCreateWithoutProfesionalInput> | CitaCreateWithoutProfesionalInput[] | CitaUncheckedCreateWithoutProfesionalInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutProfesionalInput | CitaCreateOrConnectWithoutProfesionalInput[]
    upsert?: CitaUpsertWithWhereUniqueWithoutProfesionalInput | CitaUpsertWithWhereUniqueWithoutProfesionalInput[]
    createMany?: CitaCreateManyProfesionalInputEnvelope
    set?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    disconnect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    delete?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    update?: CitaUpdateWithWhereUniqueWithoutProfesionalInput | CitaUpdateWithWhereUniqueWithoutProfesionalInput[]
    updateMany?: CitaUpdateManyWithWhereWithoutProfesionalInput | CitaUpdateManyWithWhereWithoutProfesionalInput[]
    deleteMany?: CitaScalarWhereInput | CitaScalarWhereInput[]
  }

  export type NotaClinicaUncheckedUpdateManyWithoutProfesionalNestedInput = {
    create?: XOR<NotaClinicaCreateWithoutProfesionalInput, NotaClinicaUncheckedCreateWithoutProfesionalInput> | NotaClinicaCreateWithoutProfesionalInput[] | NotaClinicaUncheckedCreateWithoutProfesionalInput[]
    connectOrCreate?: NotaClinicaCreateOrConnectWithoutProfesionalInput | NotaClinicaCreateOrConnectWithoutProfesionalInput[]
    upsert?: NotaClinicaUpsertWithWhereUniqueWithoutProfesionalInput | NotaClinicaUpsertWithWhereUniqueWithoutProfesionalInput[]
    createMany?: NotaClinicaCreateManyProfesionalInputEnvelope
    set?: NotaClinicaWhereUniqueInput | NotaClinicaWhereUniqueInput[]
    disconnect?: NotaClinicaWhereUniqueInput | NotaClinicaWhereUniqueInput[]
    delete?: NotaClinicaWhereUniqueInput | NotaClinicaWhereUniqueInput[]
    connect?: NotaClinicaWhereUniqueInput | NotaClinicaWhereUniqueInput[]
    update?: NotaClinicaUpdateWithWhereUniqueWithoutProfesionalInput | NotaClinicaUpdateWithWhereUniqueWithoutProfesionalInput[]
    updateMany?: NotaClinicaUpdateManyWithWhereWithoutProfesionalInput | NotaClinicaUpdateManyWithWhereWithoutProfesionalInput[]
    deleteMany?: NotaClinicaScalarWhereInput | NotaClinicaScalarWhereInput[]
  }

  export type BloqueAgendaCreateNestedManyWithoutUnidadInput = {
    create?: XOR<BloqueAgendaCreateWithoutUnidadInput, BloqueAgendaUncheckedCreateWithoutUnidadInput> | BloqueAgendaCreateWithoutUnidadInput[] | BloqueAgendaUncheckedCreateWithoutUnidadInput[]
    connectOrCreate?: BloqueAgendaCreateOrConnectWithoutUnidadInput | BloqueAgendaCreateOrConnectWithoutUnidadInput[]
    createMany?: BloqueAgendaCreateManyUnidadInputEnvelope
    connect?: BloqueAgendaWhereUniqueInput | BloqueAgendaWhereUniqueInput[]
  }

  export type CitaCreateNestedManyWithoutUnidadInput = {
    create?: XOR<CitaCreateWithoutUnidadInput, CitaUncheckedCreateWithoutUnidadInput> | CitaCreateWithoutUnidadInput[] | CitaUncheckedCreateWithoutUnidadInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutUnidadInput | CitaCreateOrConnectWithoutUnidadInput[]
    createMany?: CitaCreateManyUnidadInputEnvelope
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
  }

  export type BloqueAgendaUncheckedCreateNestedManyWithoutUnidadInput = {
    create?: XOR<BloqueAgendaCreateWithoutUnidadInput, BloqueAgendaUncheckedCreateWithoutUnidadInput> | BloqueAgendaCreateWithoutUnidadInput[] | BloqueAgendaUncheckedCreateWithoutUnidadInput[]
    connectOrCreate?: BloqueAgendaCreateOrConnectWithoutUnidadInput | BloqueAgendaCreateOrConnectWithoutUnidadInput[]
    createMany?: BloqueAgendaCreateManyUnidadInputEnvelope
    connect?: BloqueAgendaWhereUniqueInput | BloqueAgendaWhereUniqueInput[]
  }

  export type CitaUncheckedCreateNestedManyWithoutUnidadInput = {
    create?: XOR<CitaCreateWithoutUnidadInput, CitaUncheckedCreateWithoutUnidadInput> | CitaCreateWithoutUnidadInput[] | CitaUncheckedCreateWithoutUnidadInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutUnidadInput | CitaCreateOrConnectWithoutUnidadInput[]
    createMany?: CitaCreateManyUnidadInputEnvelope
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
  }

  export type BloqueAgendaUpdateManyWithoutUnidadNestedInput = {
    create?: XOR<BloqueAgendaCreateWithoutUnidadInput, BloqueAgendaUncheckedCreateWithoutUnidadInput> | BloqueAgendaCreateWithoutUnidadInput[] | BloqueAgendaUncheckedCreateWithoutUnidadInput[]
    connectOrCreate?: BloqueAgendaCreateOrConnectWithoutUnidadInput | BloqueAgendaCreateOrConnectWithoutUnidadInput[]
    upsert?: BloqueAgendaUpsertWithWhereUniqueWithoutUnidadInput | BloqueAgendaUpsertWithWhereUniqueWithoutUnidadInput[]
    createMany?: BloqueAgendaCreateManyUnidadInputEnvelope
    set?: BloqueAgendaWhereUniqueInput | BloqueAgendaWhereUniqueInput[]
    disconnect?: BloqueAgendaWhereUniqueInput | BloqueAgendaWhereUniqueInput[]
    delete?: BloqueAgendaWhereUniqueInput | BloqueAgendaWhereUniqueInput[]
    connect?: BloqueAgendaWhereUniqueInput | BloqueAgendaWhereUniqueInput[]
    update?: BloqueAgendaUpdateWithWhereUniqueWithoutUnidadInput | BloqueAgendaUpdateWithWhereUniqueWithoutUnidadInput[]
    updateMany?: BloqueAgendaUpdateManyWithWhereWithoutUnidadInput | BloqueAgendaUpdateManyWithWhereWithoutUnidadInput[]
    deleteMany?: BloqueAgendaScalarWhereInput | BloqueAgendaScalarWhereInput[]
  }

  export type CitaUpdateManyWithoutUnidadNestedInput = {
    create?: XOR<CitaCreateWithoutUnidadInput, CitaUncheckedCreateWithoutUnidadInput> | CitaCreateWithoutUnidadInput[] | CitaUncheckedCreateWithoutUnidadInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutUnidadInput | CitaCreateOrConnectWithoutUnidadInput[]
    upsert?: CitaUpsertWithWhereUniqueWithoutUnidadInput | CitaUpsertWithWhereUniqueWithoutUnidadInput[]
    createMany?: CitaCreateManyUnidadInputEnvelope
    set?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    disconnect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    delete?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    update?: CitaUpdateWithWhereUniqueWithoutUnidadInput | CitaUpdateWithWhereUniqueWithoutUnidadInput[]
    updateMany?: CitaUpdateManyWithWhereWithoutUnidadInput | CitaUpdateManyWithWhereWithoutUnidadInput[]
    deleteMany?: CitaScalarWhereInput | CitaScalarWhereInput[]
  }

  export type BloqueAgendaUncheckedUpdateManyWithoutUnidadNestedInput = {
    create?: XOR<BloqueAgendaCreateWithoutUnidadInput, BloqueAgendaUncheckedCreateWithoutUnidadInput> | BloqueAgendaCreateWithoutUnidadInput[] | BloqueAgendaUncheckedCreateWithoutUnidadInput[]
    connectOrCreate?: BloqueAgendaCreateOrConnectWithoutUnidadInput | BloqueAgendaCreateOrConnectWithoutUnidadInput[]
    upsert?: BloqueAgendaUpsertWithWhereUniqueWithoutUnidadInput | BloqueAgendaUpsertWithWhereUniqueWithoutUnidadInput[]
    createMany?: BloqueAgendaCreateManyUnidadInputEnvelope
    set?: BloqueAgendaWhereUniqueInput | BloqueAgendaWhereUniqueInput[]
    disconnect?: BloqueAgendaWhereUniqueInput | BloqueAgendaWhereUniqueInput[]
    delete?: BloqueAgendaWhereUniqueInput | BloqueAgendaWhereUniqueInput[]
    connect?: BloqueAgendaWhereUniqueInput | BloqueAgendaWhereUniqueInput[]
    update?: BloqueAgendaUpdateWithWhereUniqueWithoutUnidadInput | BloqueAgendaUpdateWithWhereUniqueWithoutUnidadInput[]
    updateMany?: BloqueAgendaUpdateManyWithWhereWithoutUnidadInput | BloqueAgendaUpdateManyWithWhereWithoutUnidadInput[]
    deleteMany?: BloqueAgendaScalarWhereInput | BloqueAgendaScalarWhereInput[]
  }

  export type CitaUncheckedUpdateManyWithoutUnidadNestedInput = {
    create?: XOR<CitaCreateWithoutUnidadInput, CitaUncheckedCreateWithoutUnidadInput> | CitaCreateWithoutUnidadInput[] | CitaUncheckedCreateWithoutUnidadInput[]
    connectOrCreate?: CitaCreateOrConnectWithoutUnidadInput | CitaCreateOrConnectWithoutUnidadInput[]
    upsert?: CitaUpsertWithWhereUniqueWithoutUnidadInput | CitaUpsertWithWhereUniqueWithoutUnidadInput[]
    createMany?: CitaCreateManyUnidadInputEnvelope
    set?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    disconnect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    delete?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    connect?: CitaWhereUniqueInput | CitaWhereUniqueInput[]
    update?: CitaUpdateWithWhereUniqueWithoutUnidadInput | CitaUpdateWithWhereUniqueWithoutUnidadInput[]
    updateMany?: CitaUpdateManyWithWhereWithoutUnidadInput | CitaUpdateManyWithWhereWithoutUnidadInput[]
    deleteMany?: CitaScalarWhereInput | CitaScalarWhereInput[]
  }

  export type ProfesionalCreateNestedOneWithoutBloquesAgendaInput = {
    create?: XOR<ProfesionalCreateWithoutBloquesAgendaInput, ProfesionalUncheckedCreateWithoutBloquesAgendaInput>
    connectOrCreate?: ProfesionalCreateOrConnectWithoutBloquesAgendaInput
    connect?: ProfesionalWhereUniqueInput
  }

  export type UnidadAtencionCreateNestedOneWithoutBloquesAgendaInput = {
    create?: XOR<UnidadAtencionCreateWithoutBloquesAgendaInput, UnidadAtencionUncheckedCreateWithoutBloquesAgendaInput>
    connectOrCreate?: UnidadAtencionCreateOrConnectWithoutBloquesAgendaInput
    connect?: UnidadAtencionWhereUniqueInput
  }

  export type ProfesionalUpdateOneRequiredWithoutBloquesAgendaNestedInput = {
    create?: XOR<ProfesionalCreateWithoutBloquesAgendaInput, ProfesionalUncheckedCreateWithoutBloquesAgendaInput>
    connectOrCreate?: ProfesionalCreateOrConnectWithoutBloquesAgendaInput
    upsert?: ProfesionalUpsertWithoutBloquesAgendaInput
    connect?: ProfesionalWhereUniqueInput
    update?: XOR<XOR<ProfesionalUpdateToOneWithWhereWithoutBloquesAgendaInput, ProfesionalUpdateWithoutBloquesAgendaInput>, ProfesionalUncheckedUpdateWithoutBloquesAgendaInput>
  }

  export type UnidadAtencionUpdateOneRequiredWithoutBloquesAgendaNestedInput = {
    create?: XOR<UnidadAtencionCreateWithoutBloquesAgendaInput, UnidadAtencionUncheckedCreateWithoutBloquesAgendaInput>
    connectOrCreate?: UnidadAtencionCreateOrConnectWithoutBloquesAgendaInput
    upsert?: UnidadAtencionUpsertWithoutBloquesAgendaInput
    connect?: UnidadAtencionWhereUniqueInput
    update?: XOR<XOR<UnidadAtencionUpdateToOneWithWhereWithoutBloquesAgendaInput, UnidadAtencionUpdateWithoutBloquesAgendaInput>, UnidadAtencionUncheckedUpdateWithoutBloquesAgendaInput>
  }

  export type PacienteCreateNestedOneWithoutCitasInput = {
    create?: XOR<PacienteCreateWithoutCitasInput, PacienteUncheckedCreateWithoutCitasInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutCitasInput
    connect?: PacienteWhereUniqueInput
  }

  export type ProfesionalCreateNestedOneWithoutCitasInput = {
    create?: XOR<ProfesionalCreateWithoutCitasInput, ProfesionalUncheckedCreateWithoutCitasInput>
    connectOrCreate?: ProfesionalCreateOrConnectWithoutCitasInput
    connect?: ProfesionalWhereUniqueInput
  }

  export type UnidadAtencionCreateNestedOneWithoutCitasInput = {
    create?: XOR<UnidadAtencionCreateWithoutCitasInput, UnidadAtencionUncheckedCreateWithoutCitasInput>
    connectOrCreate?: UnidadAtencionCreateOrConnectWithoutCitasInput
    connect?: UnidadAtencionWhereUniqueInput
  }

  export type PacienteUpdateOneRequiredWithoutCitasNestedInput = {
    create?: XOR<PacienteCreateWithoutCitasInput, PacienteUncheckedCreateWithoutCitasInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutCitasInput
    upsert?: PacienteUpsertWithoutCitasInput
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutCitasInput, PacienteUpdateWithoutCitasInput>, PacienteUncheckedUpdateWithoutCitasInput>
  }

  export type ProfesionalUpdateOneRequiredWithoutCitasNestedInput = {
    create?: XOR<ProfesionalCreateWithoutCitasInput, ProfesionalUncheckedCreateWithoutCitasInput>
    connectOrCreate?: ProfesionalCreateOrConnectWithoutCitasInput
    upsert?: ProfesionalUpsertWithoutCitasInput
    connect?: ProfesionalWhereUniqueInput
    update?: XOR<XOR<ProfesionalUpdateToOneWithWhereWithoutCitasInput, ProfesionalUpdateWithoutCitasInput>, ProfesionalUncheckedUpdateWithoutCitasInput>
  }

  export type UnidadAtencionUpdateOneRequiredWithoutCitasNestedInput = {
    create?: XOR<UnidadAtencionCreateWithoutCitasInput, UnidadAtencionUncheckedCreateWithoutCitasInput>
    connectOrCreate?: UnidadAtencionCreateOrConnectWithoutCitasInput
    upsert?: UnidadAtencionUpsertWithoutCitasInput
    connect?: UnidadAtencionWhereUniqueInput
    update?: XOR<XOR<UnidadAtencionUpdateToOneWithWhereWithoutCitasInput, UnidadAtencionUpdateWithoutCitasInput>, UnidadAtencionUncheckedUpdateWithoutCitasInput>
  }

  export type PacienteCreateNestedOneWithoutEpisodiosInput = {
    create?: XOR<PacienteCreateWithoutEpisodiosInput, PacienteUncheckedCreateWithoutEpisodiosInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutEpisodiosInput
    connect?: PacienteWhereUniqueInput
  }

  export type NotaClinicaCreateNestedManyWithoutEpisodioInput = {
    create?: XOR<NotaClinicaCreateWithoutEpisodioInput, NotaClinicaUncheckedCreateWithoutEpisodioInput> | NotaClinicaCreateWithoutEpisodioInput[] | NotaClinicaUncheckedCreateWithoutEpisodioInput[]
    connectOrCreate?: NotaClinicaCreateOrConnectWithoutEpisodioInput | NotaClinicaCreateOrConnectWithoutEpisodioInput[]
    createMany?: NotaClinicaCreateManyEpisodioInputEnvelope
    connect?: NotaClinicaWhereUniqueInput | NotaClinicaWhereUniqueInput[]
  }

  export type NotaClinicaUncheckedCreateNestedManyWithoutEpisodioInput = {
    create?: XOR<NotaClinicaCreateWithoutEpisodioInput, NotaClinicaUncheckedCreateWithoutEpisodioInput> | NotaClinicaCreateWithoutEpisodioInput[] | NotaClinicaUncheckedCreateWithoutEpisodioInput[]
    connectOrCreate?: NotaClinicaCreateOrConnectWithoutEpisodioInput | NotaClinicaCreateOrConnectWithoutEpisodioInput[]
    createMany?: NotaClinicaCreateManyEpisodioInputEnvelope
    connect?: NotaClinicaWhereUniqueInput | NotaClinicaWhereUniqueInput[]
  }

  export type PacienteUpdateOneRequiredWithoutEpisodiosNestedInput = {
    create?: XOR<PacienteCreateWithoutEpisodiosInput, PacienteUncheckedCreateWithoutEpisodiosInput>
    connectOrCreate?: PacienteCreateOrConnectWithoutEpisodiosInput
    upsert?: PacienteUpsertWithoutEpisodiosInput
    connect?: PacienteWhereUniqueInput
    update?: XOR<XOR<PacienteUpdateToOneWithWhereWithoutEpisodiosInput, PacienteUpdateWithoutEpisodiosInput>, PacienteUncheckedUpdateWithoutEpisodiosInput>
  }

  export type NotaClinicaUpdateManyWithoutEpisodioNestedInput = {
    create?: XOR<NotaClinicaCreateWithoutEpisodioInput, NotaClinicaUncheckedCreateWithoutEpisodioInput> | NotaClinicaCreateWithoutEpisodioInput[] | NotaClinicaUncheckedCreateWithoutEpisodioInput[]
    connectOrCreate?: NotaClinicaCreateOrConnectWithoutEpisodioInput | NotaClinicaCreateOrConnectWithoutEpisodioInput[]
    upsert?: NotaClinicaUpsertWithWhereUniqueWithoutEpisodioInput | NotaClinicaUpsertWithWhereUniqueWithoutEpisodioInput[]
    createMany?: NotaClinicaCreateManyEpisodioInputEnvelope
    set?: NotaClinicaWhereUniqueInput | NotaClinicaWhereUniqueInput[]
    disconnect?: NotaClinicaWhereUniqueInput | NotaClinicaWhereUniqueInput[]
    delete?: NotaClinicaWhereUniqueInput | NotaClinicaWhereUniqueInput[]
    connect?: NotaClinicaWhereUniqueInput | NotaClinicaWhereUniqueInput[]
    update?: NotaClinicaUpdateWithWhereUniqueWithoutEpisodioInput | NotaClinicaUpdateWithWhereUniqueWithoutEpisodioInput[]
    updateMany?: NotaClinicaUpdateManyWithWhereWithoutEpisodioInput | NotaClinicaUpdateManyWithWhereWithoutEpisodioInput[]
    deleteMany?: NotaClinicaScalarWhereInput | NotaClinicaScalarWhereInput[]
  }

  export type NotaClinicaUncheckedUpdateManyWithoutEpisodioNestedInput = {
    create?: XOR<NotaClinicaCreateWithoutEpisodioInput, NotaClinicaUncheckedCreateWithoutEpisodioInput> | NotaClinicaCreateWithoutEpisodioInput[] | NotaClinicaUncheckedCreateWithoutEpisodioInput[]
    connectOrCreate?: NotaClinicaCreateOrConnectWithoutEpisodioInput | NotaClinicaCreateOrConnectWithoutEpisodioInput[]
    upsert?: NotaClinicaUpsertWithWhereUniqueWithoutEpisodioInput | NotaClinicaUpsertWithWhereUniqueWithoutEpisodioInput[]
    createMany?: NotaClinicaCreateManyEpisodioInputEnvelope
    set?: NotaClinicaWhereUniqueInput | NotaClinicaWhereUniqueInput[]
    disconnect?: NotaClinicaWhereUniqueInput | NotaClinicaWhereUniqueInput[]
    delete?: NotaClinicaWhereUniqueInput | NotaClinicaWhereUniqueInput[]
    connect?: NotaClinicaWhereUniqueInput | NotaClinicaWhereUniqueInput[]
    update?: NotaClinicaUpdateWithWhereUniqueWithoutEpisodioInput | NotaClinicaUpdateWithWhereUniqueWithoutEpisodioInput[]
    updateMany?: NotaClinicaUpdateManyWithWhereWithoutEpisodioInput | NotaClinicaUpdateManyWithWhereWithoutEpisodioInput[]
    deleteMany?: NotaClinicaScalarWhereInput | NotaClinicaScalarWhereInput[]
  }

  export type EpisodioAtencionCreateNestedOneWithoutNotasInput = {
    create?: XOR<EpisodioAtencionCreateWithoutNotasInput, EpisodioAtencionUncheckedCreateWithoutNotasInput>
    connectOrCreate?: EpisodioAtencionCreateOrConnectWithoutNotasInput
    connect?: EpisodioAtencionWhereUniqueInput
  }

  export type ProfesionalCreateNestedOneWithoutNotasInput = {
    create?: XOR<ProfesionalCreateWithoutNotasInput, ProfesionalUncheckedCreateWithoutNotasInput>
    connectOrCreate?: ProfesionalCreateOrConnectWithoutNotasInput
    connect?: ProfesionalWhereUniqueInput
  }

  export type EpisodioAtencionUpdateOneRequiredWithoutNotasNestedInput = {
    create?: XOR<EpisodioAtencionCreateWithoutNotasInput, EpisodioAtencionUncheckedCreateWithoutNotasInput>
    connectOrCreate?: EpisodioAtencionCreateOrConnectWithoutNotasInput
    upsert?: EpisodioAtencionUpsertWithoutNotasInput
    connect?: EpisodioAtencionWhereUniqueInput
    update?: XOR<XOR<EpisodioAtencionUpdateToOneWithWhereWithoutNotasInput, EpisodioAtencionUpdateWithoutNotasInput>, EpisodioAtencionUncheckedUpdateWithoutNotasInput>
  }

  export type ProfesionalUpdateOneRequiredWithoutNotasNestedInput = {
    create?: XOR<ProfesionalCreateWithoutNotasInput, ProfesionalUncheckedCreateWithoutNotasInput>
    connectOrCreate?: ProfesionalCreateOrConnectWithoutNotasInput
    upsert?: ProfesionalUpsertWithoutNotasInput
    connect?: ProfesionalWhereUniqueInput
    update?: XOR<XOR<ProfesionalUpdateToOneWithWhereWithoutNotasInput, ProfesionalUpdateWithoutNotasInput>, ProfesionalUncheckedUpdateWithoutNotasInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type CitaCreateWithoutPacienteInput = {
    fechaInicio: Date | string
    fechaFin: Date | string
    motivo: string
    estado: string
    canal: string
    profesional: ProfesionalCreateNestedOneWithoutCitasInput
    unidad: UnidadAtencionCreateNestedOneWithoutCitasInput
  }

  export type CitaUncheckedCreateWithoutPacienteInput = {
    id?: number
    fechaInicio: Date | string
    fechaFin: Date | string
    motivo: string
    estado: string
    canal: string
    profesionalId: number
    unidadId: number
  }

  export type CitaCreateOrConnectWithoutPacienteInput = {
    where: CitaWhereUniqueInput
    create: XOR<CitaCreateWithoutPacienteInput, CitaUncheckedCreateWithoutPacienteInput>
  }

  export type CitaCreateManyPacienteInputEnvelope = {
    data: CitaCreateManyPacienteInput | CitaCreateManyPacienteInput[]
    skipDuplicates?: boolean
  }

  export type EpisodioAtencionCreateWithoutPacienteInput = {
    motivo: string
    fecha?: Date | string
    estado: string
    notas?: NotaClinicaCreateNestedManyWithoutEpisodioInput
  }

  export type EpisodioAtencionUncheckedCreateWithoutPacienteInput = {
    id?: number
    motivo: string
    fecha?: Date | string
    estado: string
    notas?: NotaClinicaUncheckedCreateNestedManyWithoutEpisodioInput
  }

  export type EpisodioAtencionCreateOrConnectWithoutPacienteInput = {
    where: EpisodioAtencionWhereUniqueInput
    create: XOR<EpisodioAtencionCreateWithoutPacienteInput, EpisodioAtencionUncheckedCreateWithoutPacienteInput>
  }

  export type EpisodioAtencionCreateManyPacienteInputEnvelope = {
    data: EpisodioAtencionCreateManyPacienteInput | EpisodioAtencionCreateManyPacienteInput[]
    skipDuplicates?: boolean
  }

  export type CitaUpsertWithWhereUniqueWithoutPacienteInput = {
    where: CitaWhereUniqueInput
    update: XOR<CitaUpdateWithoutPacienteInput, CitaUncheckedUpdateWithoutPacienteInput>
    create: XOR<CitaCreateWithoutPacienteInput, CitaUncheckedCreateWithoutPacienteInput>
  }

  export type CitaUpdateWithWhereUniqueWithoutPacienteInput = {
    where: CitaWhereUniqueInput
    data: XOR<CitaUpdateWithoutPacienteInput, CitaUncheckedUpdateWithoutPacienteInput>
  }

  export type CitaUpdateManyWithWhereWithoutPacienteInput = {
    where: CitaScalarWhereInput
    data: XOR<CitaUpdateManyMutationInput, CitaUncheckedUpdateManyWithoutPacienteInput>
  }

  export type CitaScalarWhereInput = {
    AND?: CitaScalarWhereInput | CitaScalarWhereInput[]
    OR?: CitaScalarWhereInput[]
    NOT?: CitaScalarWhereInput | CitaScalarWhereInput[]
    id?: IntFilter<"Cita"> | number
    fechaInicio?: DateTimeFilter<"Cita"> | Date | string
    fechaFin?: DateTimeFilter<"Cita"> | Date | string
    motivo?: StringFilter<"Cita"> | string
    estado?: StringFilter<"Cita"> | string
    canal?: StringFilter<"Cita"> | string
    pacienteId?: IntFilter<"Cita"> | number
    profesionalId?: IntFilter<"Cita"> | number
    unidadId?: IntFilter<"Cita"> | number
  }

  export type EpisodioAtencionUpsertWithWhereUniqueWithoutPacienteInput = {
    where: EpisodioAtencionWhereUniqueInput
    update: XOR<EpisodioAtencionUpdateWithoutPacienteInput, EpisodioAtencionUncheckedUpdateWithoutPacienteInput>
    create: XOR<EpisodioAtencionCreateWithoutPacienteInput, EpisodioAtencionUncheckedCreateWithoutPacienteInput>
  }

  export type EpisodioAtencionUpdateWithWhereUniqueWithoutPacienteInput = {
    where: EpisodioAtencionWhereUniqueInput
    data: XOR<EpisodioAtencionUpdateWithoutPacienteInput, EpisodioAtencionUncheckedUpdateWithoutPacienteInput>
  }

  export type EpisodioAtencionUpdateManyWithWhereWithoutPacienteInput = {
    where: EpisodioAtencionScalarWhereInput
    data: XOR<EpisodioAtencionUpdateManyMutationInput, EpisodioAtencionUncheckedUpdateManyWithoutPacienteInput>
  }

  export type EpisodioAtencionScalarWhereInput = {
    AND?: EpisodioAtencionScalarWhereInput | EpisodioAtencionScalarWhereInput[]
    OR?: EpisodioAtencionScalarWhereInput[]
    NOT?: EpisodioAtencionScalarWhereInput | EpisodioAtencionScalarWhereInput[]
    id?: IntFilter<"EpisodioAtencion"> | number
    motivo?: StringFilter<"EpisodioAtencion"> | string
    fecha?: DateTimeFilter<"EpisodioAtencion"> | Date | string
    estado?: StringFilter<"EpisodioAtencion"> | string
    pacienteId?: IntFilter<"EpisodioAtencion"> | number
  }

  export type BloqueAgendaCreateWithoutProfesionalInput = {
    fechaInicio: Date | string
    fechaFin: Date | string
    capacidad?: number
    estado: string
    unidad: UnidadAtencionCreateNestedOneWithoutBloquesAgendaInput
  }

  export type BloqueAgendaUncheckedCreateWithoutProfesionalInput = {
    id?: number
    fechaInicio: Date | string
    fechaFin: Date | string
    capacidad?: number
    estado: string
    unidadId: number
  }

  export type BloqueAgendaCreateOrConnectWithoutProfesionalInput = {
    where: BloqueAgendaWhereUniqueInput
    create: XOR<BloqueAgendaCreateWithoutProfesionalInput, BloqueAgendaUncheckedCreateWithoutProfesionalInput>
  }

  export type BloqueAgendaCreateManyProfesionalInputEnvelope = {
    data: BloqueAgendaCreateManyProfesionalInput | BloqueAgendaCreateManyProfesionalInput[]
    skipDuplicates?: boolean
  }

  export type CitaCreateWithoutProfesionalInput = {
    fechaInicio: Date | string
    fechaFin: Date | string
    motivo: string
    estado: string
    canal: string
    paciente: PacienteCreateNestedOneWithoutCitasInput
    unidad: UnidadAtencionCreateNestedOneWithoutCitasInput
  }

  export type CitaUncheckedCreateWithoutProfesionalInput = {
    id?: number
    fechaInicio: Date | string
    fechaFin: Date | string
    motivo: string
    estado: string
    canal: string
    pacienteId: number
    unidadId: number
  }

  export type CitaCreateOrConnectWithoutProfesionalInput = {
    where: CitaWhereUniqueInput
    create: XOR<CitaCreateWithoutProfesionalInput, CitaUncheckedCreateWithoutProfesionalInput>
  }

  export type CitaCreateManyProfesionalInputEnvelope = {
    data: CitaCreateManyProfesionalInput | CitaCreateManyProfesionalInput[]
    skipDuplicates?: boolean
  }

  export type NotaClinicaCreateWithoutProfesionalInput = {
    subjetivo: string
    objetivo: string
    analisis: string
    plan: string
    fecha?: Date | string
    episodio: EpisodioAtencionCreateNestedOneWithoutNotasInput
  }

  export type NotaClinicaUncheckedCreateWithoutProfesionalInput = {
    id?: number
    subjetivo: string
    objetivo: string
    analisis: string
    plan: string
    fecha?: Date | string
    episodioId: number
  }

  export type NotaClinicaCreateOrConnectWithoutProfesionalInput = {
    where: NotaClinicaWhereUniqueInput
    create: XOR<NotaClinicaCreateWithoutProfesionalInput, NotaClinicaUncheckedCreateWithoutProfesionalInput>
  }

  export type NotaClinicaCreateManyProfesionalInputEnvelope = {
    data: NotaClinicaCreateManyProfesionalInput | NotaClinicaCreateManyProfesionalInput[]
    skipDuplicates?: boolean
  }

  export type BloqueAgendaUpsertWithWhereUniqueWithoutProfesionalInput = {
    where: BloqueAgendaWhereUniqueInput
    update: XOR<BloqueAgendaUpdateWithoutProfesionalInput, BloqueAgendaUncheckedUpdateWithoutProfesionalInput>
    create: XOR<BloqueAgendaCreateWithoutProfesionalInput, BloqueAgendaUncheckedCreateWithoutProfesionalInput>
  }

  export type BloqueAgendaUpdateWithWhereUniqueWithoutProfesionalInput = {
    where: BloqueAgendaWhereUniqueInput
    data: XOR<BloqueAgendaUpdateWithoutProfesionalInput, BloqueAgendaUncheckedUpdateWithoutProfesionalInput>
  }

  export type BloqueAgendaUpdateManyWithWhereWithoutProfesionalInput = {
    where: BloqueAgendaScalarWhereInput
    data: XOR<BloqueAgendaUpdateManyMutationInput, BloqueAgendaUncheckedUpdateManyWithoutProfesionalInput>
  }

  export type BloqueAgendaScalarWhereInput = {
    AND?: BloqueAgendaScalarWhereInput | BloqueAgendaScalarWhereInput[]
    OR?: BloqueAgendaScalarWhereInput[]
    NOT?: BloqueAgendaScalarWhereInput | BloqueAgendaScalarWhereInput[]
    id?: IntFilter<"BloqueAgenda"> | number
    fechaInicio?: DateTimeFilter<"BloqueAgenda"> | Date | string
    fechaFin?: DateTimeFilter<"BloqueAgenda"> | Date | string
    capacidad?: IntFilter<"BloqueAgenda"> | number
    estado?: StringFilter<"BloqueAgenda"> | string
    profesionalId?: IntFilter<"BloqueAgenda"> | number
    unidadId?: IntFilter<"BloqueAgenda"> | number
  }

  export type CitaUpsertWithWhereUniqueWithoutProfesionalInput = {
    where: CitaWhereUniqueInput
    update: XOR<CitaUpdateWithoutProfesionalInput, CitaUncheckedUpdateWithoutProfesionalInput>
    create: XOR<CitaCreateWithoutProfesionalInput, CitaUncheckedCreateWithoutProfesionalInput>
  }

  export type CitaUpdateWithWhereUniqueWithoutProfesionalInput = {
    where: CitaWhereUniqueInput
    data: XOR<CitaUpdateWithoutProfesionalInput, CitaUncheckedUpdateWithoutProfesionalInput>
  }

  export type CitaUpdateManyWithWhereWithoutProfesionalInput = {
    where: CitaScalarWhereInput
    data: XOR<CitaUpdateManyMutationInput, CitaUncheckedUpdateManyWithoutProfesionalInput>
  }

  export type NotaClinicaUpsertWithWhereUniqueWithoutProfesionalInput = {
    where: NotaClinicaWhereUniqueInput
    update: XOR<NotaClinicaUpdateWithoutProfesionalInput, NotaClinicaUncheckedUpdateWithoutProfesionalInput>
    create: XOR<NotaClinicaCreateWithoutProfesionalInput, NotaClinicaUncheckedCreateWithoutProfesionalInput>
  }

  export type NotaClinicaUpdateWithWhereUniqueWithoutProfesionalInput = {
    where: NotaClinicaWhereUniqueInput
    data: XOR<NotaClinicaUpdateWithoutProfesionalInput, NotaClinicaUncheckedUpdateWithoutProfesionalInput>
  }

  export type NotaClinicaUpdateManyWithWhereWithoutProfesionalInput = {
    where: NotaClinicaScalarWhereInput
    data: XOR<NotaClinicaUpdateManyMutationInput, NotaClinicaUncheckedUpdateManyWithoutProfesionalInput>
  }

  export type NotaClinicaScalarWhereInput = {
    AND?: NotaClinicaScalarWhereInput | NotaClinicaScalarWhereInput[]
    OR?: NotaClinicaScalarWhereInput[]
    NOT?: NotaClinicaScalarWhereInput | NotaClinicaScalarWhereInput[]
    id?: IntFilter<"NotaClinica"> | number
    subjetivo?: StringFilter<"NotaClinica"> | string
    objetivo?: StringFilter<"NotaClinica"> | string
    analisis?: StringFilter<"NotaClinica"> | string
    plan?: StringFilter<"NotaClinica"> | string
    fecha?: DateTimeFilter<"NotaClinica"> | Date | string
    episodioId?: IntFilter<"NotaClinica"> | number
    profesionalId?: IntFilter<"NotaClinica"> | number
  }

  export type BloqueAgendaCreateWithoutUnidadInput = {
    fechaInicio: Date | string
    fechaFin: Date | string
    capacidad?: number
    estado: string
    profesional: ProfesionalCreateNestedOneWithoutBloquesAgendaInput
  }

  export type BloqueAgendaUncheckedCreateWithoutUnidadInput = {
    id?: number
    fechaInicio: Date | string
    fechaFin: Date | string
    capacidad?: number
    estado: string
    profesionalId: number
  }

  export type BloqueAgendaCreateOrConnectWithoutUnidadInput = {
    where: BloqueAgendaWhereUniqueInput
    create: XOR<BloqueAgendaCreateWithoutUnidadInput, BloqueAgendaUncheckedCreateWithoutUnidadInput>
  }

  export type BloqueAgendaCreateManyUnidadInputEnvelope = {
    data: BloqueAgendaCreateManyUnidadInput | BloqueAgendaCreateManyUnidadInput[]
    skipDuplicates?: boolean
  }

  export type CitaCreateWithoutUnidadInput = {
    fechaInicio: Date | string
    fechaFin: Date | string
    motivo: string
    estado: string
    canal: string
    paciente: PacienteCreateNestedOneWithoutCitasInput
    profesional: ProfesionalCreateNestedOneWithoutCitasInput
  }

  export type CitaUncheckedCreateWithoutUnidadInput = {
    id?: number
    fechaInicio: Date | string
    fechaFin: Date | string
    motivo: string
    estado: string
    canal: string
    pacienteId: number
    profesionalId: number
  }

  export type CitaCreateOrConnectWithoutUnidadInput = {
    where: CitaWhereUniqueInput
    create: XOR<CitaCreateWithoutUnidadInput, CitaUncheckedCreateWithoutUnidadInput>
  }

  export type CitaCreateManyUnidadInputEnvelope = {
    data: CitaCreateManyUnidadInput | CitaCreateManyUnidadInput[]
    skipDuplicates?: boolean
  }

  export type BloqueAgendaUpsertWithWhereUniqueWithoutUnidadInput = {
    where: BloqueAgendaWhereUniqueInput
    update: XOR<BloqueAgendaUpdateWithoutUnidadInput, BloqueAgendaUncheckedUpdateWithoutUnidadInput>
    create: XOR<BloqueAgendaCreateWithoutUnidadInput, BloqueAgendaUncheckedCreateWithoutUnidadInput>
  }

  export type BloqueAgendaUpdateWithWhereUniqueWithoutUnidadInput = {
    where: BloqueAgendaWhereUniqueInput
    data: XOR<BloqueAgendaUpdateWithoutUnidadInput, BloqueAgendaUncheckedUpdateWithoutUnidadInput>
  }

  export type BloqueAgendaUpdateManyWithWhereWithoutUnidadInput = {
    where: BloqueAgendaScalarWhereInput
    data: XOR<BloqueAgendaUpdateManyMutationInput, BloqueAgendaUncheckedUpdateManyWithoutUnidadInput>
  }

  export type CitaUpsertWithWhereUniqueWithoutUnidadInput = {
    where: CitaWhereUniqueInput
    update: XOR<CitaUpdateWithoutUnidadInput, CitaUncheckedUpdateWithoutUnidadInput>
    create: XOR<CitaCreateWithoutUnidadInput, CitaUncheckedCreateWithoutUnidadInput>
  }

  export type CitaUpdateWithWhereUniqueWithoutUnidadInput = {
    where: CitaWhereUniqueInput
    data: XOR<CitaUpdateWithoutUnidadInput, CitaUncheckedUpdateWithoutUnidadInput>
  }

  export type CitaUpdateManyWithWhereWithoutUnidadInput = {
    where: CitaScalarWhereInput
    data: XOR<CitaUpdateManyMutationInput, CitaUncheckedUpdateManyWithoutUnidadInput>
  }

  export type ProfesionalCreateWithoutBloquesAgendaInput = {
    nombres: string
    apellidos: string
    registroMedico: string
    especialidad: string
    correo: string
    telefono?: string | null
    agendaHabilitada?: boolean
    citas?: CitaCreateNestedManyWithoutProfesionalInput
    notas?: NotaClinicaCreateNestedManyWithoutProfesionalInput
  }

  export type ProfesionalUncheckedCreateWithoutBloquesAgendaInput = {
    id?: number
    nombres: string
    apellidos: string
    registroMedico: string
    especialidad: string
    correo: string
    telefono?: string | null
    agendaHabilitada?: boolean
    citas?: CitaUncheckedCreateNestedManyWithoutProfesionalInput
    notas?: NotaClinicaUncheckedCreateNestedManyWithoutProfesionalInput
  }

  export type ProfesionalCreateOrConnectWithoutBloquesAgendaInput = {
    where: ProfesionalWhereUniqueInput
    create: XOR<ProfesionalCreateWithoutBloquesAgendaInput, ProfesionalUncheckedCreateWithoutBloquesAgendaInput>
  }

  export type UnidadAtencionCreateWithoutBloquesAgendaInput = {
    nombre: string
    tipo: string
    direccion: string
    estado?: boolean
    citas?: CitaCreateNestedManyWithoutUnidadInput
  }

  export type UnidadAtencionUncheckedCreateWithoutBloquesAgendaInput = {
    id?: number
    nombre: string
    tipo: string
    direccion: string
    estado?: boolean
    citas?: CitaUncheckedCreateNestedManyWithoutUnidadInput
  }

  export type UnidadAtencionCreateOrConnectWithoutBloquesAgendaInput = {
    where: UnidadAtencionWhereUniqueInput
    create: XOR<UnidadAtencionCreateWithoutBloquesAgendaInput, UnidadAtencionUncheckedCreateWithoutBloquesAgendaInput>
  }

  export type ProfesionalUpsertWithoutBloquesAgendaInput = {
    update: XOR<ProfesionalUpdateWithoutBloquesAgendaInput, ProfesionalUncheckedUpdateWithoutBloquesAgendaInput>
    create: XOR<ProfesionalCreateWithoutBloquesAgendaInput, ProfesionalUncheckedCreateWithoutBloquesAgendaInput>
    where?: ProfesionalWhereInput
  }

  export type ProfesionalUpdateToOneWithWhereWithoutBloquesAgendaInput = {
    where?: ProfesionalWhereInput
    data: XOR<ProfesionalUpdateWithoutBloquesAgendaInput, ProfesionalUncheckedUpdateWithoutBloquesAgendaInput>
  }

  export type ProfesionalUpdateWithoutBloquesAgendaInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    registroMedico?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    agendaHabilitada?: BoolFieldUpdateOperationsInput | boolean
    citas?: CitaUpdateManyWithoutProfesionalNestedInput
    notas?: NotaClinicaUpdateManyWithoutProfesionalNestedInput
  }

  export type ProfesionalUncheckedUpdateWithoutBloquesAgendaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    registroMedico?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    agendaHabilitada?: BoolFieldUpdateOperationsInput | boolean
    citas?: CitaUncheckedUpdateManyWithoutProfesionalNestedInput
    notas?: NotaClinicaUncheckedUpdateManyWithoutProfesionalNestedInput
  }

  export type UnidadAtencionUpsertWithoutBloquesAgendaInput = {
    update: XOR<UnidadAtencionUpdateWithoutBloquesAgendaInput, UnidadAtencionUncheckedUpdateWithoutBloquesAgendaInput>
    create: XOR<UnidadAtencionCreateWithoutBloquesAgendaInput, UnidadAtencionUncheckedCreateWithoutBloquesAgendaInput>
    where?: UnidadAtencionWhereInput
  }

  export type UnidadAtencionUpdateToOneWithWhereWithoutBloquesAgendaInput = {
    where?: UnidadAtencionWhereInput
    data: XOR<UnidadAtencionUpdateWithoutBloquesAgendaInput, UnidadAtencionUncheckedUpdateWithoutBloquesAgendaInput>
  }

  export type UnidadAtencionUpdateWithoutBloquesAgendaInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    citas?: CitaUpdateManyWithoutUnidadNestedInput
  }

  export type UnidadAtencionUncheckedUpdateWithoutBloquesAgendaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    citas?: CitaUncheckedUpdateManyWithoutUnidadNestedInput
  }

  export type PacienteCreateWithoutCitasInput = {
    tipoDocumento: string
    numeroDocumento: string
    nombres: string
    apellidos: string
    fechaNacimiento: Date | string
    sexo: string
    correo?: string | null
    telefono: string
    direccion?: string | null
    estado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    episodios?: EpisodioAtencionCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutCitasInput = {
    id?: number
    tipoDocumento: string
    numeroDocumento: string
    nombres: string
    apellidos: string
    fechaNacimiento: Date | string
    sexo: string
    correo?: string | null
    telefono: string
    direccion?: string | null
    estado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    episodios?: EpisodioAtencionUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutCitasInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutCitasInput, PacienteUncheckedCreateWithoutCitasInput>
  }

  export type ProfesionalCreateWithoutCitasInput = {
    nombres: string
    apellidos: string
    registroMedico: string
    especialidad: string
    correo: string
    telefono?: string | null
    agendaHabilitada?: boolean
    bloquesAgenda?: BloqueAgendaCreateNestedManyWithoutProfesionalInput
    notas?: NotaClinicaCreateNestedManyWithoutProfesionalInput
  }

  export type ProfesionalUncheckedCreateWithoutCitasInput = {
    id?: number
    nombres: string
    apellidos: string
    registroMedico: string
    especialidad: string
    correo: string
    telefono?: string | null
    agendaHabilitada?: boolean
    bloquesAgenda?: BloqueAgendaUncheckedCreateNestedManyWithoutProfesionalInput
    notas?: NotaClinicaUncheckedCreateNestedManyWithoutProfesionalInput
  }

  export type ProfesionalCreateOrConnectWithoutCitasInput = {
    where: ProfesionalWhereUniqueInput
    create: XOR<ProfesionalCreateWithoutCitasInput, ProfesionalUncheckedCreateWithoutCitasInput>
  }

  export type UnidadAtencionCreateWithoutCitasInput = {
    nombre: string
    tipo: string
    direccion: string
    estado?: boolean
    bloquesAgenda?: BloqueAgendaCreateNestedManyWithoutUnidadInput
  }

  export type UnidadAtencionUncheckedCreateWithoutCitasInput = {
    id?: number
    nombre: string
    tipo: string
    direccion: string
    estado?: boolean
    bloquesAgenda?: BloqueAgendaUncheckedCreateNestedManyWithoutUnidadInput
  }

  export type UnidadAtencionCreateOrConnectWithoutCitasInput = {
    where: UnidadAtencionWhereUniqueInput
    create: XOR<UnidadAtencionCreateWithoutCitasInput, UnidadAtencionUncheckedCreateWithoutCitasInput>
  }

  export type PacienteUpsertWithoutCitasInput = {
    update: XOR<PacienteUpdateWithoutCitasInput, PacienteUncheckedUpdateWithoutCitasInput>
    create: XOR<PacienteCreateWithoutCitasInput, PacienteUncheckedCreateWithoutCitasInput>
    where?: PacienteWhereInput
  }

  export type PacienteUpdateToOneWithWhereWithoutCitasInput = {
    where?: PacienteWhereInput
    data: XOR<PacienteUpdateWithoutCitasInput, PacienteUncheckedUpdateWithoutCitasInput>
  }

  export type PacienteUpdateWithoutCitasInput = {
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    numeroDocumento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodios?: EpisodioAtencionUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutCitasInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    numeroDocumento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodios?: EpisodioAtencionUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type ProfesionalUpsertWithoutCitasInput = {
    update: XOR<ProfesionalUpdateWithoutCitasInput, ProfesionalUncheckedUpdateWithoutCitasInput>
    create: XOR<ProfesionalCreateWithoutCitasInput, ProfesionalUncheckedCreateWithoutCitasInput>
    where?: ProfesionalWhereInput
  }

  export type ProfesionalUpdateToOneWithWhereWithoutCitasInput = {
    where?: ProfesionalWhereInput
    data: XOR<ProfesionalUpdateWithoutCitasInput, ProfesionalUncheckedUpdateWithoutCitasInput>
  }

  export type ProfesionalUpdateWithoutCitasInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    registroMedico?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    agendaHabilitada?: BoolFieldUpdateOperationsInput | boolean
    bloquesAgenda?: BloqueAgendaUpdateManyWithoutProfesionalNestedInput
    notas?: NotaClinicaUpdateManyWithoutProfesionalNestedInput
  }

  export type ProfesionalUncheckedUpdateWithoutCitasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    registroMedico?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    agendaHabilitada?: BoolFieldUpdateOperationsInput | boolean
    bloquesAgenda?: BloqueAgendaUncheckedUpdateManyWithoutProfesionalNestedInput
    notas?: NotaClinicaUncheckedUpdateManyWithoutProfesionalNestedInput
  }

  export type UnidadAtencionUpsertWithoutCitasInput = {
    update: XOR<UnidadAtencionUpdateWithoutCitasInput, UnidadAtencionUncheckedUpdateWithoutCitasInput>
    create: XOR<UnidadAtencionCreateWithoutCitasInput, UnidadAtencionUncheckedCreateWithoutCitasInput>
    where?: UnidadAtencionWhereInput
  }

  export type UnidadAtencionUpdateToOneWithWhereWithoutCitasInput = {
    where?: UnidadAtencionWhereInput
    data: XOR<UnidadAtencionUpdateWithoutCitasInput, UnidadAtencionUncheckedUpdateWithoutCitasInput>
  }

  export type UnidadAtencionUpdateWithoutCitasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    bloquesAgenda?: BloqueAgendaUpdateManyWithoutUnidadNestedInput
  }

  export type UnidadAtencionUncheckedUpdateWithoutCitasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    direccion?: StringFieldUpdateOperationsInput | string
    estado?: BoolFieldUpdateOperationsInput | boolean
    bloquesAgenda?: BloqueAgendaUncheckedUpdateManyWithoutUnidadNestedInput
  }

  export type PacienteCreateWithoutEpisodiosInput = {
    tipoDocumento: string
    numeroDocumento: string
    nombres: string
    apellidos: string
    fechaNacimiento: Date | string
    sexo: string
    correo?: string | null
    telefono: string
    direccion?: string | null
    estado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    citas?: CitaCreateNestedManyWithoutPacienteInput
  }

  export type PacienteUncheckedCreateWithoutEpisodiosInput = {
    id?: number
    tipoDocumento: string
    numeroDocumento: string
    nombres: string
    apellidos: string
    fechaNacimiento: Date | string
    sexo: string
    correo?: string | null
    telefono: string
    direccion?: string | null
    estado?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    citas?: CitaUncheckedCreateNestedManyWithoutPacienteInput
  }

  export type PacienteCreateOrConnectWithoutEpisodiosInput = {
    where: PacienteWhereUniqueInput
    create: XOR<PacienteCreateWithoutEpisodiosInput, PacienteUncheckedCreateWithoutEpisodiosInput>
  }

  export type NotaClinicaCreateWithoutEpisodioInput = {
    subjetivo: string
    objetivo: string
    analisis: string
    plan: string
    fecha?: Date | string
    profesional: ProfesionalCreateNestedOneWithoutNotasInput
  }

  export type NotaClinicaUncheckedCreateWithoutEpisodioInput = {
    id?: number
    subjetivo: string
    objetivo: string
    analisis: string
    plan: string
    fecha?: Date | string
    profesionalId: number
  }

  export type NotaClinicaCreateOrConnectWithoutEpisodioInput = {
    where: NotaClinicaWhereUniqueInput
    create: XOR<NotaClinicaCreateWithoutEpisodioInput, NotaClinicaUncheckedCreateWithoutEpisodioInput>
  }

  export type NotaClinicaCreateManyEpisodioInputEnvelope = {
    data: NotaClinicaCreateManyEpisodioInput | NotaClinicaCreateManyEpisodioInput[]
    skipDuplicates?: boolean
  }

  export type PacienteUpsertWithoutEpisodiosInput = {
    update: XOR<PacienteUpdateWithoutEpisodiosInput, PacienteUncheckedUpdateWithoutEpisodiosInput>
    create: XOR<PacienteCreateWithoutEpisodiosInput, PacienteUncheckedCreateWithoutEpisodiosInput>
    where?: PacienteWhereInput
  }

  export type PacienteUpdateToOneWithWhereWithoutEpisodiosInput = {
    where?: PacienteWhereInput
    data: XOR<PacienteUpdateWithoutEpisodiosInput, PacienteUncheckedUpdateWithoutEpisodiosInput>
  }

  export type PacienteUpdateWithoutEpisodiosInput = {
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    numeroDocumento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    citas?: CitaUpdateManyWithoutPacienteNestedInput
  }

  export type PacienteUncheckedUpdateWithoutEpisodiosInput = {
    id?: IntFieldUpdateOperationsInput | number
    tipoDocumento?: StringFieldUpdateOperationsInput | string
    numeroDocumento?: StringFieldUpdateOperationsInput | string
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    fechaNacimiento?: DateTimeFieldUpdateOperationsInput | Date | string
    sexo?: StringFieldUpdateOperationsInput | string
    correo?: NullableStringFieldUpdateOperationsInput | string | null
    telefono?: StringFieldUpdateOperationsInput | string
    direccion?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    citas?: CitaUncheckedUpdateManyWithoutPacienteNestedInput
  }

  export type NotaClinicaUpsertWithWhereUniqueWithoutEpisodioInput = {
    where: NotaClinicaWhereUniqueInput
    update: XOR<NotaClinicaUpdateWithoutEpisodioInput, NotaClinicaUncheckedUpdateWithoutEpisodioInput>
    create: XOR<NotaClinicaCreateWithoutEpisodioInput, NotaClinicaUncheckedCreateWithoutEpisodioInput>
  }

  export type NotaClinicaUpdateWithWhereUniqueWithoutEpisodioInput = {
    where: NotaClinicaWhereUniqueInput
    data: XOR<NotaClinicaUpdateWithoutEpisodioInput, NotaClinicaUncheckedUpdateWithoutEpisodioInput>
  }

  export type NotaClinicaUpdateManyWithWhereWithoutEpisodioInput = {
    where: NotaClinicaScalarWhereInput
    data: XOR<NotaClinicaUpdateManyMutationInput, NotaClinicaUncheckedUpdateManyWithoutEpisodioInput>
  }

  export type EpisodioAtencionCreateWithoutNotasInput = {
    motivo: string
    fecha?: Date | string
    estado: string
    paciente: PacienteCreateNestedOneWithoutEpisodiosInput
  }

  export type EpisodioAtencionUncheckedCreateWithoutNotasInput = {
    id?: number
    motivo: string
    fecha?: Date | string
    estado: string
    pacienteId: number
  }

  export type EpisodioAtencionCreateOrConnectWithoutNotasInput = {
    where: EpisodioAtencionWhereUniqueInput
    create: XOR<EpisodioAtencionCreateWithoutNotasInput, EpisodioAtencionUncheckedCreateWithoutNotasInput>
  }

  export type ProfesionalCreateWithoutNotasInput = {
    nombres: string
    apellidos: string
    registroMedico: string
    especialidad: string
    correo: string
    telefono?: string | null
    agendaHabilitada?: boolean
    bloquesAgenda?: BloqueAgendaCreateNestedManyWithoutProfesionalInput
    citas?: CitaCreateNestedManyWithoutProfesionalInput
  }

  export type ProfesionalUncheckedCreateWithoutNotasInput = {
    id?: number
    nombres: string
    apellidos: string
    registroMedico: string
    especialidad: string
    correo: string
    telefono?: string | null
    agendaHabilitada?: boolean
    bloquesAgenda?: BloqueAgendaUncheckedCreateNestedManyWithoutProfesionalInput
    citas?: CitaUncheckedCreateNestedManyWithoutProfesionalInput
  }

  export type ProfesionalCreateOrConnectWithoutNotasInput = {
    where: ProfesionalWhereUniqueInput
    create: XOR<ProfesionalCreateWithoutNotasInput, ProfesionalUncheckedCreateWithoutNotasInput>
  }

  export type EpisodioAtencionUpsertWithoutNotasInput = {
    update: XOR<EpisodioAtencionUpdateWithoutNotasInput, EpisodioAtencionUncheckedUpdateWithoutNotasInput>
    create: XOR<EpisodioAtencionCreateWithoutNotasInput, EpisodioAtencionUncheckedCreateWithoutNotasInput>
    where?: EpisodioAtencionWhereInput
  }

  export type EpisodioAtencionUpdateToOneWithWhereWithoutNotasInput = {
    where?: EpisodioAtencionWhereInput
    data: XOR<EpisodioAtencionUpdateWithoutNotasInput, EpisodioAtencionUncheckedUpdateWithoutNotasInput>
  }

  export type EpisodioAtencionUpdateWithoutNotasInput = {
    motivo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    paciente?: PacienteUpdateOneRequiredWithoutEpisodiosNestedInput
  }

  export type EpisodioAtencionUncheckedUpdateWithoutNotasInput = {
    id?: IntFieldUpdateOperationsInput | number
    motivo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    pacienteId?: IntFieldUpdateOperationsInput | number
  }

  export type ProfesionalUpsertWithoutNotasInput = {
    update: XOR<ProfesionalUpdateWithoutNotasInput, ProfesionalUncheckedUpdateWithoutNotasInput>
    create: XOR<ProfesionalCreateWithoutNotasInput, ProfesionalUncheckedCreateWithoutNotasInput>
    where?: ProfesionalWhereInput
  }

  export type ProfesionalUpdateToOneWithWhereWithoutNotasInput = {
    where?: ProfesionalWhereInput
    data: XOR<ProfesionalUpdateWithoutNotasInput, ProfesionalUncheckedUpdateWithoutNotasInput>
  }

  export type ProfesionalUpdateWithoutNotasInput = {
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    registroMedico?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    agendaHabilitada?: BoolFieldUpdateOperationsInput | boolean
    bloquesAgenda?: BloqueAgendaUpdateManyWithoutProfesionalNestedInput
    citas?: CitaUpdateManyWithoutProfesionalNestedInput
  }

  export type ProfesionalUncheckedUpdateWithoutNotasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombres?: StringFieldUpdateOperationsInput | string
    apellidos?: StringFieldUpdateOperationsInput | string
    registroMedico?: StringFieldUpdateOperationsInput | string
    especialidad?: StringFieldUpdateOperationsInput | string
    correo?: StringFieldUpdateOperationsInput | string
    telefono?: NullableStringFieldUpdateOperationsInput | string | null
    agendaHabilitada?: BoolFieldUpdateOperationsInput | boolean
    bloquesAgenda?: BloqueAgendaUncheckedUpdateManyWithoutProfesionalNestedInput
    citas?: CitaUncheckedUpdateManyWithoutProfesionalNestedInput
  }

  export type CitaCreateManyPacienteInput = {
    id?: number
    fechaInicio: Date | string
    fechaFin: Date | string
    motivo: string
    estado: string
    canal: string
    profesionalId: number
    unidadId: number
  }

  export type EpisodioAtencionCreateManyPacienteInput = {
    id?: number
    motivo: string
    fecha?: Date | string
    estado: string
  }

  export type CitaUpdateWithoutPacienteInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    canal?: StringFieldUpdateOperationsInput | string
    profesional?: ProfesionalUpdateOneRequiredWithoutCitasNestedInput
    unidad?: UnidadAtencionUpdateOneRequiredWithoutCitasNestedInput
  }

  export type CitaUncheckedUpdateWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    canal?: StringFieldUpdateOperationsInput | string
    profesionalId?: IntFieldUpdateOperationsInput | number
    unidadId?: IntFieldUpdateOperationsInput | number
  }

  export type CitaUncheckedUpdateManyWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    canal?: StringFieldUpdateOperationsInput | string
    profesionalId?: IntFieldUpdateOperationsInput | number
    unidadId?: IntFieldUpdateOperationsInput | number
  }

  export type EpisodioAtencionUpdateWithoutPacienteInput = {
    motivo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    notas?: NotaClinicaUpdateManyWithoutEpisodioNestedInput
  }

  export type EpisodioAtencionUncheckedUpdateWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    motivo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
    notas?: NotaClinicaUncheckedUpdateManyWithoutEpisodioNestedInput
  }

  export type EpisodioAtencionUncheckedUpdateManyWithoutPacienteInput = {
    id?: IntFieldUpdateOperationsInput | number
    motivo?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type BloqueAgendaCreateManyProfesionalInput = {
    id?: number
    fechaInicio: Date | string
    fechaFin: Date | string
    capacidad?: number
    estado: string
    unidadId: number
  }

  export type CitaCreateManyProfesionalInput = {
    id?: number
    fechaInicio: Date | string
    fechaFin: Date | string
    motivo: string
    estado: string
    canal: string
    pacienteId: number
    unidadId: number
  }

  export type NotaClinicaCreateManyProfesionalInput = {
    id?: number
    subjetivo: string
    objetivo: string
    analisis: string
    plan: string
    fecha?: Date | string
    episodioId: number
  }

  export type BloqueAgendaUpdateWithoutProfesionalInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    capacidad?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    unidad?: UnidadAtencionUpdateOneRequiredWithoutBloquesAgendaNestedInput
  }

  export type BloqueAgendaUncheckedUpdateWithoutProfesionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    capacidad?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    unidadId?: IntFieldUpdateOperationsInput | number
  }

  export type BloqueAgendaUncheckedUpdateManyWithoutProfesionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    capacidad?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    unidadId?: IntFieldUpdateOperationsInput | number
  }

  export type CitaUpdateWithoutProfesionalInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    canal?: StringFieldUpdateOperationsInput | string
    paciente?: PacienteUpdateOneRequiredWithoutCitasNestedInput
    unidad?: UnidadAtencionUpdateOneRequiredWithoutCitasNestedInput
  }

  export type CitaUncheckedUpdateWithoutProfesionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    canal?: StringFieldUpdateOperationsInput | string
    pacienteId?: IntFieldUpdateOperationsInput | number
    unidadId?: IntFieldUpdateOperationsInput | number
  }

  export type CitaUncheckedUpdateManyWithoutProfesionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    canal?: StringFieldUpdateOperationsInput | string
    pacienteId?: IntFieldUpdateOperationsInput | number
    unidadId?: IntFieldUpdateOperationsInput | number
  }

  export type NotaClinicaUpdateWithoutProfesionalInput = {
    subjetivo?: StringFieldUpdateOperationsInput | string
    objetivo?: StringFieldUpdateOperationsInput | string
    analisis?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    episodio?: EpisodioAtencionUpdateOneRequiredWithoutNotasNestedInput
  }

  export type NotaClinicaUncheckedUpdateWithoutProfesionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjetivo?: StringFieldUpdateOperationsInput | string
    objetivo?: StringFieldUpdateOperationsInput | string
    analisis?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    episodioId?: IntFieldUpdateOperationsInput | number
  }

  export type NotaClinicaUncheckedUpdateManyWithoutProfesionalInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjetivo?: StringFieldUpdateOperationsInput | string
    objetivo?: StringFieldUpdateOperationsInput | string
    analisis?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    episodioId?: IntFieldUpdateOperationsInput | number
  }

  export type BloqueAgendaCreateManyUnidadInput = {
    id?: number
    fechaInicio: Date | string
    fechaFin: Date | string
    capacidad?: number
    estado: string
    profesionalId: number
  }

  export type CitaCreateManyUnidadInput = {
    id?: number
    fechaInicio: Date | string
    fechaFin: Date | string
    motivo: string
    estado: string
    canal: string
    pacienteId: number
    profesionalId: number
  }

  export type BloqueAgendaUpdateWithoutUnidadInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    capacidad?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    profesional?: ProfesionalUpdateOneRequiredWithoutBloquesAgendaNestedInput
  }

  export type BloqueAgendaUncheckedUpdateWithoutUnidadInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    capacidad?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    profesionalId?: IntFieldUpdateOperationsInput | number
  }

  export type BloqueAgendaUncheckedUpdateManyWithoutUnidadInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    capacidad?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    profesionalId?: IntFieldUpdateOperationsInput | number
  }

  export type CitaUpdateWithoutUnidadInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    canal?: StringFieldUpdateOperationsInput | string
    paciente?: PacienteUpdateOneRequiredWithoutCitasNestedInput
    profesional?: ProfesionalUpdateOneRequiredWithoutCitasNestedInput
  }

  export type CitaUncheckedUpdateWithoutUnidadInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    canal?: StringFieldUpdateOperationsInput | string
    pacienteId?: IntFieldUpdateOperationsInput | number
    profesionalId?: IntFieldUpdateOperationsInput | number
  }

  export type CitaUncheckedUpdateManyWithoutUnidadInput = {
    id?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    motivo?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    canal?: StringFieldUpdateOperationsInput | string
    pacienteId?: IntFieldUpdateOperationsInput | number
    profesionalId?: IntFieldUpdateOperationsInput | number
  }

  export type NotaClinicaCreateManyEpisodioInput = {
    id?: number
    subjetivo: string
    objetivo: string
    analisis: string
    plan: string
    fecha?: Date | string
    profesionalId: number
  }

  export type NotaClinicaUpdateWithoutEpisodioInput = {
    subjetivo?: StringFieldUpdateOperationsInput | string
    objetivo?: StringFieldUpdateOperationsInput | string
    analisis?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    profesional?: ProfesionalUpdateOneRequiredWithoutNotasNestedInput
  }

  export type NotaClinicaUncheckedUpdateWithoutEpisodioInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjetivo?: StringFieldUpdateOperationsInput | string
    objetivo?: StringFieldUpdateOperationsInput | string
    analisis?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    profesionalId?: IntFieldUpdateOperationsInput | number
  }

  export type NotaClinicaUncheckedUpdateManyWithoutEpisodioInput = {
    id?: IntFieldUpdateOperationsInput | number
    subjetivo?: StringFieldUpdateOperationsInput | string
    objetivo?: StringFieldUpdateOperationsInput | string
    analisis?: StringFieldUpdateOperationsInput | string
    plan?: StringFieldUpdateOperationsInput | string
    fecha?: DateTimeFieldUpdateOperationsInput | Date | string
    profesionalId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}