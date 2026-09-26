
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model Permission
 * 
 */
export type Permission = $Result.DefaultSelection<Prisma.$PermissionPayload>
/**
 * Model UserRole
 * 
 */
export type UserRole = $Result.DefaultSelection<Prisma.$UserRolePayload>
/**
 * Model RolePermission
 * 
 */
export type RolePermission = $Result.DefaultSelection<Prisma.$RolePermissionPayload>
/**
 * Model AnimeEntry
 * 
 */
export type AnimeEntry = $Result.DefaultSelection<Prisma.$AnimeEntryPayload>
/**
 * Model Genre
 * 
 */
export type Genre = $Result.DefaultSelection<Prisma.$GenrePayload>
/**
 * Model AnimeType
 * 
 */
export type AnimeType = $Result.DefaultSelection<Prisma.$AnimeTypePayload>
/**
 * Model AnimeEntryGenre
 * 
 */
export type AnimeEntryGenre = $Result.DefaultSelection<Prisma.$AnimeEntryGenrePayload>
/**
 * Model AnimeRating
 * 
 */
export type AnimeRating = $Result.DefaultSelection<Prisma.$AnimeRatingPayload>
/**
 * Model AnimeEpisode
 * 
 */
export type AnimeEpisode = $Result.DefaultSelection<Prisma.$AnimeEpisodePayload>
/**
 * Model AnimeAuthor
 * 
 */
export type AnimeAuthor = $Result.DefaultSelection<Prisma.$AnimeAuthorPayload>
/**
 * Model AnimeEntryAuthor
 * 
 */
export type AnimeEntryAuthor = $Result.DefaultSelection<Prisma.$AnimeEntryAuthorPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const WatchStatus: {
  PLANNED: 'PLANNED',
  WATCHING: 'WATCHING',
  COMPLETED: 'COMPLETED',
  DROPPED: 'DROPPED'
};

export type WatchStatus = (typeof WatchStatus)[keyof typeof WatchStatus]


export const AnimeAiredStatus: {
  NOT_YET_RELEASED: 'NOT_YET_RELEASED',
  AIRING: 'AIRING',
  FINISHED: 'FINISHED',
  HIATUS: 'HIATUS',
  CANCELLED: 'CANCELLED'
};

export type AnimeAiredStatus = (typeof AnimeAiredStatus)[keyof typeof AnimeAiredStatus]

}

export type WatchStatus = $Enums.WatchStatus

export const WatchStatus: typeof $Enums.WatchStatus

export type AnimeAiredStatus = $Enums.AnimeAiredStatus

export const AnimeAiredStatus: typeof $Enums.AnimeAiredStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permission`: Exposes CRUD operations for the **Permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permission.findMany()
    * ```
    */
  get permission(): Prisma.PermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userRole`: Exposes CRUD operations for the **UserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoles
    * const userRoles = await prisma.userRole.findMany()
    * ```
    */
  get userRole(): Prisma.UserRoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rolePermission`: Exposes CRUD operations for the **RolePermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RolePermissions
    * const rolePermissions = await prisma.rolePermission.findMany()
    * ```
    */
  get rolePermission(): Prisma.RolePermissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.animeEntry`: Exposes CRUD operations for the **AnimeEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnimeEntries
    * const animeEntries = await prisma.animeEntry.findMany()
    * ```
    */
  get animeEntry(): Prisma.AnimeEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.genre`: Exposes CRUD operations for the **Genre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genre.findMany()
    * ```
    */
  get genre(): Prisma.GenreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.animeType`: Exposes CRUD operations for the **AnimeType** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnimeTypes
    * const animeTypes = await prisma.animeType.findMany()
    * ```
    */
  get animeType(): Prisma.AnimeTypeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.animeEntryGenre`: Exposes CRUD operations for the **AnimeEntryGenre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnimeEntryGenres
    * const animeEntryGenres = await prisma.animeEntryGenre.findMany()
    * ```
    */
  get animeEntryGenre(): Prisma.AnimeEntryGenreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.animeRating`: Exposes CRUD operations for the **AnimeRating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnimeRatings
    * const animeRatings = await prisma.animeRating.findMany()
    * ```
    */
  get animeRating(): Prisma.AnimeRatingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.animeEpisode`: Exposes CRUD operations for the **AnimeEpisode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnimeEpisodes
    * const animeEpisodes = await prisma.animeEpisode.findMany()
    * ```
    */
  get animeEpisode(): Prisma.AnimeEpisodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.animeAuthor`: Exposes CRUD operations for the **AnimeAuthor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnimeAuthors
    * const animeAuthors = await prisma.animeAuthor.findMany()
    * ```
    */
  get animeAuthor(): Prisma.AnimeAuthorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.animeEntryAuthor`: Exposes CRUD operations for the **AnimeEntryAuthor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnimeEntryAuthors
    * const animeEntryAuthors = await prisma.animeEntryAuthor.findMany()
    * ```
    */
  get animeEntryAuthor(): Prisma.AnimeEntryAuthorDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
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
    User: 'User',
    Role: 'Role',
    Permission: 'Permission',
    UserRole: 'UserRole',
    RolePermission: 'RolePermission',
    AnimeEntry: 'AnimeEntry',
    Genre: 'Genre',
    AnimeType: 'AnimeType',
    AnimeEntryGenre: 'AnimeEntryGenre',
    AnimeRating: 'AnimeRating',
    AnimeEpisode: 'AnimeEpisode',
    AnimeAuthor: 'AnimeAuthor',
    AnimeEntryAuthor: 'AnimeEntryAuthor'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "role" | "permission" | "userRole" | "rolePermission" | "animeEntry" | "genre" | "animeType" | "animeEntryGenre" | "animeRating" | "animeEpisode" | "animeAuthor" | "animeEntryAuthor"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      Permission: {
        payload: Prisma.$PermissionPayload<ExtArgs>
        fields: Prisma.PermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findFirst: {
            args: Prisma.PermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          findMany: {
            args: Prisma.PermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          create: {
            args: Prisma.PermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          createMany: {
            args: Prisma.PermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          delete: {
            args: Prisma.PermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          update: {
            args: Prisma.PermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          deleteMany: {
            args: Prisma.PermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PermissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>[]
          }
          upsert: {
            args: Prisma.PermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionPayload>
          }
          aggregate: {
            args: Prisma.PermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermission>
          }
          groupBy: {
            args: Prisma.PermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionCountAggregateOutputType> | number
          }
        }
      }
      UserRole: {
        payload: Prisma.$UserRolePayload<ExtArgs>
        fields: Prisma.UserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findFirst: {
            args: Prisma.UserRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findMany: {
            args: Prisma.UserRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          create: {
            args: Prisma.UserRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          createMany: {
            args: Prisma.UserRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          delete: {
            args: Prisma.UserRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          update: {
            args: Prisma.UserRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          deleteMany: {
            args: Prisma.UserRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserRoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          upsert: {
            args: Prisma.UserRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          aggregate: {
            args: Prisma.UserRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRole>
          }
          groupBy: {
            args: Prisma.UserRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRoleCountArgs<ExtArgs>
            result: $Utils.Optional<UserRoleCountAggregateOutputType> | number
          }
        }
      }
      RolePermission: {
        payload: Prisma.$RolePermissionPayload<ExtArgs>
        fields: Prisma.RolePermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RolePermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RolePermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          findFirst: {
            args: Prisma.RolePermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RolePermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          findMany: {
            args: Prisma.RolePermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>[]
          }
          create: {
            args: Prisma.RolePermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          createMany: {
            args: Prisma.RolePermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RolePermissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>[]
          }
          delete: {
            args: Prisma.RolePermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          update: {
            args: Prisma.RolePermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          deleteMany: {
            args: Prisma.RolePermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RolePermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RolePermissionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>[]
          }
          upsert: {
            args: Prisma.RolePermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePermissionPayload>
          }
          aggregate: {
            args: Prisma.RolePermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRolePermission>
          }
          groupBy: {
            args: Prisma.RolePermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RolePermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RolePermissionCountArgs<ExtArgs>
            result: $Utils.Optional<RolePermissionCountAggregateOutputType> | number
          }
        }
      }
      AnimeEntry: {
        payload: Prisma.$AnimeEntryPayload<ExtArgs>
        fields: Prisma.AnimeEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnimeEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnimeEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEntryPayload>
          }
          findFirst: {
            args: Prisma.AnimeEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnimeEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEntryPayload>
          }
          findMany: {
            args: Prisma.AnimeEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEntryPayload>[]
          }
          create: {
            args: Prisma.AnimeEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEntryPayload>
          }
          createMany: {
            args: Prisma.AnimeEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnimeEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEntryPayload>[]
          }
          delete: {
            args: Prisma.AnimeEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEntryPayload>
          }
          update: {
            args: Prisma.AnimeEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEntryPayload>
          }
          deleteMany: {
            args: Prisma.AnimeEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnimeEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnimeEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEntryPayload>[]
          }
          upsert: {
            args: Prisma.AnimeEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEntryPayload>
          }
          aggregate: {
            args: Prisma.AnimeEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnimeEntry>
          }
          groupBy: {
            args: Prisma.AnimeEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnimeEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnimeEntryCountArgs<ExtArgs>
            result: $Utils.Optional<AnimeEntryCountAggregateOutputType> | number
          }
        }
      }
      Genre: {
        payload: Prisma.$GenrePayload<ExtArgs>
        fields: Prisma.GenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findFirst: {
            args: Prisma.GenreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findMany: {
            args: Prisma.GenreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          create: {
            args: Prisma.GenreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          createMany: {
            args: Prisma.GenreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GenreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          delete: {
            args: Prisma.GenreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          update: {
            args: Prisma.GenreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          deleteMany: {
            args: Prisma.GenreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GenreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GenreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          upsert: {
            args: Prisma.GenreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          aggregate: {
            args: Prisma.GenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGenre>
          }
          groupBy: {
            args: Prisma.GenreGroupByArgs<ExtArgs>
            result: $Utils.Optional<GenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenreCountArgs<ExtArgs>
            result: $Utils.Optional<GenreCountAggregateOutputType> | number
          }
        }
      }
      AnimeType: {
        payload: Prisma.$AnimeTypePayload<ExtArgs>
        fields: Prisma.AnimeTypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnimeTypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeTypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnimeTypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeTypePayload>
          }
          findFirst: {
            args: Prisma.AnimeTypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeTypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnimeTypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeTypePayload>
          }
          findMany: {
            args: Prisma.AnimeTypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeTypePayload>[]
          }
          create: {
            args: Prisma.AnimeTypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeTypePayload>
          }
          createMany: {
            args: Prisma.AnimeTypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnimeTypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeTypePayload>[]
          }
          delete: {
            args: Prisma.AnimeTypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeTypePayload>
          }
          update: {
            args: Prisma.AnimeTypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeTypePayload>
          }
          deleteMany: {
            args: Prisma.AnimeTypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnimeTypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnimeTypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeTypePayload>[]
          }
          upsert: {
            args: Prisma.AnimeTypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeTypePayload>
          }
          aggregate: {
            args: Prisma.AnimeTypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnimeType>
          }
          groupBy: {
            args: Prisma.AnimeTypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnimeTypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnimeTypeCountArgs<ExtArgs>
            result: $Utils.Optional<AnimeTypeCountAggregateOutputType> | number
          }
        }
      }
      AnimeEntryGenre: {
        payload: Prisma.$AnimeEntryGenrePayload<ExtArgs>
        fields: Prisma.AnimeEntryGenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnimeEntryGenreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEntryGenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnimeEntryGenreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEntryGenrePayload>
          }
          findFirst: {
            args: Prisma.AnimeEntryGenreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEntryGenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnimeEntryGenreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEntryGenrePayload>
          }
          findMany: {
            args: Prisma.AnimeEntryGenreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEntryGenrePayload>[]
          }
          create: {
            args: Prisma.AnimeEntryGenreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEntryGenrePayload>
          }
          createMany: {
            args: Prisma.AnimeEntryGenreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnimeEntryGenreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEntryGenrePayload>[]
          }
          delete: {
            args: Prisma.AnimeEntryGenreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEntryGenrePayload>
          }
          update: {
            args: Prisma.AnimeEntryGenreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEntryGenrePayload>
          }
          deleteMany: {
            args: Prisma.AnimeEntryGenreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnimeEntryGenreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnimeEntryGenreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEntryGenrePayload>[]
          }
          upsert: {
            args: Prisma.AnimeEntryGenreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEntryGenrePayload>
          }
          aggregate: {
            args: Prisma.AnimeEntryGenreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnimeEntryGenre>
          }
          groupBy: {
            args: Prisma.AnimeEntryGenreGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnimeEntryGenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnimeEntryGenreCountArgs<ExtArgs>
            result: $Utils.Optional<AnimeEntryGenreCountAggregateOutputType> | number
          }
        }
      }
      AnimeRating: {
        payload: Prisma.$AnimeRatingPayload<ExtArgs>
        fields: Prisma.AnimeRatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnimeRatingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeRatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnimeRatingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeRatingPayload>
          }
          findFirst: {
            args: Prisma.AnimeRatingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeRatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnimeRatingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeRatingPayload>
          }
          findMany: {
            args: Prisma.AnimeRatingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeRatingPayload>[]
          }
          create: {
            args: Prisma.AnimeRatingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeRatingPayload>
          }
          createMany: {
            args: Prisma.AnimeRatingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnimeRatingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeRatingPayload>[]
          }
          delete: {
            args: Prisma.AnimeRatingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeRatingPayload>
          }
          update: {
            args: Prisma.AnimeRatingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeRatingPayload>
          }
          deleteMany: {
            args: Prisma.AnimeRatingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnimeRatingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnimeRatingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeRatingPayload>[]
          }
          upsert: {
            args: Prisma.AnimeRatingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeRatingPayload>
          }
          aggregate: {
            args: Prisma.AnimeRatingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnimeRating>
          }
          groupBy: {
            args: Prisma.AnimeRatingGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnimeRatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnimeRatingCountArgs<ExtArgs>
            result: $Utils.Optional<AnimeRatingCountAggregateOutputType> | number
          }
        }
      }
      AnimeEpisode: {
        payload: Prisma.$AnimeEpisodePayload<ExtArgs>
        fields: Prisma.AnimeEpisodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnimeEpisodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEpisodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnimeEpisodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEpisodePayload>
          }
          findFirst: {
            args: Prisma.AnimeEpisodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEpisodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnimeEpisodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEpisodePayload>
          }
          findMany: {
            args: Prisma.AnimeEpisodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEpisodePayload>[]
          }
          create: {
            args: Prisma.AnimeEpisodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEpisodePayload>
          }
          createMany: {
            args: Prisma.AnimeEpisodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnimeEpisodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEpisodePayload>[]
          }
          delete: {
            args: Prisma.AnimeEpisodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEpisodePayload>
          }
          update: {
            args: Prisma.AnimeEpisodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEpisodePayload>
          }
          deleteMany: {
            args: Prisma.AnimeEpisodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnimeEpisodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnimeEpisodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEpisodePayload>[]
          }
          upsert: {
            args: Prisma.AnimeEpisodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEpisodePayload>
          }
          aggregate: {
            args: Prisma.AnimeEpisodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnimeEpisode>
          }
          groupBy: {
            args: Prisma.AnimeEpisodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnimeEpisodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnimeEpisodeCountArgs<ExtArgs>
            result: $Utils.Optional<AnimeEpisodeCountAggregateOutputType> | number
          }
        }
      }
      AnimeAuthor: {
        payload: Prisma.$AnimeAuthorPayload<ExtArgs>
        fields: Prisma.AnimeAuthorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnimeAuthorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeAuthorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnimeAuthorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeAuthorPayload>
          }
          findFirst: {
            args: Prisma.AnimeAuthorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeAuthorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnimeAuthorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeAuthorPayload>
          }
          findMany: {
            args: Prisma.AnimeAuthorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeAuthorPayload>[]
          }
          create: {
            args: Prisma.AnimeAuthorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeAuthorPayload>
          }
          createMany: {
            args: Prisma.AnimeAuthorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnimeAuthorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeAuthorPayload>[]
          }
          delete: {
            args: Prisma.AnimeAuthorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeAuthorPayload>
          }
          update: {
            args: Prisma.AnimeAuthorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeAuthorPayload>
          }
          deleteMany: {
            args: Prisma.AnimeAuthorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnimeAuthorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnimeAuthorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeAuthorPayload>[]
          }
          upsert: {
            args: Prisma.AnimeAuthorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeAuthorPayload>
          }
          aggregate: {
            args: Prisma.AnimeAuthorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnimeAuthor>
          }
          groupBy: {
            args: Prisma.AnimeAuthorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnimeAuthorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnimeAuthorCountArgs<ExtArgs>
            result: $Utils.Optional<AnimeAuthorCountAggregateOutputType> | number
          }
        }
      }
      AnimeEntryAuthor: {
        payload: Prisma.$AnimeEntryAuthorPayload<ExtArgs>
        fields: Prisma.AnimeEntryAuthorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnimeEntryAuthorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEntryAuthorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnimeEntryAuthorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEntryAuthorPayload>
          }
          findFirst: {
            args: Prisma.AnimeEntryAuthorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEntryAuthorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnimeEntryAuthorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEntryAuthorPayload>
          }
          findMany: {
            args: Prisma.AnimeEntryAuthorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEntryAuthorPayload>[]
          }
          create: {
            args: Prisma.AnimeEntryAuthorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEntryAuthorPayload>
          }
          createMany: {
            args: Prisma.AnimeEntryAuthorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnimeEntryAuthorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEntryAuthorPayload>[]
          }
          delete: {
            args: Prisma.AnimeEntryAuthorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEntryAuthorPayload>
          }
          update: {
            args: Prisma.AnimeEntryAuthorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEntryAuthorPayload>
          }
          deleteMany: {
            args: Prisma.AnimeEntryAuthorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnimeEntryAuthorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AnimeEntryAuthorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEntryAuthorPayload>[]
          }
          upsert: {
            args: Prisma.AnimeEntryAuthorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnimeEntryAuthorPayload>
          }
          aggregate: {
            args: Prisma.AnimeEntryAuthorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnimeEntryAuthor>
          }
          groupBy: {
            args: Prisma.AnimeEntryAuthorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnimeEntryAuthorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnimeEntryAuthorCountArgs<ExtArgs>
            result: $Utils.Optional<AnimeEntryAuthorCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    role?: RoleOmit
    permission?: PermissionOmit
    userRole?: UserRoleOmit
    rolePermission?: RolePermissionOmit
    animeEntry?: AnimeEntryOmit
    genre?: GenreOmit
    animeType?: AnimeTypeOmit
    animeEntryGenre?: AnimeEntryGenreOmit
    animeRating?: AnimeRatingOmit
    animeEpisode?: AnimeEpisodeOmit
    animeAuthor?: AnimeAuthorOmit
    animeEntryAuthor?: AnimeEntryAuthorOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    animeEntries: number
    animeAuthors: number
    animeRatings: number
    roleLinks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animeEntries?: boolean | UserCountOutputTypeCountAnimeEntriesArgs
    animeAuthors?: boolean | UserCountOutputTypeCountAnimeAuthorsArgs
    animeRatings?: boolean | UserCountOutputTypeCountAnimeRatingsArgs
    roleLinks?: boolean | UserCountOutputTypeCountRoleLinksArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnimeEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeEntryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnimeAuthorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeAuthorWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnimeRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeRatingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRoleLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    userLinks: number
    permissions: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userLinks?: boolean | RoleCountOutputTypeCountUserLinksArgs
    permissions?: boolean | RoleCountOutputTypeCountPermissionsArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUserLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionWhereInput
  }


  /**
   * Count Type PermissionCountOutputType
   */

  export type PermissionCountOutputType = {
    roles: number
  }

  export type PermissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | PermissionCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionCountOutputType
     */
    select?: PermissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermissionCountOutputType without action
   */
  export type PermissionCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionWhereInput
  }


  /**
   * Count Type AnimeEntryCountOutputType
   */

  export type AnimeEntryCountOutputType = {
    episodes: number
    authorLinks: number
    ratings: number
    genreLinks: number
  }

  export type AnimeEntryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    episodes?: boolean | AnimeEntryCountOutputTypeCountEpisodesArgs
    authorLinks?: boolean | AnimeEntryCountOutputTypeCountAuthorLinksArgs
    ratings?: boolean | AnimeEntryCountOutputTypeCountRatingsArgs
    genreLinks?: boolean | AnimeEntryCountOutputTypeCountGenreLinksArgs
  }

  // Custom InputTypes
  /**
   * AnimeEntryCountOutputType without action
   */
  export type AnimeEntryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntryCountOutputType
     */
    select?: AnimeEntryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnimeEntryCountOutputType without action
   */
  export type AnimeEntryCountOutputTypeCountEpisodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeEpisodeWhereInput
  }

  /**
   * AnimeEntryCountOutputType without action
   */
  export type AnimeEntryCountOutputTypeCountAuthorLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeEntryAuthorWhereInput
  }

  /**
   * AnimeEntryCountOutputType without action
   */
  export type AnimeEntryCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeRatingWhereInput
  }

  /**
   * AnimeEntryCountOutputType without action
   */
  export type AnimeEntryCountOutputTypeCountGenreLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeEntryGenreWhereInput
  }


  /**
   * Count Type GenreCountOutputType
   */

  export type GenreCountOutputType = {
    animeLinks: number
  }

  export type GenreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animeLinks?: boolean | GenreCountOutputTypeCountAnimeLinksArgs
  }

  // Custom InputTypes
  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreCountOutputType
     */
    select?: GenreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountAnimeLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeEntryGenreWhereInput
  }


  /**
   * Count Type AnimeTypeCountOutputType
   */

  export type AnimeTypeCountOutputType = {
    animeEntries: number
  }

  export type AnimeTypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animeEntries?: boolean | AnimeTypeCountOutputTypeCountAnimeEntriesArgs
  }

  // Custom InputTypes
  /**
   * AnimeTypeCountOutputType without action
   */
  export type AnimeTypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeTypeCountOutputType
     */
    select?: AnimeTypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnimeTypeCountOutputType without action
   */
  export type AnimeTypeCountOutputTypeCountAnimeEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeEntryWhereInput
  }


  /**
   * Count Type AnimeAuthorCountOutputType
   */

  export type AnimeAuthorCountOutputType = {
    animeLinks: number
  }

  export type AnimeAuthorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animeLinks?: boolean | AnimeAuthorCountOutputTypeCountAnimeLinksArgs
  }

  // Custom InputTypes
  /**
   * AnimeAuthorCountOutputType without action
   */
  export type AnimeAuthorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeAuthorCountOutputType
     */
    select?: AnimeAuthorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnimeAuthorCountOutputType without action
   */
  export type AnimeAuthorCountOutputTypeCountAnimeLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeEntryAuthorWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    username: string | null
    bio: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    username: string | null
    bio: string | null
    avatarUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    username: number
    bio: number
    avatarUrl: number
    socialLinks: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    username?: true
    bio?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    username?: true
    bio?: true
    avatarUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    username?: true
    bio?: true
    avatarUrl?: true
    socialLinks?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string | null
    username: string | null
    bio: string | null
    avatarUrl: string | null
    socialLinks: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    username?: boolean
    bio?: boolean
    avatarUrl?: boolean
    socialLinks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    animeEntries?: boolean | User$animeEntriesArgs<ExtArgs>
    animeAuthors?: boolean | User$animeAuthorsArgs<ExtArgs>
    animeRatings?: boolean | User$animeRatingsArgs<ExtArgs>
    roleLinks?: boolean | User$roleLinksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    username?: boolean
    bio?: boolean
    avatarUrl?: boolean
    socialLinks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    username?: boolean
    bio?: boolean
    avatarUrl?: boolean
    socialLinks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    username?: boolean
    bio?: boolean
    avatarUrl?: boolean
    socialLinks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "username" | "bio" | "avatarUrl" | "socialLinks" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animeEntries?: boolean | User$animeEntriesArgs<ExtArgs>
    animeAuthors?: boolean | User$animeAuthorsArgs<ExtArgs>
    animeRatings?: boolean | User$animeRatingsArgs<ExtArgs>
    roleLinks?: boolean | User$roleLinksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      animeEntries: Prisma.$AnimeEntryPayload<ExtArgs>[]
      animeAuthors: Prisma.$AnimeAuthorPayload<ExtArgs>[]
      animeRatings: Prisma.$AnimeRatingPayload<ExtArgs>[]
      roleLinks: Prisma.$UserRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string | null
      username: string | null
      bio: string | null
      avatarUrl: string | null
      socialLinks: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    animeEntries<T extends User$animeEntriesArgs<ExtArgs> = {}>(args?: Subset<T, User$animeEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    animeAuthors<T extends User$animeAuthorsArgs<ExtArgs> = {}>(args?: Subset<T, User$animeAuthorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeAuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    animeRatings<T extends User$animeRatingsArgs<ExtArgs> = {}>(args?: Subset<T, User$animeRatingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    roleLinks<T extends User$roleLinksArgs<ExtArgs> = {}>(args?: Subset<T, User$roleLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly socialLinks: FieldRef<"User", 'Json'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.animeEntries
   */
  export type User$animeEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntry
     */
    select?: AnimeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntry
     */
    omit?: AnimeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryInclude<ExtArgs> | null
    where?: AnimeEntryWhereInput
    orderBy?: AnimeEntryOrderByWithRelationInput | AnimeEntryOrderByWithRelationInput[]
    cursor?: AnimeEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimeEntryScalarFieldEnum | AnimeEntryScalarFieldEnum[]
  }

  /**
   * User.animeAuthors
   */
  export type User$animeAuthorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeAuthor
     */
    select?: AnimeAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeAuthor
     */
    omit?: AnimeAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeAuthorInclude<ExtArgs> | null
    where?: AnimeAuthorWhereInput
    orderBy?: AnimeAuthorOrderByWithRelationInput | AnimeAuthorOrderByWithRelationInput[]
    cursor?: AnimeAuthorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimeAuthorScalarFieldEnum | AnimeAuthorScalarFieldEnum[]
  }

  /**
   * User.animeRatings
   */
  export type User$animeRatingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeRating
     */
    select?: AnimeRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeRating
     */
    omit?: AnimeRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeRatingInclude<ExtArgs> | null
    where?: AnimeRatingWhereInput
    orderBy?: AnimeRatingOrderByWithRelationInput | AnimeRatingOrderByWithRelationInput[]
    cursor?: AnimeRatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimeRatingScalarFieldEnum | AnimeRatingScalarFieldEnum[]
  }

  /**
   * User.roleLinks
   */
  export type User$roleLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userLinks?: boolean | Role$userLinksArgs<ExtArgs>
    permissions?: boolean | Role$permissionsArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userLinks?: boolean | Role$userLinksArgs<ExtArgs>
    permissions?: boolean | Role$permissionsArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      userLinks: Prisma.$UserRolePayload<ExtArgs>[]
      permissions: Prisma.$RolePermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
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
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userLinks<T extends Role$userLinksArgs<ExtArgs> = {}>(args?: Subset<T, Role$userLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    permissions<T extends Role$permissionsArgs<ExtArgs> = {}>(args?: Subset<T, Role$permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'String'>
    readonly description: FieldRef<"Role", 'String'>
    readonly createdAt: FieldRef<"Role", 'DateTime'>
    readonly updatedAt: FieldRef<"Role", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.userLinks
   */
  export type Role$userLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * Role.permissions
   */
  export type Role$permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    where?: RolePermissionWhereInput
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    cursor?: RolePermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model Permission
   */

  export type AggregatePermission = {
    _count: PermissionCountAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  export type PermissionMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PermissionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PermissionCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PermissionMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PermissionMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PermissionCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permission to aggregate.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissions
    **/
    _count?: true | PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionMaxAggregateInputType
  }

  export type GetPermissionAggregateType<T extends PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregatePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermission[P]>
      : GetScalarType<T[P], AggregatePermission[P]>
  }




  export type PermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionWhereInput
    orderBy?: PermissionOrderByWithAggregationInput | PermissionOrderByWithAggregationInput[]
    by: PermissionScalarFieldEnum[] | PermissionScalarFieldEnum
    having?: PermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionCountAggregateInputType | true
    _min?: PermissionMinAggregateInputType
    _max?: PermissionMaxAggregateInputType
  }

  export type PermissionGroupByOutputType = {
    id: string
    name: string
    description: string | null
    createdAt: Date
    updatedAt: Date
    _count: PermissionCountAggregateOutputType | null
    _min: PermissionMinAggregateOutputType | null
    _max: PermissionMaxAggregateOutputType | null
  }

  type GetPermissionGroupByPayload<T extends PermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionGroupByOutputType[P]>
        }
      >
    >


  export type PermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roles?: boolean | Permission$rolesArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["permission"]>

  export type PermissionSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt", ExtArgs["result"]["permission"]>
  export type PermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | Permission$rolesArgs<ExtArgs>
    _count?: boolean | PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PermissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permission"
    objects: {
      roles: Prisma.$RolePermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["permission"]>
    composites: {}
  }

  type PermissionGetPayload<S extends boolean | null | undefined | PermissionDefaultArgs> = $Result.GetResult<Prisma.$PermissionPayload, S>

  type PermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissionCountAggregateInputType | true
    }

  export interface PermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permission'], meta: { name: 'Permission' } }
    /**
     * Find zero or one Permission that matches the filter.
     * @param {PermissionFindUniqueArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionFindUniqueArgs>(args: SelectSubset<T, PermissionFindUniqueArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermissionFindUniqueOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionFindFirstArgs>(args?: SelectSubset<T, PermissionFindFirstArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindFirstOrThrowArgs} args - Arguments to find a Permission
     * @example
     * // Get one Permission
     * const permission = await prisma.permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permission.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionWithIdOnly = await prisma.permission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermissionFindManyArgs>(args?: SelectSubset<T, PermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permission.
     * @param {PermissionCreateArgs} args - Arguments to create a Permission.
     * @example
     * // Create one Permission
     * const Permission = await prisma.permission.create({
     *   data: {
     *     // ... data to create a Permission
     *   }
     * })
     * 
     */
    create<T extends PermissionCreateArgs>(args: SelectSubset<T, PermissionCreateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permissions.
     * @param {PermissionCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionCreateManyArgs>(args?: SelectSubset<T, PermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permissions and returns the data saved in the database.
     * @param {PermissionCreateManyAndReturnArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permission = await prisma.permission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, PermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Permission.
     * @param {PermissionDeleteArgs} args - Arguments to delete one Permission.
     * @example
     * // Delete one Permission
     * const Permission = await prisma.permission.delete({
     *   where: {
     *     // ... filter to delete one Permission
     *   }
     * })
     * 
     */
    delete<T extends PermissionDeleteArgs>(args: SelectSubset<T, PermissionDeleteArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permission.
     * @param {PermissionUpdateArgs} args - Arguments to update one Permission.
     * @example
     * // Update one Permission
     * const permission = await prisma.permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionUpdateArgs>(args: SelectSubset<T, PermissionUpdateArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permissions.
     * @param {PermissionDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionDeleteManyArgs>(args?: SelectSubset<T, PermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionUpdateManyArgs>(args: SelectSubset<T, PermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions and returns the data updated in the database.
     * @param {PermissionUpdateManyAndReturnArgs} args - Arguments to update many Permissions.
     * @example
     * // Update many Permissions
     * const permission = await prisma.permission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Permissions and only return the `id`
     * const permissionWithIdOnly = await prisma.permission.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PermissionUpdateManyAndReturnArgs>(args: SelectSubset<T, PermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Permission.
     * @param {PermissionUpsertArgs} args - Arguments to update or create a Permission.
     * @example
     * // Update or create a Permission
     * const permission = await prisma.permission.upsert({
     *   create: {
     *     // ... data to create a Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permission we want to update
     *   }
     * })
     */
    upsert<T extends PermissionUpsertArgs>(args: SelectSubset<T, PermissionUpsertArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permission.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends PermissionCountArgs>(
      args?: Subset<T, PermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PermissionAggregateArgs>(args: Subset<T, PermissionAggregateArgs>): Prisma.PrismaPromise<GetPermissionAggregateType<T>>

    /**
     * Group by Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionGroupByArgs} args - Group by arguments.
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
      T extends PermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionGroupByArgs['orderBy'] }
        : { orderBy?: PermissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permission model
   */
  readonly fields: PermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends Permission$rolesArgs<ExtArgs> = {}>(args?: Subset<T, Permission$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Permission model
   */
  interface PermissionFieldRefs {
    readonly id: FieldRef<"Permission", 'String'>
    readonly name: FieldRef<"Permission", 'String'>
    readonly description: FieldRef<"Permission", 'String'>
    readonly createdAt: FieldRef<"Permission", 'DateTime'>
    readonly updatedAt: FieldRef<"Permission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Permission findUnique
   */
  export type PermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findUniqueOrThrow
   */
  export type PermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission findFirst
   */
  export type PermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findFirstOrThrow
   */
  export type PermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permission to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission findMany
   */
  export type PermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionOrderByWithRelationInput | PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissions.
     */
    cursor?: PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    distinct?: PermissionScalarFieldEnum | PermissionScalarFieldEnum[]
  }

  /**
   * Permission create
   */
  export type PermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Permission.
     */
    data: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
  }

  /**
   * Permission createMany
   */
  export type PermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission createManyAndReturn
   */
  export type PermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * The data used to create many Permissions.
     */
    data: PermissionCreateManyInput | PermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permission update
   */
  export type PermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Permission.
     */
    data: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
    /**
     * Choose, which Permission to update.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission updateMany
   */
  export type PermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
  }

  /**
   * Permission updateManyAndReturn
   */
  export type PermissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionUpdateManyMutationInput, PermissionUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
  }

  /**
   * Permission upsert
   */
  export type PermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Permission to update in case it exists.
     */
    where: PermissionWhereUniqueInput
    /**
     * In case the Permission found by the `where` argument doesn't exist, create a new Permission with this data.
     */
    create: XOR<PermissionCreateInput, PermissionUncheckedCreateInput>
    /**
     * In case the Permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionUpdateInput, PermissionUncheckedUpdateInput>
  }

  /**
   * Permission delete
   */
  export type PermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
    /**
     * Filter which Permission to delete.
     */
    where: PermissionWhereUniqueInput
  }

  /**
   * Permission deleteMany
   */
  export type PermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissions to delete
     */
    where?: PermissionWhereInput
    /**
     * Limit how many Permissions to delete.
     */
    limit?: number
  }

  /**
   * Permission.roles
   */
  export type Permission$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    where?: RolePermissionWhereInput
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    cursor?: RolePermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * Permission without action
   */
  export type PermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permission
     */
    select?: PermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permission
     */
    omit?: PermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionInclude<ExtArgs> | null
  }


  /**
   * Model UserRole
   */

  export type AggregateUserRole = {
    _count: UserRoleCountAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  export type UserRoleMinAggregateOutputType = {
    userId: string | null
    roleId: string | null
    createdAt: Date | null
  }

  export type UserRoleMaxAggregateOutputType = {
    userId: string | null
    roleId: string | null
    createdAt: Date | null
  }

  export type UserRoleCountAggregateOutputType = {
    userId: number
    roleId: number
    createdAt: number
    _all: number
  }


  export type UserRoleMinAggregateInputType = {
    userId?: true
    roleId?: true
    createdAt?: true
  }

  export type UserRoleMaxAggregateInputType = {
    userId?: true
    roleId?: true
    createdAt?: true
  }

  export type UserRoleCountAggregateInputType = {
    userId?: true
    roleId?: true
    createdAt?: true
    _all?: true
  }

  export type UserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRole to aggregate.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRoles
    **/
    _count?: true | UserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRoleMaxAggregateInputType
  }

  export type GetUserRoleAggregateType<T extends UserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRole[P]>
      : GetScalarType<T[P], AggregateUserRole[P]>
  }




  export type UserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithAggregationInput | UserRoleOrderByWithAggregationInput[]
    by: UserRoleScalarFieldEnum[] | UserRoleScalarFieldEnum
    having?: UserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRoleCountAggregateInputType | true
    _min?: UserRoleMinAggregateInputType
    _max?: UserRoleMaxAggregateInputType
  }

  export type UserRoleGroupByOutputType = {
    userId: string
    roleId: string
    createdAt: Date
    _count: UserRoleCountAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  type GetUserRoleGroupByPayload<T extends UserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
        }
      >
    >


  export type UserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectScalar = {
    userId?: boolean
    roleId?: boolean
    createdAt?: boolean
  }

  export type UserRoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "roleId" | "createdAt", ExtArgs["result"]["userRole"]>
  export type UserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserRoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRole"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      roleId: string
      createdAt: Date
    }, ExtArgs["result"]["userRole"]>
    composites: {}
  }

  type UserRoleGetPayload<S extends boolean | null | undefined | UserRoleDefaultArgs> = $Result.GetResult<Prisma.$UserRolePayload, S>

  type UserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserRoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserRoleCountAggregateInputType | true
    }

  export interface UserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRole'], meta: { name: 'UserRole' } }
    /**
     * Find zero or one UserRole that matches the filter.
     * @param {UserRoleFindUniqueArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRoleFindUniqueArgs>(args: SelectSubset<T, UserRoleFindUniqueArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserRole that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserRoleFindUniqueOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRoleFindFirstArgs>(args?: SelectSubset<T, UserRoleFindFirstArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoles
     * const userRoles = await prisma.userRole.findMany()
     * 
     * // Get first 10 UserRoles
     * const userRoles = await prisma.userRole.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userRoleWithUserIdOnly = await prisma.userRole.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserRoleFindManyArgs>(args?: SelectSubset<T, UserRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserRole.
     * @param {UserRoleCreateArgs} args - Arguments to create a UserRole.
     * @example
     * // Create one UserRole
     * const UserRole = await prisma.userRole.create({
     *   data: {
     *     // ... data to create a UserRole
     *   }
     * })
     * 
     */
    create<T extends UserRoleCreateArgs>(args: SelectSubset<T, UserRoleCreateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserRoles.
     * @param {UserRoleCreateManyArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRoleCreateManyArgs>(args?: SelectSubset<T, UserRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserRoles and returns the data saved in the database.
     * @param {UserRoleCreateManyAndReturnArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserRoles and only return the `userId`
     * const userRoleWithUserIdOnly = await prisma.userRole.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, UserRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserRole.
     * @param {UserRoleDeleteArgs} args - Arguments to delete one UserRole.
     * @example
     * // Delete one UserRole
     * const UserRole = await prisma.userRole.delete({
     *   where: {
     *     // ... filter to delete one UserRole
     *   }
     * })
     * 
     */
    delete<T extends UserRoleDeleteArgs>(args: SelectSubset<T, UserRoleDeleteArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserRole.
     * @param {UserRoleUpdateArgs} args - Arguments to update one UserRole.
     * @example
     * // Update one UserRole
     * const userRole = await prisma.userRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRoleUpdateArgs>(args: SelectSubset<T, UserRoleUpdateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserRoles.
     * @param {UserRoleDeleteManyArgs} args - Arguments to filter UserRoles to delete.
     * @example
     * // Delete a few UserRoles
     * const { count } = await prisma.userRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRoleDeleteManyArgs>(args?: SelectSubset<T, UserRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRoleUpdateManyArgs>(args: SelectSubset<T, UserRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles and returns the data updated in the database.
     * @param {UserRoleUpdateManyAndReturnArgs} args - Arguments to update many UserRoles.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserRoles and only return the `userId`
     * const userRoleWithUserIdOnly = await prisma.userRole.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserRoleUpdateManyAndReturnArgs>(args: SelectSubset<T, UserRoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserRole.
     * @param {UserRoleUpsertArgs} args - Arguments to update or create a UserRole.
     * @example
     * // Update or create a UserRole
     * const userRole = await prisma.userRole.upsert({
     *   create: {
     *     // ... data to create a UserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRole we want to update
     *   }
     * })
     */
    upsert<T extends UserRoleUpsertArgs>(args: SelectSubset<T, UserRoleUpsertArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleCountArgs} args - Arguments to filter UserRoles to count.
     * @example
     * // Count the number of UserRoles
     * const count = await prisma.userRole.count({
     *   where: {
     *     // ... the filter for the UserRoles we want to count
     *   }
     * })
    **/
    count<T extends UserRoleCountArgs>(
      args?: Subset<T, UserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserRoleAggregateArgs>(args: Subset<T, UserRoleAggregateArgs>): Prisma.PrismaPromise<GetUserRoleAggregateType<T>>

    /**
     * Group by UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleGroupByArgs} args - Group by arguments.
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
      T extends UserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRoleGroupByArgs['orderBy'] }
        : { orderBy?: UserRoleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRole model
   */
  readonly fields: UserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserRole model
   */
  interface UserRoleFieldRefs {
    readonly userId: FieldRef<"UserRole", 'String'>
    readonly roleId: FieldRef<"UserRole", 'String'>
    readonly createdAt: FieldRef<"UserRole", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserRole findUnique
   */
  export type UserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findUniqueOrThrow
   */
  export type UserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findFirst
   */
  export type UserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findFirstOrThrow
   */
  export type UserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findMany
   */
  export type UserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRoles to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole create
   */
  export type UserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRole.
     */
    data: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
  }

  /**
   * UserRole createMany
   */
  export type UserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRole createManyAndReturn
   */
  export type UserRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRole update
   */
  export type UserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRole.
     */
    data: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
    /**
     * Choose, which UserRole to update.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole updateMany
   */
  export type UserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
  }

  /**
   * UserRole updateManyAndReturn
   */
  export type UserRoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRole upsert
   */
  export type UserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRole to update in case it exists.
     */
    where: UserRoleWhereUniqueInput
    /**
     * In case the UserRole found by the `where` argument doesn't exist, create a new UserRole with this data.
     */
    create: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
    /**
     * In case the UserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
  }

  /**
   * UserRole delete
   */
  export type UserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter which UserRole to delete.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole deleteMany
   */
  export type UserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoles to delete
     */
    where?: UserRoleWhereInput
    /**
     * Limit how many UserRoles to delete.
     */
    limit?: number
  }

  /**
   * UserRole without action
   */
  export type UserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserRole
     */
    omit?: UserRoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
  }


  /**
   * Model RolePermission
   */

  export type AggregateRolePermission = {
    _count: RolePermissionCountAggregateOutputType | null
    _min: RolePermissionMinAggregateOutputType | null
    _max: RolePermissionMaxAggregateOutputType | null
  }

  export type RolePermissionMinAggregateOutputType = {
    roleId: string | null
    permissionId: string | null
    createdAt: Date | null
  }

  export type RolePermissionMaxAggregateOutputType = {
    roleId: string | null
    permissionId: string | null
    createdAt: Date | null
  }

  export type RolePermissionCountAggregateOutputType = {
    roleId: number
    permissionId: number
    createdAt: number
    _all: number
  }


  export type RolePermissionMinAggregateInputType = {
    roleId?: true
    permissionId?: true
    createdAt?: true
  }

  export type RolePermissionMaxAggregateInputType = {
    roleId?: true
    permissionId?: true
    createdAt?: true
  }

  export type RolePermissionCountAggregateInputType = {
    roleId?: true
    permissionId?: true
    createdAt?: true
    _all?: true
  }

  export type RolePermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolePermission to aggregate.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RolePermissions
    **/
    _count?: true | RolePermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RolePermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RolePermissionMaxAggregateInputType
  }

  export type GetRolePermissionAggregateType<T extends RolePermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateRolePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRolePermission[P]>
      : GetScalarType<T[P], AggregateRolePermission[P]>
  }




  export type RolePermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RolePermissionWhereInput
    orderBy?: RolePermissionOrderByWithAggregationInput | RolePermissionOrderByWithAggregationInput[]
    by: RolePermissionScalarFieldEnum[] | RolePermissionScalarFieldEnum
    having?: RolePermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RolePermissionCountAggregateInputType | true
    _min?: RolePermissionMinAggregateInputType
    _max?: RolePermissionMaxAggregateInputType
  }

  export type RolePermissionGroupByOutputType = {
    roleId: string
    permissionId: string
    createdAt: Date
    _count: RolePermissionCountAggregateOutputType | null
    _min: RolePermissionMinAggregateOutputType | null
    _max: RolePermissionMaxAggregateOutputType | null
  }

  type GetRolePermissionGroupByPayload<T extends RolePermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RolePermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RolePermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RolePermissionGroupByOutputType[P]>
            : GetScalarType<T[P], RolePermissionGroupByOutputType[P]>
        }
      >
    >


  export type RolePermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    permissionId?: boolean
    createdAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolePermission"]>

  export type RolePermissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    permissionId?: boolean
    createdAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolePermission"]>

  export type RolePermissionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    permissionId?: boolean
    createdAt?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rolePermission"]>

  export type RolePermissionSelectScalar = {
    roleId?: boolean
    permissionId?: boolean
    createdAt?: boolean
  }

  export type RolePermissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"roleId" | "permissionId" | "createdAt", ExtArgs["result"]["rolePermission"]>
  export type RolePermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }
  export type RolePermissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }
  export type RolePermissionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    permission?: boolean | PermissionDefaultArgs<ExtArgs>
  }

  export type $RolePermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RolePermission"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      permission: Prisma.$PermissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      roleId: string
      permissionId: string
      createdAt: Date
    }, ExtArgs["result"]["rolePermission"]>
    composites: {}
  }

  type RolePermissionGetPayload<S extends boolean | null | undefined | RolePermissionDefaultArgs> = $Result.GetResult<Prisma.$RolePermissionPayload, S>

  type RolePermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RolePermissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RolePermissionCountAggregateInputType | true
    }

  export interface RolePermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RolePermission'], meta: { name: 'RolePermission' } }
    /**
     * Find zero or one RolePermission that matches the filter.
     * @param {RolePermissionFindUniqueArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RolePermissionFindUniqueArgs>(args: SelectSubset<T, RolePermissionFindUniqueArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RolePermission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RolePermissionFindUniqueOrThrowArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RolePermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, RolePermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolePermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindFirstArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RolePermissionFindFirstArgs>(args?: SelectSubset<T, RolePermissionFindFirstArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RolePermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindFirstOrThrowArgs} args - Arguments to find a RolePermission
     * @example
     * // Get one RolePermission
     * const rolePermission = await prisma.rolePermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RolePermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, RolePermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RolePermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RolePermissions
     * const rolePermissions = await prisma.rolePermission.findMany()
     * 
     * // Get first 10 RolePermissions
     * const rolePermissions = await prisma.rolePermission.findMany({ take: 10 })
     * 
     * // Only select the `roleId`
     * const rolePermissionWithRoleIdOnly = await prisma.rolePermission.findMany({ select: { roleId: true } })
     * 
     */
    findMany<T extends RolePermissionFindManyArgs>(args?: SelectSubset<T, RolePermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RolePermission.
     * @param {RolePermissionCreateArgs} args - Arguments to create a RolePermission.
     * @example
     * // Create one RolePermission
     * const RolePermission = await prisma.rolePermission.create({
     *   data: {
     *     // ... data to create a RolePermission
     *   }
     * })
     * 
     */
    create<T extends RolePermissionCreateArgs>(args: SelectSubset<T, RolePermissionCreateArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RolePermissions.
     * @param {RolePermissionCreateManyArgs} args - Arguments to create many RolePermissions.
     * @example
     * // Create many RolePermissions
     * const rolePermission = await prisma.rolePermission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RolePermissionCreateManyArgs>(args?: SelectSubset<T, RolePermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RolePermissions and returns the data saved in the database.
     * @param {RolePermissionCreateManyAndReturnArgs} args - Arguments to create many RolePermissions.
     * @example
     * // Create many RolePermissions
     * const rolePermission = await prisma.rolePermission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RolePermissions and only return the `roleId`
     * const rolePermissionWithRoleIdOnly = await prisma.rolePermission.createManyAndReturn({
     *   select: { roleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RolePermissionCreateManyAndReturnArgs>(args?: SelectSubset<T, RolePermissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RolePermission.
     * @param {RolePermissionDeleteArgs} args - Arguments to delete one RolePermission.
     * @example
     * // Delete one RolePermission
     * const RolePermission = await prisma.rolePermission.delete({
     *   where: {
     *     // ... filter to delete one RolePermission
     *   }
     * })
     * 
     */
    delete<T extends RolePermissionDeleteArgs>(args: SelectSubset<T, RolePermissionDeleteArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RolePermission.
     * @param {RolePermissionUpdateArgs} args - Arguments to update one RolePermission.
     * @example
     * // Update one RolePermission
     * const rolePermission = await prisma.rolePermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RolePermissionUpdateArgs>(args: SelectSubset<T, RolePermissionUpdateArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RolePermissions.
     * @param {RolePermissionDeleteManyArgs} args - Arguments to filter RolePermissions to delete.
     * @example
     * // Delete a few RolePermissions
     * const { count } = await prisma.rolePermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RolePermissionDeleteManyArgs>(args?: SelectSubset<T, RolePermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RolePermissions
     * const rolePermission = await prisma.rolePermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RolePermissionUpdateManyArgs>(args: SelectSubset<T, RolePermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RolePermissions and returns the data updated in the database.
     * @param {RolePermissionUpdateManyAndReturnArgs} args - Arguments to update many RolePermissions.
     * @example
     * // Update many RolePermissions
     * const rolePermission = await prisma.rolePermission.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RolePermissions and only return the `roleId`
     * const rolePermissionWithRoleIdOnly = await prisma.rolePermission.updateManyAndReturn({
     *   select: { roleId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RolePermissionUpdateManyAndReturnArgs>(args: SelectSubset<T, RolePermissionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RolePermission.
     * @param {RolePermissionUpsertArgs} args - Arguments to update or create a RolePermission.
     * @example
     * // Update or create a RolePermission
     * const rolePermission = await prisma.rolePermission.upsert({
     *   create: {
     *     // ... data to create a RolePermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RolePermission we want to update
     *   }
     * })
     */
    upsert<T extends RolePermissionUpsertArgs>(args: SelectSubset<T, RolePermissionUpsertArgs<ExtArgs>>): Prisma__RolePermissionClient<$Result.GetResult<Prisma.$RolePermissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionCountArgs} args - Arguments to filter RolePermissions to count.
     * @example
     * // Count the number of RolePermissions
     * const count = await prisma.rolePermission.count({
     *   where: {
     *     // ... the filter for the RolePermissions we want to count
     *   }
     * })
    **/
    count<T extends RolePermissionCountArgs>(
      args?: Subset<T, RolePermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RolePermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RolePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RolePermissionAggregateArgs>(args: Subset<T, RolePermissionAggregateArgs>): Prisma.PrismaPromise<GetRolePermissionAggregateType<T>>

    /**
     * Group by RolePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RolePermissionGroupByArgs} args - Group by arguments.
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
      T extends RolePermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RolePermissionGroupByArgs['orderBy'] }
        : { orderBy?: RolePermissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RolePermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRolePermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RolePermission model
   */
  readonly fields: RolePermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RolePermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RolePermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    permission<T extends PermissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PermissionDefaultArgs<ExtArgs>>): Prisma__PermissionClient<$Result.GetResult<Prisma.$PermissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RolePermission model
   */
  interface RolePermissionFieldRefs {
    readonly roleId: FieldRef<"RolePermission", 'String'>
    readonly permissionId: FieldRef<"RolePermission", 'String'>
    readonly createdAt: FieldRef<"RolePermission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RolePermission findUnique
   */
  export type RolePermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission findUniqueOrThrow
   */
  export type RolePermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission findFirst
   */
  export type RolePermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolePermissions.
     */
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * RolePermission findFirstOrThrow
   */
  export type RolePermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermission to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RolePermissions.
     */
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * RolePermission findMany
   */
  export type RolePermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which RolePermissions to fetch.
     */
    where?: RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RolePermissions to fetch.
     */
    orderBy?: RolePermissionOrderByWithRelationInput | RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RolePermissions.
     */
    cursor?: RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RolePermissions.
     */
    skip?: number
    distinct?: RolePermissionScalarFieldEnum | RolePermissionScalarFieldEnum[]
  }

  /**
   * RolePermission create
   */
  export type RolePermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a RolePermission.
     */
    data: XOR<RolePermissionCreateInput, RolePermissionUncheckedCreateInput>
  }

  /**
   * RolePermission createMany
   */
  export type RolePermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RolePermissions.
     */
    data: RolePermissionCreateManyInput | RolePermissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RolePermission createManyAndReturn
   */
  export type RolePermissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * The data used to create many RolePermissions.
     */
    data: RolePermissionCreateManyInput | RolePermissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RolePermission update
   */
  export type RolePermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a RolePermission.
     */
    data: XOR<RolePermissionUpdateInput, RolePermissionUncheckedUpdateInput>
    /**
     * Choose, which RolePermission to update.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission updateMany
   */
  export type RolePermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RolePermissions.
     */
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyInput>
    /**
     * Filter which RolePermissions to update
     */
    where?: RolePermissionWhereInput
    /**
     * Limit how many RolePermissions to update.
     */
    limit?: number
  }

  /**
   * RolePermission updateManyAndReturn
   */
  export type RolePermissionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * The data used to update RolePermissions.
     */
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyInput>
    /**
     * Filter which RolePermissions to update
     */
    where?: RolePermissionWhereInput
    /**
     * Limit how many RolePermissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RolePermission upsert
   */
  export type RolePermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the RolePermission to update in case it exists.
     */
    where: RolePermissionWhereUniqueInput
    /**
     * In case the RolePermission found by the `where` argument doesn't exist, create a new RolePermission with this data.
     */
    create: XOR<RolePermissionCreateInput, RolePermissionUncheckedCreateInput>
    /**
     * In case the RolePermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RolePermissionUpdateInput, RolePermissionUncheckedUpdateInput>
  }

  /**
   * RolePermission delete
   */
  export type RolePermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
    /**
     * Filter which RolePermission to delete.
     */
    where: RolePermissionWhereUniqueInput
  }

  /**
   * RolePermission deleteMany
   */
  export type RolePermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RolePermissions to delete
     */
    where?: RolePermissionWhereInput
    /**
     * Limit how many RolePermissions to delete.
     */
    limit?: number
  }

  /**
   * RolePermission without action
   */
  export type RolePermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RolePermission
     */
    select?: RolePermissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RolePermission
     */
    omit?: RolePermissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RolePermissionInclude<ExtArgs> | null
  }


  /**
   * Model AnimeEntry
   */

  export type AggregateAnimeEntry = {
    _count: AnimeEntryCountAggregateOutputType | null
    _avg: AnimeEntryAvgAggregateOutputType | null
    _sum: AnimeEntrySumAggregateOutputType | null
    _min: AnimeEntryMinAggregateOutputType | null
    _max: AnimeEntryMaxAggregateOutputType | null
  }

  export type AnimeEntryAvgAggregateOutputType = {
    viewCount: number | null
  }

  export type AnimeEntrySumAggregateOutputType = {
    viewCount: number | null
  }

  export type AnimeEntryMinAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    description: string | null
    coverImageUrl: string | null
    status: $Enums.WatchStatus | null
    airedFrom: Date | null
    airedTo: Date | null
    airedStatus: $Enums.AnimeAiredStatus | null
    viewCount: number | null
    notes: string | null
    userId: string | null
    typeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnimeEntryMaxAggregateOutputType = {
    id: string | null
    slug: string | null
    title: string | null
    description: string | null
    coverImageUrl: string | null
    status: $Enums.WatchStatus | null
    airedFrom: Date | null
    airedTo: Date | null
    airedStatus: $Enums.AnimeAiredStatus | null
    viewCount: number | null
    notes: string | null
    userId: string | null
    typeId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnimeEntryCountAggregateOutputType = {
    id: number
    slug: number
    title: number
    description: number
    coverImageUrl: number
    status: number
    airedFrom: number
    airedTo: number
    airedStatus: number
    viewCount: number
    notes: number
    userId: number
    typeId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnimeEntryAvgAggregateInputType = {
    viewCount?: true
  }

  export type AnimeEntrySumAggregateInputType = {
    viewCount?: true
  }

  export type AnimeEntryMinAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    description?: true
    coverImageUrl?: true
    status?: true
    airedFrom?: true
    airedTo?: true
    airedStatus?: true
    viewCount?: true
    notes?: true
    userId?: true
    typeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnimeEntryMaxAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    description?: true
    coverImageUrl?: true
    status?: true
    airedFrom?: true
    airedTo?: true
    airedStatus?: true
    viewCount?: true
    notes?: true
    userId?: true
    typeId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnimeEntryCountAggregateInputType = {
    id?: true
    slug?: true
    title?: true
    description?: true
    coverImageUrl?: true
    status?: true
    airedFrom?: true
    airedTo?: true
    airedStatus?: true
    viewCount?: true
    notes?: true
    userId?: true
    typeId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnimeEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnimeEntry to aggregate.
     */
    where?: AnimeEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeEntries to fetch.
     */
    orderBy?: AnimeEntryOrderByWithRelationInput | AnimeEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnimeEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnimeEntries
    **/
    _count?: true | AnimeEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnimeEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnimeEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnimeEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnimeEntryMaxAggregateInputType
  }

  export type GetAnimeEntryAggregateType<T extends AnimeEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateAnimeEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnimeEntry[P]>
      : GetScalarType<T[P], AggregateAnimeEntry[P]>
  }




  export type AnimeEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeEntryWhereInput
    orderBy?: AnimeEntryOrderByWithAggregationInput | AnimeEntryOrderByWithAggregationInput[]
    by: AnimeEntryScalarFieldEnum[] | AnimeEntryScalarFieldEnum
    having?: AnimeEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnimeEntryCountAggregateInputType | true
    _avg?: AnimeEntryAvgAggregateInputType
    _sum?: AnimeEntrySumAggregateInputType
    _min?: AnimeEntryMinAggregateInputType
    _max?: AnimeEntryMaxAggregateInputType
  }

  export type AnimeEntryGroupByOutputType = {
    id: string
    slug: string
    title: string
    description: string
    coverImageUrl: string
    status: $Enums.WatchStatus
    airedFrom: Date | null
    airedTo: Date | null
    airedStatus: $Enums.AnimeAiredStatus
    viewCount: number
    notes: string | null
    userId: string
    typeId: string | null
    createdAt: Date
    updatedAt: Date
    _count: AnimeEntryCountAggregateOutputType | null
    _avg: AnimeEntryAvgAggregateOutputType | null
    _sum: AnimeEntrySumAggregateOutputType | null
    _min: AnimeEntryMinAggregateOutputType | null
    _max: AnimeEntryMaxAggregateOutputType | null
  }

  type GetAnimeEntryGroupByPayload<T extends AnimeEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnimeEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnimeEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnimeEntryGroupByOutputType[P]>
            : GetScalarType<T[P], AnimeEntryGroupByOutputType[P]>
        }
      >
    >


  export type AnimeEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    coverImageUrl?: boolean
    status?: boolean
    airedFrom?: boolean
    airedTo?: boolean
    airedStatus?: boolean
    viewCount?: boolean
    notes?: boolean
    userId?: boolean
    typeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    episodes?: boolean | AnimeEntry$episodesArgs<ExtArgs>
    authorLinks?: boolean | AnimeEntry$authorLinksArgs<ExtArgs>
    ratings?: boolean | AnimeEntry$ratingsArgs<ExtArgs>
    genreLinks?: boolean | AnimeEntry$genreLinksArgs<ExtArgs>
    type?: boolean | AnimeEntry$typeArgs<ExtArgs>
    _count?: boolean | AnimeEntryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animeEntry"]>

  export type AnimeEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    coverImageUrl?: boolean
    status?: boolean
    airedFrom?: boolean
    airedTo?: boolean
    airedStatus?: boolean
    viewCount?: boolean
    notes?: boolean
    userId?: boolean
    typeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    type?: boolean | AnimeEntry$typeArgs<ExtArgs>
  }, ExtArgs["result"]["animeEntry"]>

  export type AnimeEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    coverImageUrl?: boolean
    status?: boolean
    airedFrom?: boolean
    airedTo?: boolean
    airedStatus?: boolean
    viewCount?: boolean
    notes?: boolean
    userId?: boolean
    typeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    type?: boolean | AnimeEntry$typeArgs<ExtArgs>
  }, ExtArgs["result"]["animeEntry"]>

  export type AnimeEntrySelectScalar = {
    id?: boolean
    slug?: boolean
    title?: boolean
    description?: boolean
    coverImageUrl?: boolean
    status?: boolean
    airedFrom?: boolean
    airedTo?: boolean
    airedStatus?: boolean
    viewCount?: boolean
    notes?: boolean
    userId?: boolean
    typeId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnimeEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "slug" | "title" | "description" | "coverImageUrl" | "status" | "airedFrom" | "airedTo" | "airedStatus" | "viewCount" | "notes" | "userId" | "typeId" | "createdAt" | "updatedAt", ExtArgs["result"]["animeEntry"]>
  export type AnimeEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    episodes?: boolean | AnimeEntry$episodesArgs<ExtArgs>
    authorLinks?: boolean | AnimeEntry$authorLinksArgs<ExtArgs>
    ratings?: boolean | AnimeEntry$ratingsArgs<ExtArgs>
    genreLinks?: boolean | AnimeEntry$genreLinksArgs<ExtArgs>
    type?: boolean | AnimeEntry$typeArgs<ExtArgs>
    _count?: boolean | AnimeEntryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnimeEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    type?: boolean | AnimeEntry$typeArgs<ExtArgs>
  }
  export type AnimeEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    type?: boolean | AnimeEntry$typeArgs<ExtArgs>
  }

  export type $AnimeEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnimeEntry"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      episodes: Prisma.$AnimeEpisodePayload<ExtArgs>[]
      authorLinks: Prisma.$AnimeEntryAuthorPayload<ExtArgs>[]
      ratings: Prisma.$AnimeRatingPayload<ExtArgs>[]
      genreLinks: Prisma.$AnimeEntryGenrePayload<ExtArgs>[]
      type: Prisma.$AnimeTypePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      slug: string
      title: string
      description: string
      coverImageUrl: string
      status: $Enums.WatchStatus
      airedFrom: Date | null
      airedTo: Date | null
      airedStatus: $Enums.AnimeAiredStatus
      viewCount: number
      notes: string | null
      userId: string
      typeId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["animeEntry"]>
    composites: {}
  }

  type AnimeEntryGetPayload<S extends boolean | null | undefined | AnimeEntryDefaultArgs> = $Result.GetResult<Prisma.$AnimeEntryPayload, S>

  type AnimeEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnimeEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnimeEntryCountAggregateInputType | true
    }

  export interface AnimeEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnimeEntry'], meta: { name: 'AnimeEntry' } }
    /**
     * Find zero or one AnimeEntry that matches the filter.
     * @param {AnimeEntryFindUniqueArgs} args - Arguments to find a AnimeEntry
     * @example
     * // Get one AnimeEntry
     * const animeEntry = await prisma.animeEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnimeEntryFindUniqueArgs>(args: SelectSubset<T, AnimeEntryFindUniqueArgs<ExtArgs>>): Prisma__AnimeEntryClient<$Result.GetResult<Prisma.$AnimeEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnimeEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnimeEntryFindUniqueOrThrowArgs} args - Arguments to find a AnimeEntry
     * @example
     * // Get one AnimeEntry
     * const animeEntry = await prisma.animeEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnimeEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, AnimeEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnimeEntryClient<$Result.GetResult<Prisma.$AnimeEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnimeEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeEntryFindFirstArgs} args - Arguments to find a AnimeEntry
     * @example
     * // Get one AnimeEntry
     * const animeEntry = await prisma.animeEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnimeEntryFindFirstArgs>(args?: SelectSubset<T, AnimeEntryFindFirstArgs<ExtArgs>>): Prisma__AnimeEntryClient<$Result.GetResult<Prisma.$AnimeEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnimeEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeEntryFindFirstOrThrowArgs} args - Arguments to find a AnimeEntry
     * @example
     * // Get one AnimeEntry
     * const animeEntry = await prisma.animeEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnimeEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, AnimeEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnimeEntryClient<$Result.GetResult<Prisma.$AnimeEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnimeEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnimeEntries
     * const animeEntries = await prisma.animeEntry.findMany()
     * 
     * // Get first 10 AnimeEntries
     * const animeEntries = await prisma.animeEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const animeEntryWithIdOnly = await prisma.animeEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnimeEntryFindManyArgs>(args?: SelectSubset<T, AnimeEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnimeEntry.
     * @param {AnimeEntryCreateArgs} args - Arguments to create a AnimeEntry.
     * @example
     * // Create one AnimeEntry
     * const AnimeEntry = await prisma.animeEntry.create({
     *   data: {
     *     // ... data to create a AnimeEntry
     *   }
     * })
     * 
     */
    create<T extends AnimeEntryCreateArgs>(args: SelectSubset<T, AnimeEntryCreateArgs<ExtArgs>>): Prisma__AnimeEntryClient<$Result.GetResult<Prisma.$AnimeEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnimeEntries.
     * @param {AnimeEntryCreateManyArgs} args - Arguments to create many AnimeEntries.
     * @example
     * // Create many AnimeEntries
     * const animeEntry = await prisma.animeEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnimeEntryCreateManyArgs>(args?: SelectSubset<T, AnimeEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnimeEntries and returns the data saved in the database.
     * @param {AnimeEntryCreateManyAndReturnArgs} args - Arguments to create many AnimeEntries.
     * @example
     * // Create many AnimeEntries
     * const animeEntry = await prisma.animeEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnimeEntries and only return the `id`
     * const animeEntryWithIdOnly = await prisma.animeEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnimeEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, AnimeEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnimeEntry.
     * @param {AnimeEntryDeleteArgs} args - Arguments to delete one AnimeEntry.
     * @example
     * // Delete one AnimeEntry
     * const AnimeEntry = await prisma.animeEntry.delete({
     *   where: {
     *     // ... filter to delete one AnimeEntry
     *   }
     * })
     * 
     */
    delete<T extends AnimeEntryDeleteArgs>(args: SelectSubset<T, AnimeEntryDeleteArgs<ExtArgs>>): Prisma__AnimeEntryClient<$Result.GetResult<Prisma.$AnimeEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnimeEntry.
     * @param {AnimeEntryUpdateArgs} args - Arguments to update one AnimeEntry.
     * @example
     * // Update one AnimeEntry
     * const animeEntry = await prisma.animeEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnimeEntryUpdateArgs>(args: SelectSubset<T, AnimeEntryUpdateArgs<ExtArgs>>): Prisma__AnimeEntryClient<$Result.GetResult<Prisma.$AnimeEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnimeEntries.
     * @param {AnimeEntryDeleteManyArgs} args - Arguments to filter AnimeEntries to delete.
     * @example
     * // Delete a few AnimeEntries
     * const { count } = await prisma.animeEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnimeEntryDeleteManyArgs>(args?: SelectSubset<T, AnimeEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnimeEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnimeEntries
     * const animeEntry = await prisma.animeEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnimeEntryUpdateManyArgs>(args: SelectSubset<T, AnimeEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnimeEntries and returns the data updated in the database.
     * @param {AnimeEntryUpdateManyAndReturnArgs} args - Arguments to update many AnimeEntries.
     * @example
     * // Update many AnimeEntries
     * const animeEntry = await prisma.animeEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnimeEntries and only return the `id`
     * const animeEntryWithIdOnly = await prisma.animeEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnimeEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, AnimeEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnimeEntry.
     * @param {AnimeEntryUpsertArgs} args - Arguments to update or create a AnimeEntry.
     * @example
     * // Update or create a AnimeEntry
     * const animeEntry = await prisma.animeEntry.upsert({
     *   create: {
     *     // ... data to create a AnimeEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnimeEntry we want to update
     *   }
     * })
     */
    upsert<T extends AnimeEntryUpsertArgs>(args: SelectSubset<T, AnimeEntryUpsertArgs<ExtArgs>>): Prisma__AnimeEntryClient<$Result.GetResult<Prisma.$AnimeEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnimeEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeEntryCountArgs} args - Arguments to filter AnimeEntries to count.
     * @example
     * // Count the number of AnimeEntries
     * const count = await prisma.animeEntry.count({
     *   where: {
     *     // ... the filter for the AnimeEntries we want to count
     *   }
     * })
    **/
    count<T extends AnimeEntryCountArgs>(
      args?: Subset<T, AnimeEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnimeEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnimeEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnimeEntryAggregateArgs>(args: Subset<T, AnimeEntryAggregateArgs>): Prisma.PrismaPromise<GetAnimeEntryAggregateType<T>>

    /**
     * Group by AnimeEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeEntryGroupByArgs} args - Group by arguments.
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
      T extends AnimeEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnimeEntryGroupByArgs['orderBy'] }
        : { orderBy?: AnimeEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnimeEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimeEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnimeEntry model
   */
  readonly fields: AnimeEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnimeEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnimeEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    episodes<T extends AnimeEntry$episodesArgs<ExtArgs> = {}>(args?: Subset<T, AnimeEntry$episodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeEpisodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    authorLinks<T extends AnimeEntry$authorLinksArgs<ExtArgs> = {}>(args?: Subset<T, AnimeEntry$authorLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeEntryAuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ratings<T extends AnimeEntry$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, AnimeEntry$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    genreLinks<T extends AnimeEntry$genreLinksArgs<ExtArgs> = {}>(args?: Subset<T, AnimeEntry$genreLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeEntryGenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    type<T extends AnimeEntry$typeArgs<ExtArgs> = {}>(args?: Subset<T, AnimeEntry$typeArgs<ExtArgs>>): Prisma__AnimeTypeClient<$Result.GetResult<Prisma.$AnimeTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AnimeEntry model
   */
  interface AnimeEntryFieldRefs {
    readonly id: FieldRef<"AnimeEntry", 'String'>
    readonly slug: FieldRef<"AnimeEntry", 'String'>
    readonly title: FieldRef<"AnimeEntry", 'String'>
    readonly description: FieldRef<"AnimeEntry", 'String'>
    readonly coverImageUrl: FieldRef<"AnimeEntry", 'String'>
    readonly status: FieldRef<"AnimeEntry", 'WatchStatus'>
    readonly airedFrom: FieldRef<"AnimeEntry", 'DateTime'>
    readonly airedTo: FieldRef<"AnimeEntry", 'DateTime'>
    readonly airedStatus: FieldRef<"AnimeEntry", 'AnimeAiredStatus'>
    readonly viewCount: FieldRef<"AnimeEntry", 'Int'>
    readonly notes: FieldRef<"AnimeEntry", 'String'>
    readonly userId: FieldRef<"AnimeEntry", 'String'>
    readonly typeId: FieldRef<"AnimeEntry", 'String'>
    readonly createdAt: FieldRef<"AnimeEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"AnimeEntry", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnimeEntry findUnique
   */
  export type AnimeEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntry
     */
    select?: AnimeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntry
     */
    omit?: AnimeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryInclude<ExtArgs> | null
    /**
     * Filter, which AnimeEntry to fetch.
     */
    where: AnimeEntryWhereUniqueInput
  }

  /**
   * AnimeEntry findUniqueOrThrow
   */
  export type AnimeEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntry
     */
    select?: AnimeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntry
     */
    omit?: AnimeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryInclude<ExtArgs> | null
    /**
     * Filter, which AnimeEntry to fetch.
     */
    where: AnimeEntryWhereUniqueInput
  }

  /**
   * AnimeEntry findFirst
   */
  export type AnimeEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntry
     */
    select?: AnimeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntry
     */
    omit?: AnimeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryInclude<ExtArgs> | null
    /**
     * Filter, which AnimeEntry to fetch.
     */
    where?: AnimeEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeEntries to fetch.
     */
    orderBy?: AnimeEntryOrderByWithRelationInput | AnimeEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnimeEntries.
     */
    cursor?: AnimeEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnimeEntries.
     */
    distinct?: AnimeEntryScalarFieldEnum | AnimeEntryScalarFieldEnum[]
  }

  /**
   * AnimeEntry findFirstOrThrow
   */
  export type AnimeEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntry
     */
    select?: AnimeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntry
     */
    omit?: AnimeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryInclude<ExtArgs> | null
    /**
     * Filter, which AnimeEntry to fetch.
     */
    where?: AnimeEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeEntries to fetch.
     */
    orderBy?: AnimeEntryOrderByWithRelationInput | AnimeEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnimeEntries.
     */
    cursor?: AnimeEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnimeEntries.
     */
    distinct?: AnimeEntryScalarFieldEnum | AnimeEntryScalarFieldEnum[]
  }

  /**
   * AnimeEntry findMany
   */
  export type AnimeEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntry
     */
    select?: AnimeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntry
     */
    omit?: AnimeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryInclude<ExtArgs> | null
    /**
     * Filter, which AnimeEntries to fetch.
     */
    where?: AnimeEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeEntries to fetch.
     */
    orderBy?: AnimeEntryOrderByWithRelationInput | AnimeEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnimeEntries.
     */
    cursor?: AnimeEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeEntries.
     */
    skip?: number
    distinct?: AnimeEntryScalarFieldEnum | AnimeEntryScalarFieldEnum[]
  }

  /**
   * AnimeEntry create
   */
  export type AnimeEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntry
     */
    select?: AnimeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntry
     */
    omit?: AnimeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a AnimeEntry.
     */
    data: XOR<AnimeEntryCreateInput, AnimeEntryUncheckedCreateInput>
  }

  /**
   * AnimeEntry createMany
   */
  export type AnimeEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnimeEntries.
     */
    data: AnimeEntryCreateManyInput | AnimeEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnimeEntry createManyAndReturn
   */
  export type AnimeEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntry
     */
    select?: AnimeEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntry
     */
    omit?: AnimeEntryOmit<ExtArgs> | null
    /**
     * The data used to create many AnimeEntries.
     */
    data: AnimeEntryCreateManyInput | AnimeEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnimeEntry update
   */
  export type AnimeEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntry
     */
    select?: AnimeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntry
     */
    omit?: AnimeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a AnimeEntry.
     */
    data: XOR<AnimeEntryUpdateInput, AnimeEntryUncheckedUpdateInput>
    /**
     * Choose, which AnimeEntry to update.
     */
    where: AnimeEntryWhereUniqueInput
  }

  /**
   * AnimeEntry updateMany
   */
  export type AnimeEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnimeEntries.
     */
    data: XOR<AnimeEntryUpdateManyMutationInput, AnimeEntryUncheckedUpdateManyInput>
    /**
     * Filter which AnimeEntries to update
     */
    where?: AnimeEntryWhereInput
    /**
     * Limit how many AnimeEntries to update.
     */
    limit?: number
  }

  /**
   * AnimeEntry updateManyAndReturn
   */
  export type AnimeEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntry
     */
    select?: AnimeEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntry
     */
    omit?: AnimeEntryOmit<ExtArgs> | null
    /**
     * The data used to update AnimeEntries.
     */
    data: XOR<AnimeEntryUpdateManyMutationInput, AnimeEntryUncheckedUpdateManyInput>
    /**
     * Filter which AnimeEntries to update
     */
    where?: AnimeEntryWhereInput
    /**
     * Limit how many AnimeEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnimeEntry upsert
   */
  export type AnimeEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntry
     */
    select?: AnimeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntry
     */
    omit?: AnimeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the AnimeEntry to update in case it exists.
     */
    where: AnimeEntryWhereUniqueInput
    /**
     * In case the AnimeEntry found by the `where` argument doesn't exist, create a new AnimeEntry with this data.
     */
    create: XOR<AnimeEntryCreateInput, AnimeEntryUncheckedCreateInput>
    /**
     * In case the AnimeEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnimeEntryUpdateInput, AnimeEntryUncheckedUpdateInput>
  }

  /**
   * AnimeEntry delete
   */
  export type AnimeEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntry
     */
    select?: AnimeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntry
     */
    omit?: AnimeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryInclude<ExtArgs> | null
    /**
     * Filter which AnimeEntry to delete.
     */
    where: AnimeEntryWhereUniqueInput
  }

  /**
   * AnimeEntry deleteMany
   */
  export type AnimeEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnimeEntries to delete
     */
    where?: AnimeEntryWhereInput
    /**
     * Limit how many AnimeEntries to delete.
     */
    limit?: number
  }

  /**
   * AnimeEntry.episodes
   */
  export type AnimeEntry$episodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEpisode
     */
    select?: AnimeEpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEpisode
     */
    omit?: AnimeEpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEpisodeInclude<ExtArgs> | null
    where?: AnimeEpisodeWhereInput
    orderBy?: AnimeEpisodeOrderByWithRelationInput | AnimeEpisodeOrderByWithRelationInput[]
    cursor?: AnimeEpisodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimeEpisodeScalarFieldEnum | AnimeEpisodeScalarFieldEnum[]
  }

  /**
   * AnimeEntry.authorLinks
   */
  export type AnimeEntry$authorLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntryAuthor
     */
    select?: AnimeEntryAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntryAuthor
     */
    omit?: AnimeEntryAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryAuthorInclude<ExtArgs> | null
    where?: AnimeEntryAuthorWhereInput
    orderBy?: AnimeEntryAuthorOrderByWithRelationInput | AnimeEntryAuthorOrderByWithRelationInput[]
    cursor?: AnimeEntryAuthorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimeEntryAuthorScalarFieldEnum | AnimeEntryAuthorScalarFieldEnum[]
  }

  /**
   * AnimeEntry.ratings
   */
  export type AnimeEntry$ratingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeRating
     */
    select?: AnimeRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeRating
     */
    omit?: AnimeRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeRatingInclude<ExtArgs> | null
    where?: AnimeRatingWhereInput
    orderBy?: AnimeRatingOrderByWithRelationInput | AnimeRatingOrderByWithRelationInput[]
    cursor?: AnimeRatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimeRatingScalarFieldEnum | AnimeRatingScalarFieldEnum[]
  }

  /**
   * AnimeEntry.genreLinks
   */
  export type AnimeEntry$genreLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntryGenre
     */
    select?: AnimeEntryGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntryGenre
     */
    omit?: AnimeEntryGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryGenreInclude<ExtArgs> | null
    where?: AnimeEntryGenreWhereInput
    orderBy?: AnimeEntryGenreOrderByWithRelationInput | AnimeEntryGenreOrderByWithRelationInput[]
    cursor?: AnimeEntryGenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimeEntryGenreScalarFieldEnum | AnimeEntryGenreScalarFieldEnum[]
  }

  /**
   * AnimeEntry.type
   */
  export type AnimeEntry$typeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeType
     */
    select?: AnimeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeType
     */
    omit?: AnimeTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeTypeInclude<ExtArgs> | null
    where?: AnimeTypeWhereInput
  }

  /**
   * AnimeEntry without action
   */
  export type AnimeEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntry
     */
    select?: AnimeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntry
     */
    omit?: AnimeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryInclude<ExtArgs> | null
  }


  /**
   * Model Genre
   */

  export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  export type GenreMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GenreMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GenreCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GenreMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GenreMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GenreCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genre to aggregate.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreMaxAggregateInputType
  }

  export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
        [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenre[P]>
      : GetScalarType<T[P], AggregateGenre[P]>
  }




  export type GenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithAggregationInput | GenreOrderByWithAggregationInput[]
    by: GenreScalarFieldEnum[] | GenreScalarFieldEnum
    having?: GenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreCountAggregateInputType | true
    _min?: GenreMinAggregateInputType
    _max?: GenreMaxAggregateInputType
  }

  export type GenreGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: GenreCountAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  type GetGenreGroupByPayload<T extends GenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreGroupByOutputType[P]>
            : GetScalarType<T[P], GenreGroupByOutputType[P]>
        }
      >
    >


  export type GenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    animeLinks?: boolean | Genre$animeLinksArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GenreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["genre"]>
  export type GenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animeLinks?: boolean | Genre$animeLinksArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GenreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type GenreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $GenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genre"
    objects: {
      animeLinks: Prisma.$AnimeEntryGenrePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["genre"]>
    composites: {}
  }

  type GenreGetPayload<S extends boolean | null | undefined | GenreDefaultArgs> = $Result.GetResult<Prisma.$GenrePayload, S>

  type GenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GenreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GenreCountAggregateInputType | true
    }

  export interface GenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genre'], meta: { name: 'Genre' } }
    /**
     * Find zero or one Genre that matches the filter.
     * @param {GenreFindUniqueArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GenreFindUniqueArgs>(args: SelectSubset<T, GenreFindUniqueArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Genre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GenreFindUniqueOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GenreFindUniqueOrThrowArgs>(args: SelectSubset<T, GenreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GenreFindFirstArgs>(args?: SelectSubset<T, GenreFindFirstArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Genre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GenreFindFirstOrThrowArgs>(args?: SelectSubset<T, GenreFindFirstOrThrowArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genre.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genreWithIdOnly = await prisma.genre.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GenreFindManyArgs>(args?: SelectSubset<T, GenreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Genre.
     * @param {GenreCreateArgs} args - Arguments to create a Genre.
     * @example
     * // Create one Genre
     * const Genre = await prisma.genre.create({
     *   data: {
     *     // ... data to create a Genre
     *   }
     * })
     * 
     */
    create<T extends GenreCreateArgs>(args: SelectSubset<T, GenreCreateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Genres.
     * @param {GenreCreateManyArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GenreCreateManyArgs>(args?: SelectSubset<T, GenreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Genres and returns the data saved in the database.
     * @param {GenreCreateManyAndReturnArgs} args - Arguments to create many Genres.
     * @example
     * // Create many Genres
     * const genre = await prisma.genre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Genres and only return the `id`
     * const genreWithIdOnly = await prisma.genre.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GenreCreateManyAndReturnArgs>(args?: SelectSubset<T, GenreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Genre.
     * @param {GenreDeleteArgs} args - Arguments to delete one Genre.
     * @example
     * // Delete one Genre
     * const Genre = await prisma.genre.delete({
     *   where: {
     *     // ... filter to delete one Genre
     *   }
     * })
     * 
     */
    delete<T extends GenreDeleteArgs>(args: SelectSubset<T, GenreDeleteArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Genre.
     * @param {GenreUpdateArgs} args - Arguments to update one Genre.
     * @example
     * // Update one Genre
     * const genre = await prisma.genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GenreUpdateArgs>(args: SelectSubset<T, GenreUpdateArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Genres.
     * @param {GenreDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GenreDeleteManyArgs>(args?: SelectSubset<T, GenreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GenreUpdateManyArgs>(args: SelectSubset<T, GenreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres and returns the data updated in the database.
     * @param {GenreUpdateManyAndReturnArgs} args - Arguments to update many Genres.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Genres and only return the `id`
     * const genreWithIdOnly = await prisma.genre.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GenreUpdateManyAndReturnArgs>(args: SelectSubset<T, GenreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Genre.
     * @param {GenreUpsertArgs} args - Arguments to update or create a Genre.
     * @example
     * // Update or create a Genre
     * const genre = await prisma.genre.upsert({
     *   create: {
     *     // ... data to create a Genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genre we want to update
     *   }
     * })
     */
    upsert<T extends GenreUpsertArgs>(args: SelectSubset<T, GenreUpsertArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genre.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenreCountArgs>(
      args?: Subset<T, GenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GenreAggregateArgs>(args: Subset<T, GenreAggregateArgs>): Prisma.PrismaPromise<GetGenreAggregateType<T>>

    /**
     * Group by Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreGroupByArgs} args - Group by arguments.
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
      T extends GenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenreGroupByArgs['orderBy'] }
        : { orderBy?: GenreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genre model
   */
  readonly fields: GenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    animeLinks<T extends Genre$animeLinksArgs<ExtArgs> = {}>(args?: Subset<T, Genre$animeLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeEntryGenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Genre model
   */
  interface GenreFieldRefs {
    readonly id: FieldRef<"Genre", 'String'>
    readonly name: FieldRef<"Genre", 'String'>
    readonly createdAt: FieldRef<"Genre", 'DateTime'>
    readonly updatedAt: FieldRef<"Genre", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Genre findUnique
   */
  export type GenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findUniqueOrThrow
   */
  export type GenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findFirst
   */
  export type GenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findFirstOrThrow
   */
  export type GenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findMany
   */
  export type GenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre create
   */
  export type GenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to create a Genre.
     */
    data: XOR<GenreCreateInput, GenreUncheckedCreateInput>
  }

  /**
   * Genre createMany
   */
  export type GenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genre createManyAndReturn
   */
  export type GenreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genre update
   */
  export type GenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to update a Genre.
     */
    data: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
    /**
     * Choose, which Genre to update.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre updateMany
   */
  export type GenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genre updateManyAndReturn
   */
  export type GenreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to update.
     */
    limit?: number
  }

  /**
   * Genre upsert
   */
  export type GenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The filter to search for the Genre to update in case it exists.
     */
    where: GenreWhereUniqueInput
    /**
     * In case the Genre found by the `where` argument doesn't exist, create a new Genre with this data.
     */
    create: XOR<GenreCreateInput, GenreUncheckedCreateInput>
    /**
     * In case the Genre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
  }

  /**
   * Genre delete
   */
  export type GenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter which Genre to delete.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre deleteMany
   */
  export type GenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to delete
     */
    where?: GenreWhereInput
    /**
     * Limit how many Genres to delete.
     */
    limit?: number
  }

  /**
   * Genre.animeLinks
   */
  export type Genre$animeLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntryGenre
     */
    select?: AnimeEntryGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntryGenre
     */
    omit?: AnimeEntryGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryGenreInclude<ExtArgs> | null
    where?: AnimeEntryGenreWhereInput
    orderBy?: AnimeEntryGenreOrderByWithRelationInput | AnimeEntryGenreOrderByWithRelationInput[]
    cursor?: AnimeEntryGenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimeEntryGenreScalarFieldEnum | AnimeEntryGenreScalarFieldEnum[]
  }

  /**
   * Genre without action
   */
  export type GenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Genre
     */
    omit?: GenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
  }


  /**
   * Model AnimeType
   */

  export type AggregateAnimeType = {
    _count: AnimeTypeCountAggregateOutputType | null
    _min: AnimeTypeMinAggregateOutputType | null
    _max: AnimeTypeMaxAggregateOutputType | null
  }

  export type AnimeTypeMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnimeTypeMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnimeTypeCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnimeTypeMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnimeTypeMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnimeTypeCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnimeTypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnimeType to aggregate.
     */
    where?: AnimeTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeTypes to fetch.
     */
    orderBy?: AnimeTypeOrderByWithRelationInput | AnimeTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnimeTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnimeTypes
    **/
    _count?: true | AnimeTypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnimeTypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnimeTypeMaxAggregateInputType
  }

  export type GetAnimeTypeAggregateType<T extends AnimeTypeAggregateArgs> = {
        [P in keyof T & keyof AggregateAnimeType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnimeType[P]>
      : GetScalarType<T[P], AggregateAnimeType[P]>
  }




  export type AnimeTypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeTypeWhereInput
    orderBy?: AnimeTypeOrderByWithAggregationInput | AnimeTypeOrderByWithAggregationInput[]
    by: AnimeTypeScalarFieldEnum[] | AnimeTypeScalarFieldEnum
    having?: AnimeTypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnimeTypeCountAggregateInputType | true
    _min?: AnimeTypeMinAggregateInputType
    _max?: AnimeTypeMaxAggregateInputType
  }

  export type AnimeTypeGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    _count: AnimeTypeCountAggregateOutputType | null
    _min: AnimeTypeMinAggregateOutputType | null
    _max: AnimeTypeMaxAggregateOutputType | null
  }

  type GetAnimeTypeGroupByPayload<T extends AnimeTypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnimeTypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnimeTypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnimeTypeGroupByOutputType[P]>
            : GetScalarType<T[P], AnimeTypeGroupByOutputType[P]>
        }
      >
    >


  export type AnimeTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    animeEntries?: boolean | AnimeType$animeEntriesArgs<ExtArgs>
    _count?: boolean | AnimeTypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animeType"]>

  export type AnimeTypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["animeType"]>

  export type AnimeTypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["animeType"]>

  export type AnimeTypeSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnimeTypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["animeType"]>
  export type AnimeTypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animeEntries?: boolean | AnimeType$animeEntriesArgs<ExtArgs>
    _count?: boolean | AnimeTypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnimeTypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AnimeTypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AnimeTypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnimeType"
    objects: {
      animeEntries: Prisma.$AnimeEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["animeType"]>
    composites: {}
  }

  type AnimeTypeGetPayload<S extends boolean | null | undefined | AnimeTypeDefaultArgs> = $Result.GetResult<Prisma.$AnimeTypePayload, S>

  type AnimeTypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnimeTypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnimeTypeCountAggregateInputType | true
    }

  export interface AnimeTypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnimeType'], meta: { name: 'AnimeType' } }
    /**
     * Find zero or one AnimeType that matches the filter.
     * @param {AnimeTypeFindUniqueArgs} args - Arguments to find a AnimeType
     * @example
     * // Get one AnimeType
     * const animeType = await prisma.animeType.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnimeTypeFindUniqueArgs>(args: SelectSubset<T, AnimeTypeFindUniqueArgs<ExtArgs>>): Prisma__AnimeTypeClient<$Result.GetResult<Prisma.$AnimeTypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnimeType that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnimeTypeFindUniqueOrThrowArgs} args - Arguments to find a AnimeType
     * @example
     * // Get one AnimeType
     * const animeType = await prisma.animeType.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnimeTypeFindUniqueOrThrowArgs>(args: SelectSubset<T, AnimeTypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnimeTypeClient<$Result.GetResult<Prisma.$AnimeTypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnimeType that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeTypeFindFirstArgs} args - Arguments to find a AnimeType
     * @example
     * // Get one AnimeType
     * const animeType = await prisma.animeType.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnimeTypeFindFirstArgs>(args?: SelectSubset<T, AnimeTypeFindFirstArgs<ExtArgs>>): Prisma__AnimeTypeClient<$Result.GetResult<Prisma.$AnimeTypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnimeType that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeTypeFindFirstOrThrowArgs} args - Arguments to find a AnimeType
     * @example
     * // Get one AnimeType
     * const animeType = await prisma.animeType.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnimeTypeFindFirstOrThrowArgs>(args?: SelectSubset<T, AnimeTypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnimeTypeClient<$Result.GetResult<Prisma.$AnimeTypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnimeTypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeTypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnimeTypes
     * const animeTypes = await prisma.animeType.findMany()
     * 
     * // Get first 10 AnimeTypes
     * const animeTypes = await prisma.animeType.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const animeTypeWithIdOnly = await prisma.animeType.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnimeTypeFindManyArgs>(args?: SelectSubset<T, AnimeTypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeTypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnimeType.
     * @param {AnimeTypeCreateArgs} args - Arguments to create a AnimeType.
     * @example
     * // Create one AnimeType
     * const AnimeType = await prisma.animeType.create({
     *   data: {
     *     // ... data to create a AnimeType
     *   }
     * })
     * 
     */
    create<T extends AnimeTypeCreateArgs>(args: SelectSubset<T, AnimeTypeCreateArgs<ExtArgs>>): Prisma__AnimeTypeClient<$Result.GetResult<Prisma.$AnimeTypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnimeTypes.
     * @param {AnimeTypeCreateManyArgs} args - Arguments to create many AnimeTypes.
     * @example
     * // Create many AnimeTypes
     * const animeType = await prisma.animeType.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnimeTypeCreateManyArgs>(args?: SelectSubset<T, AnimeTypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnimeTypes and returns the data saved in the database.
     * @param {AnimeTypeCreateManyAndReturnArgs} args - Arguments to create many AnimeTypes.
     * @example
     * // Create many AnimeTypes
     * const animeType = await prisma.animeType.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnimeTypes and only return the `id`
     * const animeTypeWithIdOnly = await prisma.animeType.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnimeTypeCreateManyAndReturnArgs>(args?: SelectSubset<T, AnimeTypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeTypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnimeType.
     * @param {AnimeTypeDeleteArgs} args - Arguments to delete one AnimeType.
     * @example
     * // Delete one AnimeType
     * const AnimeType = await prisma.animeType.delete({
     *   where: {
     *     // ... filter to delete one AnimeType
     *   }
     * })
     * 
     */
    delete<T extends AnimeTypeDeleteArgs>(args: SelectSubset<T, AnimeTypeDeleteArgs<ExtArgs>>): Prisma__AnimeTypeClient<$Result.GetResult<Prisma.$AnimeTypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnimeType.
     * @param {AnimeTypeUpdateArgs} args - Arguments to update one AnimeType.
     * @example
     * // Update one AnimeType
     * const animeType = await prisma.animeType.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnimeTypeUpdateArgs>(args: SelectSubset<T, AnimeTypeUpdateArgs<ExtArgs>>): Prisma__AnimeTypeClient<$Result.GetResult<Prisma.$AnimeTypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnimeTypes.
     * @param {AnimeTypeDeleteManyArgs} args - Arguments to filter AnimeTypes to delete.
     * @example
     * // Delete a few AnimeTypes
     * const { count } = await prisma.animeType.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnimeTypeDeleteManyArgs>(args?: SelectSubset<T, AnimeTypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnimeTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeTypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnimeTypes
     * const animeType = await prisma.animeType.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnimeTypeUpdateManyArgs>(args: SelectSubset<T, AnimeTypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnimeTypes and returns the data updated in the database.
     * @param {AnimeTypeUpdateManyAndReturnArgs} args - Arguments to update many AnimeTypes.
     * @example
     * // Update many AnimeTypes
     * const animeType = await prisma.animeType.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnimeTypes and only return the `id`
     * const animeTypeWithIdOnly = await prisma.animeType.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnimeTypeUpdateManyAndReturnArgs>(args: SelectSubset<T, AnimeTypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeTypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnimeType.
     * @param {AnimeTypeUpsertArgs} args - Arguments to update or create a AnimeType.
     * @example
     * // Update or create a AnimeType
     * const animeType = await prisma.animeType.upsert({
     *   create: {
     *     // ... data to create a AnimeType
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnimeType we want to update
     *   }
     * })
     */
    upsert<T extends AnimeTypeUpsertArgs>(args: SelectSubset<T, AnimeTypeUpsertArgs<ExtArgs>>): Prisma__AnimeTypeClient<$Result.GetResult<Prisma.$AnimeTypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnimeTypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeTypeCountArgs} args - Arguments to filter AnimeTypes to count.
     * @example
     * // Count the number of AnimeTypes
     * const count = await prisma.animeType.count({
     *   where: {
     *     // ... the filter for the AnimeTypes we want to count
     *   }
     * })
    **/
    count<T extends AnimeTypeCountArgs>(
      args?: Subset<T, AnimeTypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnimeTypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnimeType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeTypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnimeTypeAggregateArgs>(args: Subset<T, AnimeTypeAggregateArgs>): Prisma.PrismaPromise<GetAnimeTypeAggregateType<T>>

    /**
     * Group by AnimeType.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeTypeGroupByArgs} args - Group by arguments.
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
      T extends AnimeTypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnimeTypeGroupByArgs['orderBy'] }
        : { orderBy?: AnimeTypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnimeTypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimeTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnimeType model
   */
  readonly fields: AnimeTypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnimeType.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnimeTypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    animeEntries<T extends AnimeType$animeEntriesArgs<ExtArgs> = {}>(args?: Subset<T, AnimeType$animeEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AnimeType model
   */
  interface AnimeTypeFieldRefs {
    readonly id: FieldRef<"AnimeType", 'String'>
    readonly name: FieldRef<"AnimeType", 'String'>
    readonly createdAt: FieldRef<"AnimeType", 'DateTime'>
    readonly updatedAt: FieldRef<"AnimeType", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnimeType findUnique
   */
  export type AnimeTypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeType
     */
    select?: AnimeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeType
     */
    omit?: AnimeTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeTypeInclude<ExtArgs> | null
    /**
     * Filter, which AnimeType to fetch.
     */
    where: AnimeTypeWhereUniqueInput
  }

  /**
   * AnimeType findUniqueOrThrow
   */
  export type AnimeTypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeType
     */
    select?: AnimeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeType
     */
    omit?: AnimeTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeTypeInclude<ExtArgs> | null
    /**
     * Filter, which AnimeType to fetch.
     */
    where: AnimeTypeWhereUniqueInput
  }

  /**
   * AnimeType findFirst
   */
  export type AnimeTypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeType
     */
    select?: AnimeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeType
     */
    omit?: AnimeTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeTypeInclude<ExtArgs> | null
    /**
     * Filter, which AnimeType to fetch.
     */
    where?: AnimeTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeTypes to fetch.
     */
    orderBy?: AnimeTypeOrderByWithRelationInput | AnimeTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnimeTypes.
     */
    cursor?: AnimeTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnimeTypes.
     */
    distinct?: AnimeTypeScalarFieldEnum | AnimeTypeScalarFieldEnum[]
  }

  /**
   * AnimeType findFirstOrThrow
   */
  export type AnimeTypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeType
     */
    select?: AnimeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeType
     */
    omit?: AnimeTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeTypeInclude<ExtArgs> | null
    /**
     * Filter, which AnimeType to fetch.
     */
    where?: AnimeTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeTypes to fetch.
     */
    orderBy?: AnimeTypeOrderByWithRelationInput | AnimeTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnimeTypes.
     */
    cursor?: AnimeTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeTypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnimeTypes.
     */
    distinct?: AnimeTypeScalarFieldEnum | AnimeTypeScalarFieldEnum[]
  }

  /**
   * AnimeType findMany
   */
  export type AnimeTypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeType
     */
    select?: AnimeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeType
     */
    omit?: AnimeTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeTypeInclude<ExtArgs> | null
    /**
     * Filter, which AnimeTypes to fetch.
     */
    where?: AnimeTypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeTypes to fetch.
     */
    orderBy?: AnimeTypeOrderByWithRelationInput | AnimeTypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnimeTypes.
     */
    cursor?: AnimeTypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeTypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeTypes.
     */
    skip?: number
    distinct?: AnimeTypeScalarFieldEnum | AnimeTypeScalarFieldEnum[]
  }

  /**
   * AnimeType create
   */
  export type AnimeTypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeType
     */
    select?: AnimeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeType
     */
    omit?: AnimeTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeTypeInclude<ExtArgs> | null
    /**
     * The data needed to create a AnimeType.
     */
    data: XOR<AnimeTypeCreateInput, AnimeTypeUncheckedCreateInput>
  }

  /**
   * AnimeType createMany
   */
  export type AnimeTypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnimeTypes.
     */
    data: AnimeTypeCreateManyInput | AnimeTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnimeType createManyAndReturn
   */
  export type AnimeTypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeType
     */
    select?: AnimeTypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeType
     */
    omit?: AnimeTypeOmit<ExtArgs> | null
    /**
     * The data used to create many AnimeTypes.
     */
    data: AnimeTypeCreateManyInput | AnimeTypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnimeType update
   */
  export type AnimeTypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeType
     */
    select?: AnimeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeType
     */
    omit?: AnimeTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeTypeInclude<ExtArgs> | null
    /**
     * The data needed to update a AnimeType.
     */
    data: XOR<AnimeTypeUpdateInput, AnimeTypeUncheckedUpdateInput>
    /**
     * Choose, which AnimeType to update.
     */
    where: AnimeTypeWhereUniqueInput
  }

  /**
   * AnimeType updateMany
   */
  export type AnimeTypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnimeTypes.
     */
    data: XOR<AnimeTypeUpdateManyMutationInput, AnimeTypeUncheckedUpdateManyInput>
    /**
     * Filter which AnimeTypes to update
     */
    where?: AnimeTypeWhereInput
    /**
     * Limit how many AnimeTypes to update.
     */
    limit?: number
  }

  /**
   * AnimeType updateManyAndReturn
   */
  export type AnimeTypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeType
     */
    select?: AnimeTypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeType
     */
    omit?: AnimeTypeOmit<ExtArgs> | null
    /**
     * The data used to update AnimeTypes.
     */
    data: XOR<AnimeTypeUpdateManyMutationInput, AnimeTypeUncheckedUpdateManyInput>
    /**
     * Filter which AnimeTypes to update
     */
    where?: AnimeTypeWhereInput
    /**
     * Limit how many AnimeTypes to update.
     */
    limit?: number
  }

  /**
   * AnimeType upsert
   */
  export type AnimeTypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeType
     */
    select?: AnimeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeType
     */
    omit?: AnimeTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeTypeInclude<ExtArgs> | null
    /**
     * The filter to search for the AnimeType to update in case it exists.
     */
    where: AnimeTypeWhereUniqueInput
    /**
     * In case the AnimeType found by the `where` argument doesn't exist, create a new AnimeType with this data.
     */
    create: XOR<AnimeTypeCreateInput, AnimeTypeUncheckedCreateInput>
    /**
     * In case the AnimeType was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnimeTypeUpdateInput, AnimeTypeUncheckedUpdateInput>
  }

  /**
   * AnimeType delete
   */
  export type AnimeTypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeType
     */
    select?: AnimeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeType
     */
    omit?: AnimeTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeTypeInclude<ExtArgs> | null
    /**
     * Filter which AnimeType to delete.
     */
    where: AnimeTypeWhereUniqueInput
  }

  /**
   * AnimeType deleteMany
   */
  export type AnimeTypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnimeTypes to delete
     */
    where?: AnimeTypeWhereInput
    /**
     * Limit how many AnimeTypes to delete.
     */
    limit?: number
  }

  /**
   * AnimeType.animeEntries
   */
  export type AnimeType$animeEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntry
     */
    select?: AnimeEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntry
     */
    omit?: AnimeEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryInclude<ExtArgs> | null
    where?: AnimeEntryWhereInput
    orderBy?: AnimeEntryOrderByWithRelationInput | AnimeEntryOrderByWithRelationInput[]
    cursor?: AnimeEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimeEntryScalarFieldEnum | AnimeEntryScalarFieldEnum[]
  }

  /**
   * AnimeType without action
   */
  export type AnimeTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeType
     */
    select?: AnimeTypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeType
     */
    omit?: AnimeTypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeTypeInclude<ExtArgs> | null
  }


  /**
   * Model AnimeEntryGenre
   */

  export type AggregateAnimeEntryGenre = {
    _count: AnimeEntryGenreCountAggregateOutputType | null
    _min: AnimeEntryGenreMinAggregateOutputType | null
    _max: AnimeEntryGenreMaxAggregateOutputType | null
  }

  export type AnimeEntryGenreMinAggregateOutputType = {
    animeEntryId: string | null
    genreId: string | null
    createdAt: Date | null
  }

  export type AnimeEntryGenreMaxAggregateOutputType = {
    animeEntryId: string | null
    genreId: string | null
    createdAt: Date | null
  }

  export type AnimeEntryGenreCountAggregateOutputType = {
    animeEntryId: number
    genreId: number
    createdAt: number
    _all: number
  }


  export type AnimeEntryGenreMinAggregateInputType = {
    animeEntryId?: true
    genreId?: true
    createdAt?: true
  }

  export type AnimeEntryGenreMaxAggregateInputType = {
    animeEntryId?: true
    genreId?: true
    createdAt?: true
  }

  export type AnimeEntryGenreCountAggregateInputType = {
    animeEntryId?: true
    genreId?: true
    createdAt?: true
    _all?: true
  }

  export type AnimeEntryGenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnimeEntryGenre to aggregate.
     */
    where?: AnimeEntryGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeEntryGenres to fetch.
     */
    orderBy?: AnimeEntryGenreOrderByWithRelationInput | AnimeEntryGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnimeEntryGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeEntryGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeEntryGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnimeEntryGenres
    **/
    _count?: true | AnimeEntryGenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnimeEntryGenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnimeEntryGenreMaxAggregateInputType
  }

  export type GetAnimeEntryGenreAggregateType<T extends AnimeEntryGenreAggregateArgs> = {
        [P in keyof T & keyof AggregateAnimeEntryGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnimeEntryGenre[P]>
      : GetScalarType<T[P], AggregateAnimeEntryGenre[P]>
  }




  export type AnimeEntryGenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeEntryGenreWhereInput
    orderBy?: AnimeEntryGenreOrderByWithAggregationInput | AnimeEntryGenreOrderByWithAggregationInput[]
    by: AnimeEntryGenreScalarFieldEnum[] | AnimeEntryGenreScalarFieldEnum
    having?: AnimeEntryGenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnimeEntryGenreCountAggregateInputType | true
    _min?: AnimeEntryGenreMinAggregateInputType
    _max?: AnimeEntryGenreMaxAggregateInputType
  }

  export type AnimeEntryGenreGroupByOutputType = {
    animeEntryId: string
    genreId: string
    createdAt: Date
    _count: AnimeEntryGenreCountAggregateOutputType | null
    _min: AnimeEntryGenreMinAggregateOutputType | null
    _max: AnimeEntryGenreMaxAggregateOutputType | null
  }

  type GetAnimeEntryGenreGroupByPayload<T extends AnimeEntryGenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnimeEntryGenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnimeEntryGenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnimeEntryGenreGroupByOutputType[P]>
            : GetScalarType<T[P], AnimeEntryGenreGroupByOutputType[P]>
        }
      >
    >


  export type AnimeEntryGenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    animeEntryId?: boolean
    genreId?: boolean
    createdAt?: boolean
    animeEntry?: boolean | AnimeEntryDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animeEntryGenre"]>

  export type AnimeEntryGenreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    animeEntryId?: boolean
    genreId?: boolean
    createdAt?: boolean
    animeEntry?: boolean | AnimeEntryDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animeEntryGenre"]>

  export type AnimeEntryGenreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    animeEntryId?: boolean
    genreId?: boolean
    createdAt?: boolean
    animeEntry?: boolean | AnimeEntryDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animeEntryGenre"]>

  export type AnimeEntryGenreSelectScalar = {
    animeEntryId?: boolean
    genreId?: boolean
    createdAt?: boolean
  }

  export type AnimeEntryGenreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"animeEntryId" | "genreId" | "createdAt", ExtArgs["result"]["animeEntryGenre"]>
  export type AnimeEntryGenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animeEntry?: boolean | AnimeEntryDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }
  export type AnimeEntryGenreIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animeEntry?: boolean | AnimeEntryDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }
  export type AnimeEntryGenreIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animeEntry?: boolean | AnimeEntryDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }

  export type $AnimeEntryGenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnimeEntryGenre"
    objects: {
      animeEntry: Prisma.$AnimeEntryPayload<ExtArgs>
      genre: Prisma.$GenrePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      animeEntryId: string
      genreId: string
      createdAt: Date
    }, ExtArgs["result"]["animeEntryGenre"]>
    composites: {}
  }

  type AnimeEntryGenreGetPayload<S extends boolean | null | undefined | AnimeEntryGenreDefaultArgs> = $Result.GetResult<Prisma.$AnimeEntryGenrePayload, S>

  type AnimeEntryGenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnimeEntryGenreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnimeEntryGenreCountAggregateInputType | true
    }

  export interface AnimeEntryGenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnimeEntryGenre'], meta: { name: 'AnimeEntryGenre' } }
    /**
     * Find zero or one AnimeEntryGenre that matches the filter.
     * @param {AnimeEntryGenreFindUniqueArgs} args - Arguments to find a AnimeEntryGenre
     * @example
     * // Get one AnimeEntryGenre
     * const animeEntryGenre = await prisma.animeEntryGenre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnimeEntryGenreFindUniqueArgs>(args: SelectSubset<T, AnimeEntryGenreFindUniqueArgs<ExtArgs>>): Prisma__AnimeEntryGenreClient<$Result.GetResult<Prisma.$AnimeEntryGenrePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnimeEntryGenre that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnimeEntryGenreFindUniqueOrThrowArgs} args - Arguments to find a AnimeEntryGenre
     * @example
     * // Get one AnimeEntryGenre
     * const animeEntryGenre = await prisma.animeEntryGenre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnimeEntryGenreFindUniqueOrThrowArgs>(args: SelectSubset<T, AnimeEntryGenreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnimeEntryGenreClient<$Result.GetResult<Prisma.$AnimeEntryGenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnimeEntryGenre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeEntryGenreFindFirstArgs} args - Arguments to find a AnimeEntryGenre
     * @example
     * // Get one AnimeEntryGenre
     * const animeEntryGenre = await prisma.animeEntryGenre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnimeEntryGenreFindFirstArgs>(args?: SelectSubset<T, AnimeEntryGenreFindFirstArgs<ExtArgs>>): Prisma__AnimeEntryGenreClient<$Result.GetResult<Prisma.$AnimeEntryGenrePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnimeEntryGenre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeEntryGenreFindFirstOrThrowArgs} args - Arguments to find a AnimeEntryGenre
     * @example
     * // Get one AnimeEntryGenre
     * const animeEntryGenre = await prisma.animeEntryGenre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnimeEntryGenreFindFirstOrThrowArgs>(args?: SelectSubset<T, AnimeEntryGenreFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnimeEntryGenreClient<$Result.GetResult<Prisma.$AnimeEntryGenrePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnimeEntryGenres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeEntryGenreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnimeEntryGenres
     * const animeEntryGenres = await prisma.animeEntryGenre.findMany()
     * 
     * // Get first 10 AnimeEntryGenres
     * const animeEntryGenres = await prisma.animeEntryGenre.findMany({ take: 10 })
     * 
     * // Only select the `animeEntryId`
     * const animeEntryGenreWithAnimeEntryIdOnly = await prisma.animeEntryGenre.findMany({ select: { animeEntryId: true } })
     * 
     */
    findMany<T extends AnimeEntryGenreFindManyArgs>(args?: SelectSubset<T, AnimeEntryGenreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeEntryGenrePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnimeEntryGenre.
     * @param {AnimeEntryGenreCreateArgs} args - Arguments to create a AnimeEntryGenre.
     * @example
     * // Create one AnimeEntryGenre
     * const AnimeEntryGenre = await prisma.animeEntryGenre.create({
     *   data: {
     *     // ... data to create a AnimeEntryGenre
     *   }
     * })
     * 
     */
    create<T extends AnimeEntryGenreCreateArgs>(args: SelectSubset<T, AnimeEntryGenreCreateArgs<ExtArgs>>): Prisma__AnimeEntryGenreClient<$Result.GetResult<Prisma.$AnimeEntryGenrePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnimeEntryGenres.
     * @param {AnimeEntryGenreCreateManyArgs} args - Arguments to create many AnimeEntryGenres.
     * @example
     * // Create many AnimeEntryGenres
     * const animeEntryGenre = await prisma.animeEntryGenre.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnimeEntryGenreCreateManyArgs>(args?: SelectSubset<T, AnimeEntryGenreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnimeEntryGenres and returns the data saved in the database.
     * @param {AnimeEntryGenreCreateManyAndReturnArgs} args - Arguments to create many AnimeEntryGenres.
     * @example
     * // Create many AnimeEntryGenres
     * const animeEntryGenre = await prisma.animeEntryGenre.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnimeEntryGenres and only return the `animeEntryId`
     * const animeEntryGenreWithAnimeEntryIdOnly = await prisma.animeEntryGenre.createManyAndReturn({
     *   select: { animeEntryId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnimeEntryGenreCreateManyAndReturnArgs>(args?: SelectSubset<T, AnimeEntryGenreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeEntryGenrePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnimeEntryGenre.
     * @param {AnimeEntryGenreDeleteArgs} args - Arguments to delete one AnimeEntryGenre.
     * @example
     * // Delete one AnimeEntryGenre
     * const AnimeEntryGenre = await prisma.animeEntryGenre.delete({
     *   where: {
     *     // ... filter to delete one AnimeEntryGenre
     *   }
     * })
     * 
     */
    delete<T extends AnimeEntryGenreDeleteArgs>(args: SelectSubset<T, AnimeEntryGenreDeleteArgs<ExtArgs>>): Prisma__AnimeEntryGenreClient<$Result.GetResult<Prisma.$AnimeEntryGenrePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnimeEntryGenre.
     * @param {AnimeEntryGenreUpdateArgs} args - Arguments to update one AnimeEntryGenre.
     * @example
     * // Update one AnimeEntryGenre
     * const animeEntryGenre = await prisma.animeEntryGenre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnimeEntryGenreUpdateArgs>(args: SelectSubset<T, AnimeEntryGenreUpdateArgs<ExtArgs>>): Prisma__AnimeEntryGenreClient<$Result.GetResult<Prisma.$AnimeEntryGenrePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnimeEntryGenres.
     * @param {AnimeEntryGenreDeleteManyArgs} args - Arguments to filter AnimeEntryGenres to delete.
     * @example
     * // Delete a few AnimeEntryGenres
     * const { count } = await prisma.animeEntryGenre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnimeEntryGenreDeleteManyArgs>(args?: SelectSubset<T, AnimeEntryGenreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnimeEntryGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeEntryGenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnimeEntryGenres
     * const animeEntryGenre = await prisma.animeEntryGenre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnimeEntryGenreUpdateManyArgs>(args: SelectSubset<T, AnimeEntryGenreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnimeEntryGenres and returns the data updated in the database.
     * @param {AnimeEntryGenreUpdateManyAndReturnArgs} args - Arguments to update many AnimeEntryGenres.
     * @example
     * // Update many AnimeEntryGenres
     * const animeEntryGenre = await prisma.animeEntryGenre.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnimeEntryGenres and only return the `animeEntryId`
     * const animeEntryGenreWithAnimeEntryIdOnly = await prisma.animeEntryGenre.updateManyAndReturn({
     *   select: { animeEntryId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnimeEntryGenreUpdateManyAndReturnArgs>(args: SelectSubset<T, AnimeEntryGenreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeEntryGenrePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnimeEntryGenre.
     * @param {AnimeEntryGenreUpsertArgs} args - Arguments to update or create a AnimeEntryGenre.
     * @example
     * // Update or create a AnimeEntryGenre
     * const animeEntryGenre = await prisma.animeEntryGenre.upsert({
     *   create: {
     *     // ... data to create a AnimeEntryGenre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnimeEntryGenre we want to update
     *   }
     * })
     */
    upsert<T extends AnimeEntryGenreUpsertArgs>(args: SelectSubset<T, AnimeEntryGenreUpsertArgs<ExtArgs>>): Prisma__AnimeEntryGenreClient<$Result.GetResult<Prisma.$AnimeEntryGenrePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnimeEntryGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeEntryGenreCountArgs} args - Arguments to filter AnimeEntryGenres to count.
     * @example
     * // Count the number of AnimeEntryGenres
     * const count = await prisma.animeEntryGenre.count({
     *   where: {
     *     // ... the filter for the AnimeEntryGenres we want to count
     *   }
     * })
    **/
    count<T extends AnimeEntryGenreCountArgs>(
      args?: Subset<T, AnimeEntryGenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnimeEntryGenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnimeEntryGenre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeEntryGenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnimeEntryGenreAggregateArgs>(args: Subset<T, AnimeEntryGenreAggregateArgs>): Prisma.PrismaPromise<GetAnimeEntryGenreAggregateType<T>>

    /**
     * Group by AnimeEntryGenre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeEntryGenreGroupByArgs} args - Group by arguments.
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
      T extends AnimeEntryGenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnimeEntryGenreGroupByArgs['orderBy'] }
        : { orderBy?: AnimeEntryGenreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnimeEntryGenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimeEntryGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnimeEntryGenre model
   */
  readonly fields: AnimeEntryGenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnimeEntryGenre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnimeEntryGenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    animeEntry<T extends AnimeEntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnimeEntryDefaultArgs<ExtArgs>>): Prisma__AnimeEntryClient<$Result.GetResult<Prisma.$AnimeEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    genre<T extends GenreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GenreDefaultArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AnimeEntryGenre model
   */
  interface AnimeEntryGenreFieldRefs {
    readonly animeEntryId: FieldRef<"AnimeEntryGenre", 'String'>
    readonly genreId: FieldRef<"AnimeEntryGenre", 'String'>
    readonly createdAt: FieldRef<"AnimeEntryGenre", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnimeEntryGenre findUnique
   */
  export type AnimeEntryGenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntryGenre
     */
    select?: AnimeEntryGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntryGenre
     */
    omit?: AnimeEntryGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryGenreInclude<ExtArgs> | null
    /**
     * Filter, which AnimeEntryGenre to fetch.
     */
    where: AnimeEntryGenreWhereUniqueInput
  }

  /**
   * AnimeEntryGenre findUniqueOrThrow
   */
  export type AnimeEntryGenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntryGenre
     */
    select?: AnimeEntryGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntryGenre
     */
    omit?: AnimeEntryGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryGenreInclude<ExtArgs> | null
    /**
     * Filter, which AnimeEntryGenre to fetch.
     */
    where: AnimeEntryGenreWhereUniqueInput
  }

  /**
   * AnimeEntryGenre findFirst
   */
  export type AnimeEntryGenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntryGenre
     */
    select?: AnimeEntryGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntryGenre
     */
    omit?: AnimeEntryGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryGenreInclude<ExtArgs> | null
    /**
     * Filter, which AnimeEntryGenre to fetch.
     */
    where?: AnimeEntryGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeEntryGenres to fetch.
     */
    orderBy?: AnimeEntryGenreOrderByWithRelationInput | AnimeEntryGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnimeEntryGenres.
     */
    cursor?: AnimeEntryGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeEntryGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeEntryGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnimeEntryGenres.
     */
    distinct?: AnimeEntryGenreScalarFieldEnum | AnimeEntryGenreScalarFieldEnum[]
  }

  /**
   * AnimeEntryGenre findFirstOrThrow
   */
  export type AnimeEntryGenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntryGenre
     */
    select?: AnimeEntryGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntryGenre
     */
    omit?: AnimeEntryGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryGenreInclude<ExtArgs> | null
    /**
     * Filter, which AnimeEntryGenre to fetch.
     */
    where?: AnimeEntryGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeEntryGenres to fetch.
     */
    orderBy?: AnimeEntryGenreOrderByWithRelationInput | AnimeEntryGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnimeEntryGenres.
     */
    cursor?: AnimeEntryGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeEntryGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeEntryGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnimeEntryGenres.
     */
    distinct?: AnimeEntryGenreScalarFieldEnum | AnimeEntryGenreScalarFieldEnum[]
  }

  /**
   * AnimeEntryGenre findMany
   */
  export type AnimeEntryGenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntryGenre
     */
    select?: AnimeEntryGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntryGenre
     */
    omit?: AnimeEntryGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryGenreInclude<ExtArgs> | null
    /**
     * Filter, which AnimeEntryGenres to fetch.
     */
    where?: AnimeEntryGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeEntryGenres to fetch.
     */
    orderBy?: AnimeEntryGenreOrderByWithRelationInput | AnimeEntryGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnimeEntryGenres.
     */
    cursor?: AnimeEntryGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeEntryGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeEntryGenres.
     */
    skip?: number
    distinct?: AnimeEntryGenreScalarFieldEnum | AnimeEntryGenreScalarFieldEnum[]
  }

  /**
   * AnimeEntryGenre create
   */
  export type AnimeEntryGenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntryGenre
     */
    select?: AnimeEntryGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntryGenre
     */
    omit?: AnimeEntryGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryGenreInclude<ExtArgs> | null
    /**
     * The data needed to create a AnimeEntryGenre.
     */
    data: XOR<AnimeEntryGenreCreateInput, AnimeEntryGenreUncheckedCreateInput>
  }

  /**
   * AnimeEntryGenre createMany
   */
  export type AnimeEntryGenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnimeEntryGenres.
     */
    data: AnimeEntryGenreCreateManyInput | AnimeEntryGenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnimeEntryGenre createManyAndReturn
   */
  export type AnimeEntryGenreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntryGenre
     */
    select?: AnimeEntryGenreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntryGenre
     */
    omit?: AnimeEntryGenreOmit<ExtArgs> | null
    /**
     * The data used to create many AnimeEntryGenres.
     */
    data: AnimeEntryGenreCreateManyInput | AnimeEntryGenreCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryGenreIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnimeEntryGenre update
   */
  export type AnimeEntryGenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntryGenre
     */
    select?: AnimeEntryGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntryGenre
     */
    omit?: AnimeEntryGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryGenreInclude<ExtArgs> | null
    /**
     * The data needed to update a AnimeEntryGenre.
     */
    data: XOR<AnimeEntryGenreUpdateInput, AnimeEntryGenreUncheckedUpdateInput>
    /**
     * Choose, which AnimeEntryGenre to update.
     */
    where: AnimeEntryGenreWhereUniqueInput
  }

  /**
   * AnimeEntryGenre updateMany
   */
  export type AnimeEntryGenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnimeEntryGenres.
     */
    data: XOR<AnimeEntryGenreUpdateManyMutationInput, AnimeEntryGenreUncheckedUpdateManyInput>
    /**
     * Filter which AnimeEntryGenres to update
     */
    where?: AnimeEntryGenreWhereInput
    /**
     * Limit how many AnimeEntryGenres to update.
     */
    limit?: number
  }

  /**
   * AnimeEntryGenre updateManyAndReturn
   */
  export type AnimeEntryGenreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntryGenre
     */
    select?: AnimeEntryGenreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntryGenre
     */
    omit?: AnimeEntryGenreOmit<ExtArgs> | null
    /**
     * The data used to update AnimeEntryGenres.
     */
    data: XOR<AnimeEntryGenreUpdateManyMutationInput, AnimeEntryGenreUncheckedUpdateManyInput>
    /**
     * Filter which AnimeEntryGenres to update
     */
    where?: AnimeEntryGenreWhereInput
    /**
     * Limit how many AnimeEntryGenres to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryGenreIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnimeEntryGenre upsert
   */
  export type AnimeEntryGenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntryGenre
     */
    select?: AnimeEntryGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntryGenre
     */
    omit?: AnimeEntryGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryGenreInclude<ExtArgs> | null
    /**
     * The filter to search for the AnimeEntryGenre to update in case it exists.
     */
    where: AnimeEntryGenreWhereUniqueInput
    /**
     * In case the AnimeEntryGenre found by the `where` argument doesn't exist, create a new AnimeEntryGenre with this data.
     */
    create: XOR<AnimeEntryGenreCreateInput, AnimeEntryGenreUncheckedCreateInput>
    /**
     * In case the AnimeEntryGenre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnimeEntryGenreUpdateInput, AnimeEntryGenreUncheckedUpdateInput>
  }

  /**
   * AnimeEntryGenre delete
   */
  export type AnimeEntryGenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntryGenre
     */
    select?: AnimeEntryGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntryGenre
     */
    omit?: AnimeEntryGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryGenreInclude<ExtArgs> | null
    /**
     * Filter which AnimeEntryGenre to delete.
     */
    where: AnimeEntryGenreWhereUniqueInput
  }

  /**
   * AnimeEntryGenre deleteMany
   */
  export type AnimeEntryGenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnimeEntryGenres to delete
     */
    where?: AnimeEntryGenreWhereInput
    /**
     * Limit how many AnimeEntryGenres to delete.
     */
    limit?: number
  }

  /**
   * AnimeEntryGenre without action
   */
  export type AnimeEntryGenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntryGenre
     */
    select?: AnimeEntryGenreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntryGenre
     */
    omit?: AnimeEntryGenreOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryGenreInclude<ExtArgs> | null
  }


  /**
   * Model AnimeRating
   */

  export type AggregateAnimeRating = {
    _count: AnimeRatingCountAggregateOutputType | null
    _avg: AnimeRatingAvgAggregateOutputType | null
    _sum: AnimeRatingSumAggregateOutputType | null
    _min: AnimeRatingMinAggregateOutputType | null
    _max: AnimeRatingMaxAggregateOutputType | null
  }

  export type AnimeRatingAvgAggregateOutputType = {
    value: number | null
  }

  export type AnimeRatingSumAggregateOutputType = {
    value: number | null
  }

  export type AnimeRatingMinAggregateOutputType = {
    id: string | null
    animeEntryId: string | null
    userId: string | null
    value: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnimeRatingMaxAggregateOutputType = {
    id: string | null
    animeEntryId: string | null
    userId: string | null
    value: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnimeRatingCountAggregateOutputType = {
    id: number
    animeEntryId: number
    userId: number
    value: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnimeRatingAvgAggregateInputType = {
    value?: true
  }

  export type AnimeRatingSumAggregateInputType = {
    value?: true
  }

  export type AnimeRatingMinAggregateInputType = {
    id?: true
    animeEntryId?: true
    userId?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnimeRatingMaxAggregateInputType = {
    id?: true
    animeEntryId?: true
    userId?: true
    value?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnimeRatingCountAggregateInputType = {
    id?: true
    animeEntryId?: true
    userId?: true
    value?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnimeRatingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnimeRating to aggregate.
     */
    where?: AnimeRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeRatings to fetch.
     */
    orderBy?: AnimeRatingOrderByWithRelationInput | AnimeRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnimeRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnimeRatings
    **/
    _count?: true | AnimeRatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnimeRatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnimeRatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnimeRatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnimeRatingMaxAggregateInputType
  }

  export type GetAnimeRatingAggregateType<T extends AnimeRatingAggregateArgs> = {
        [P in keyof T & keyof AggregateAnimeRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnimeRating[P]>
      : GetScalarType<T[P], AggregateAnimeRating[P]>
  }




  export type AnimeRatingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeRatingWhereInput
    orderBy?: AnimeRatingOrderByWithAggregationInput | AnimeRatingOrderByWithAggregationInput[]
    by: AnimeRatingScalarFieldEnum[] | AnimeRatingScalarFieldEnum
    having?: AnimeRatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnimeRatingCountAggregateInputType | true
    _avg?: AnimeRatingAvgAggregateInputType
    _sum?: AnimeRatingSumAggregateInputType
    _min?: AnimeRatingMinAggregateInputType
    _max?: AnimeRatingMaxAggregateInputType
  }

  export type AnimeRatingGroupByOutputType = {
    id: string
    animeEntryId: string
    userId: string
    value: number
    createdAt: Date
    updatedAt: Date
    _count: AnimeRatingCountAggregateOutputType | null
    _avg: AnimeRatingAvgAggregateOutputType | null
    _sum: AnimeRatingSumAggregateOutputType | null
    _min: AnimeRatingMinAggregateOutputType | null
    _max: AnimeRatingMaxAggregateOutputType | null
  }

  type GetAnimeRatingGroupByPayload<T extends AnimeRatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnimeRatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnimeRatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnimeRatingGroupByOutputType[P]>
            : GetScalarType<T[P], AnimeRatingGroupByOutputType[P]>
        }
      >
    >


  export type AnimeRatingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    animeEntryId?: boolean
    userId?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    animeEntry?: boolean | AnimeEntryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animeRating"]>

  export type AnimeRatingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    animeEntryId?: boolean
    userId?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    animeEntry?: boolean | AnimeEntryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animeRating"]>

  export type AnimeRatingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    animeEntryId?: boolean
    userId?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    animeEntry?: boolean | AnimeEntryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animeRating"]>

  export type AnimeRatingSelectScalar = {
    id?: boolean
    animeEntryId?: boolean
    userId?: boolean
    value?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnimeRatingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "animeEntryId" | "userId" | "value" | "createdAt" | "updatedAt", ExtArgs["result"]["animeRating"]>
  export type AnimeRatingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animeEntry?: boolean | AnimeEntryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnimeRatingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animeEntry?: boolean | AnimeEntryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnimeRatingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animeEntry?: boolean | AnimeEntryDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AnimeRatingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnimeRating"
    objects: {
      animeEntry: Prisma.$AnimeEntryPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      animeEntryId: string
      userId: string
      value: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["animeRating"]>
    composites: {}
  }

  type AnimeRatingGetPayload<S extends boolean | null | undefined | AnimeRatingDefaultArgs> = $Result.GetResult<Prisma.$AnimeRatingPayload, S>

  type AnimeRatingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnimeRatingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnimeRatingCountAggregateInputType | true
    }

  export interface AnimeRatingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnimeRating'], meta: { name: 'AnimeRating' } }
    /**
     * Find zero or one AnimeRating that matches the filter.
     * @param {AnimeRatingFindUniqueArgs} args - Arguments to find a AnimeRating
     * @example
     * // Get one AnimeRating
     * const animeRating = await prisma.animeRating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnimeRatingFindUniqueArgs>(args: SelectSubset<T, AnimeRatingFindUniqueArgs<ExtArgs>>): Prisma__AnimeRatingClient<$Result.GetResult<Prisma.$AnimeRatingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnimeRating that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnimeRatingFindUniqueOrThrowArgs} args - Arguments to find a AnimeRating
     * @example
     * // Get one AnimeRating
     * const animeRating = await prisma.animeRating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnimeRatingFindUniqueOrThrowArgs>(args: SelectSubset<T, AnimeRatingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnimeRatingClient<$Result.GetResult<Prisma.$AnimeRatingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnimeRating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeRatingFindFirstArgs} args - Arguments to find a AnimeRating
     * @example
     * // Get one AnimeRating
     * const animeRating = await prisma.animeRating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnimeRatingFindFirstArgs>(args?: SelectSubset<T, AnimeRatingFindFirstArgs<ExtArgs>>): Prisma__AnimeRatingClient<$Result.GetResult<Prisma.$AnimeRatingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnimeRating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeRatingFindFirstOrThrowArgs} args - Arguments to find a AnimeRating
     * @example
     * // Get one AnimeRating
     * const animeRating = await prisma.animeRating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnimeRatingFindFirstOrThrowArgs>(args?: SelectSubset<T, AnimeRatingFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnimeRatingClient<$Result.GetResult<Prisma.$AnimeRatingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnimeRatings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeRatingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnimeRatings
     * const animeRatings = await prisma.animeRating.findMany()
     * 
     * // Get first 10 AnimeRatings
     * const animeRatings = await prisma.animeRating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const animeRatingWithIdOnly = await prisma.animeRating.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnimeRatingFindManyArgs>(args?: SelectSubset<T, AnimeRatingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeRatingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnimeRating.
     * @param {AnimeRatingCreateArgs} args - Arguments to create a AnimeRating.
     * @example
     * // Create one AnimeRating
     * const AnimeRating = await prisma.animeRating.create({
     *   data: {
     *     // ... data to create a AnimeRating
     *   }
     * })
     * 
     */
    create<T extends AnimeRatingCreateArgs>(args: SelectSubset<T, AnimeRatingCreateArgs<ExtArgs>>): Prisma__AnimeRatingClient<$Result.GetResult<Prisma.$AnimeRatingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnimeRatings.
     * @param {AnimeRatingCreateManyArgs} args - Arguments to create many AnimeRatings.
     * @example
     * // Create many AnimeRatings
     * const animeRating = await prisma.animeRating.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnimeRatingCreateManyArgs>(args?: SelectSubset<T, AnimeRatingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnimeRatings and returns the data saved in the database.
     * @param {AnimeRatingCreateManyAndReturnArgs} args - Arguments to create many AnimeRatings.
     * @example
     * // Create many AnimeRatings
     * const animeRating = await prisma.animeRating.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnimeRatings and only return the `id`
     * const animeRatingWithIdOnly = await prisma.animeRating.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnimeRatingCreateManyAndReturnArgs>(args?: SelectSubset<T, AnimeRatingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeRatingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnimeRating.
     * @param {AnimeRatingDeleteArgs} args - Arguments to delete one AnimeRating.
     * @example
     * // Delete one AnimeRating
     * const AnimeRating = await prisma.animeRating.delete({
     *   where: {
     *     // ... filter to delete one AnimeRating
     *   }
     * })
     * 
     */
    delete<T extends AnimeRatingDeleteArgs>(args: SelectSubset<T, AnimeRatingDeleteArgs<ExtArgs>>): Prisma__AnimeRatingClient<$Result.GetResult<Prisma.$AnimeRatingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnimeRating.
     * @param {AnimeRatingUpdateArgs} args - Arguments to update one AnimeRating.
     * @example
     * // Update one AnimeRating
     * const animeRating = await prisma.animeRating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnimeRatingUpdateArgs>(args: SelectSubset<T, AnimeRatingUpdateArgs<ExtArgs>>): Prisma__AnimeRatingClient<$Result.GetResult<Prisma.$AnimeRatingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnimeRatings.
     * @param {AnimeRatingDeleteManyArgs} args - Arguments to filter AnimeRatings to delete.
     * @example
     * // Delete a few AnimeRatings
     * const { count } = await prisma.animeRating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnimeRatingDeleteManyArgs>(args?: SelectSubset<T, AnimeRatingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnimeRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeRatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnimeRatings
     * const animeRating = await prisma.animeRating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnimeRatingUpdateManyArgs>(args: SelectSubset<T, AnimeRatingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnimeRatings and returns the data updated in the database.
     * @param {AnimeRatingUpdateManyAndReturnArgs} args - Arguments to update many AnimeRatings.
     * @example
     * // Update many AnimeRatings
     * const animeRating = await prisma.animeRating.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnimeRatings and only return the `id`
     * const animeRatingWithIdOnly = await prisma.animeRating.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnimeRatingUpdateManyAndReturnArgs>(args: SelectSubset<T, AnimeRatingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeRatingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnimeRating.
     * @param {AnimeRatingUpsertArgs} args - Arguments to update or create a AnimeRating.
     * @example
     * // Update or create a AnimeRating
     * const animeRating = await prisma.animeRating.upsert({
     *   create: {
     *     // ... data to create a AnimeRating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnimeRating we want to update
     *   }
     * })
     */
    upsert<T extends AnimeRatingUpsertArgs>(args: SelectSubset<T, AnimeRatingUpsertArgs<ExtArgs>>): Prisma__AnimeRatingClient<$Result.GetResult<Prisma.$AnimeRatingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnimeRatings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeRatingCountArgs} args - Arguments to filter AnimeRatings to count.
     * @example
     * // Count the number of AnimeRatings
     * const count = await prisma.animeRating.count({
     *   where: {
     *     // ... the filter for the AnimeRatings we want to count
     *   }
     * })
    **/
    count<T extends AnimeRatingCountArgs>(
      args?: Subset<T, AnimeRatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnimeRatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnimeRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeRatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnimeRatingAggregateArgs>(args: Subset<T, AnimeRatingAggregateArgs>): Prisma.PrismaPromise<GetAnimeRatingAggregateType<T>>

    /**
     * Group by AnimeRating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeRatingGroupByArgs} args - Group by arguments.
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
      T extends AnimeRatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnimeRatingGroupByArgs['orderBy'] }
        : { orderBy?: AnimeRatingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnimeRatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimeRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnimeRating model
   */
  readonly fields: AnimeRatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnimeRating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnimeRatingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    animeEntry<T extends AnimeEntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnimeEntryDefaultArgs<ExtArgs>>): Prisma__AnimeEntryClient<$Result.GetResult<Prisma.$AnimeEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AnimeRating model
   */
  interface AnimeRatingFieldRefs {
    readonly id: FieldRef<"AnimeRating", 'String'>
    readonly animeEntryId: FieldRef<"AnimeRating", 'String'>
    readonly userId: FieldRef<"AnimeRating", 'String'>
    readonly value: FieldRef<"AnimeRating", 'Int'>
    readonly createdAt: FieldRef<"AnimeRating", 'DateTime'>
    readonly updatedAt: FieldRef<"AnimeRating", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnimeRating findUnique
   */
  export type AnimeRatingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeRating
     */
    select?: AnimeRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeRating
     */
    omit?: AnimeRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeRatingInclude<ExtArgs> | null
    /**
     * Filter, which AnimeRating to fetch.
     */
    where: AnimeRatingWhereUniqueInput
  }

  /**
   * AnimeRating findUniqueOrThrow
   */
  export type AnimeRatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeRating
     */
    select?: AnimeRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeRating
     */
    omit?: AnimeRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeRatingInclude<ExtArgs> | null
    /**
     * Filter, which AnimeRating to fetch.
     */
    where: AnimeRatingWhereUniqueInput
  }

  /**
   * AnimeRating findFirst
   */
  export type AnimeRatingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeRating
     */
    select?: AnimeRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeRating
     */
    omit?: AnimeRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeRatingInclude<ExtArgs> | null
    /**
     * Filter, which AnimeRating to fetch.
     */
    where?: AnimeRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeRatings to fetch.
     */
    orderBy?: AnimeRatingOrderByWithRelationInput | AnimeRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnimeRatings.
     */
    cursor?: AnimeRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnimeRatings.
     */
    distinct?: AnimeRatingScalarFieldEnum | AnimeRatingScalarFieldEnum[]
  }

  /**
   * AnimeRating findFirstOrThrow
   */
  export type AnimeRatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeRating
     */
    select?: AnimeRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeRating
     */
    omit?: AnimeRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeRatingInclude<ExtArgs> | null
    /**
     * Filter, which AnimeRating to fetch.
     */
    where?: AnimeRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeRatings to fetch.
     */
    orderBy?: AnimeRatingOrderByWithRelationInput | AnimeRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnimeRatings.
     */
    cursor?: AnimeRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeRatings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnimeRatings.
     */
    distinct?: AnimeRatingScalarFieldEnum | AnimeRatingScalarFieldEnum[]
  }

  /**
   * AnimeRating findMany
   */
  export type AnimeRatingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeRating
     */
    select?: AnimeRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeRating
     */
    omit?: AnimeRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeRatingInclude<ExtArgs> | null
    /**
     * Filter, which AnimeRatings to fetch.
     */
    where?: AnimeRatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeRatings to fetch.
     */
    orderBy?: AnimeRatingOrderByWithRelationInput | AnimeRatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnimeRatings.
     */
    cursor?: AnimeRatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeRatings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeRatings.
     */
    skip?: number
    distinct?: AnimeRatingScalarFieldEnum | AnimeRatingScalarFieldEnum[]
  }

  /**
   * AnimeRating create
   */
  export type AnimeRatingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeRating
     */
    select?: AnimeRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeRating
     */
    omit?: AnimeRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeRatingInclude<ExtArgs> | null
    /**
     * The data needed to create a AnimeRating.
     */
    data: XOR<AnimeRatingCreateInput, AnimeRatingUncheckedCreateInput>
  }

  /**
   * AnimeRating createMany
   */
  export type AnimeRatingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnimeRatings.
     */
    data: AnimeRatingCreateManyInput | AnimeRatingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnimeRating createManyAndReturn
   */
  export type AnimeRatingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeRating
     */
    select?: AnimeRatingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeRating
     */
    omit?: AnimeRatingOmit<ExtArgs> | null
    /**
     * The data used to create many AnimeRatings.
     */
    data: AnimeRatingCreateManyInput | AnimeRatingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeRatingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnimeRating update
   */
  export type AnimeRatingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeRating
     */
    select?: AnimeRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeRating
     */
    omit?: AnimeRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeRatingInclude<ExtArgs> | null
    /**
     * The data needed to update a AnimeRating.
     */
    data: XOR<AnimeRatingUpdateInput, AnimeRatingUncheckedUpdateInput>
    /**
     * Choose, which AnimeRating to update.
     */
    where: AnimeRatingWhereUniqueInput
  }

  /**
   * AnimeRating updateMany
   */
  export type AnimeRatingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnimeRatings.
     */
    data: XOR<AnimeRatingUpdateManyMutationInput, AnimeRatingUncheckedUpdateManyInput>
    /**
     * Filter which AnimeRatings to update
     */
    where?: AnimeRatingWhereInput
    /**
     * Limit how many AnimeRatings to update.
     */
    limit?: number
  }

  /**
   * AnimeRating updateManyAndReturn
   */
  export type AnimeRatingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeRating
     */
    select?: AnimeRatingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeRating
     */
    omit?: AnimeRatingOmit<ExtArgs> | null
    /**
     * The data used to update AnimeRatings.
     */
    data: XOR<AnimeRatingUpdateManyMutationInput, AnimeRatingUncheckedUpdateManyInput>
    /**
     * Filter which AnimeRatings to update
     */
    where?: AnimeRatingWhereInput
    /**
     * Limit how many AnimeRatings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeRatingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnimeRating upsert
   */
  export type AnimeRatingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeRating
     */
    select?: AnimeRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeRating
     */
    omit?: AnimeRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeRatingInclude<ExtArgs> | null
    /**
     * The filter to search for the AnimeRating to update in case it exists.
     */
    where: AnimeRatingWhereUniqueInput
    /**
     * In case the AnimeRating found by the `where` argument doesn't exist, create a new AnimeRating with this data.
     */
    create: XOR<AnimeRatingCreateInput, AnimeRatingUncheckedCreateInput>
    /**
     * In case the AnimeRating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnimeRatingUpdateInput, AnimeRatingUncheckedUpdateInput>
  }

  /**
   * AnimeRating delete
   */
  export type AnimeRatingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeRating
     */
    select?: AnimeRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeRating
     */
    omit?: AnimeRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeRatingInclude<ExtArgs> | null
    /**
     * Filter which AnimeRating to delete.
     */
    where: AnimeRatingWhereUniqueInput
  }

  /**
   * AnimeRating deleteMany
   */
  export type AnimeRatingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnimeRatings to delete
     */
    where?: AnimeRatingWhereInput
    /**
     * Limit how many AnimeRatings to delete.
     */
    limit?: number
  }

  /**
   * AnimeRating without action
   */
  export type AnimeRatingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeRating
     */
    select?: AnimeRatingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeRating
     */
    omit?: AnimeRatingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeRatingInclude<ExtArgs> | null
  }


  /**
   * Model AnimeEpisode
   */

  export type AggregateAnimeEpisode = {
    _count: AnimeEpisodeCountAggregateOutputType | null
    _avg: AnimeEpisodeAvgAggregateOutputType | null
    _sum: AnimeEpisodeSumAggregateOutputType | null
    _min: AnimeEpisodeMinAggregateOutputType | null
    _max: AnimeEpisodeMaxAggregateOutputType | null
  }

  export type AnimeEpisodeAvgAggregateOutputType = {
    episodeNumber: number | null
    durationMinutes: number | null
  }

  export type AnimeEpisodeSumAggregateOutputType = {
    episodeNumber: number | null
    durationMinutes: number | null
  }

  export type AnimeEpisodeMinAggregateOutputType = {
    id: string | null
    animeEntryId: string | null
    episodeNumber: number | null
    title: string | null
    description: string | null
    durationMinutes: number | null
    airDate: Date | null
    videoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnimeEpisodeMaxAggregateOutputType = {
    id: string | null
    animeEntryId: string | null
    episodeNumber: number | null
    title: string | null
    description: string | null
    durationMinutes: number | null
    airDate: Date | null
    videoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnimeEpisodeCountAggregateOutputType = {
    id: number
    animeEntryId: number
    episodeNumber: number
    title: number
    description: number
    durationMinutes: number
    airDate: number
    videoUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnimeEpisodeAvgAggregateInputType = {
    episodeNumber?: true
    durationMinutes?: true
  }

  export type AnimeEpisodeSumAggregateInputType = {
    episodeNumber?: true
    durationMinutes?: true
  }

  export type AnimeEpisodeMinAggregateInputType = {
    id?: true
    animeEntryId?: true
    episodeNumber?: true
    title?: true
    description?: true
    durationMinutes?: true
    airDate?: true
    videoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnimeEpisodeMaxAggregateInputType = {
    id?: true
    animeEntryId?: true
    episodeNumber?: true
    title?: true
    description?: true
    durationMinutes?: true
    airDate?: true
    videoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnimeEpisodeCountAggregateInputType = {
    id?: true
    animeEntryId?: true
    episodeNumber?: true
    title?: true
    description?: true
    durationMinutes?: true
    airDate?: true
    videoUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnimeEpisodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnimeEpisode to aggregate.
     */
    where?: AnimeEpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeEpisodes to fetch.
     */
    orderBy?: AnimeEpisodeOrderByWithRelationInput | AnimeEpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnimeEpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeEpisodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeEpisodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnimeEpisodes
    **/
    _count?: true | AnimeEpisodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnimeEpisodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnimeEpisodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnimeEpisodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnimeEpisodeMaxAggregateInputType
  }

  export type GetAnimeEpisodeAggregateType<T extends AnimeEpisodeAggregateArgs> = {
        [P in keyof T & keyof AggregateAnimeEpisode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnimeEpisode[P]>
      : GetScalarType<T[P], AggregateAnimeEpisode[P]>
  }




  export type AnimeEpisodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeEpisodeWhereInput
    orderBy?: AnimeEpisodeOrderByWithAggregationInput | AnimeEpisodeOrderByWithAggregationInput[]
    by: AnimeEpisodeScalarFieldEnum[] | AnimeEpisodeScalarFieldEnum
    having?: AnimeEpisodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnimeEpisodeCountAggregateInputType | true
    _avg?: AnimeEpisodeAvgAggregateInputType
    _sum?: AnimeEpisodeSumAggregateInputType
    _min?: AnimeEpisodeMinAggregateInputType
    _max?: AnimeEpisodeMaxAggregateInputType
  }

  export type AnimeEpisodeGroupByOutputType = {
    id: string
    animeEntryId: string
    episodeNumber: number
    title: string | null
    description: string | null
    durationMinutes: number | null
    airDate: Date | null
    videoUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: AnimeEpisodeCountAggregateOutputType | null
    _avg: AnimeEpisodeAvgAggregateOutputType | null
    _sum: AnimeEpisodeSumAggregateOutputType | null
    _min: AnimeEpisodeMinAggregateOutputType | null
    _max: AnimeEpisodeMaxAggregateOutputType | null
  }

  type GetAnimeEpisodeGroupByPayload<T extends AnimeEpisodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnimeEpisodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnimeEpisodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnimeEpisodeGroupByOutputType[P]>
            : GetScalarType<T[P], AnimeEpisodeGroupByOutputType[P]>
        }
      >
    >


  export type AnimeEpisodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    animeEntryId?: boolean
    episodeNumber?: boolean
    title?: boolean
    description?: boolean
    durationMinutes?: boolean
    airDate?: boolean
    videoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    animeEntry?: boolean | AnimeEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animeEpisode"]>

  export type AnimeEpisodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    animeEntryId?: boolean
    episodeNumber?: boolean
    title?: boolean
    description?: boolean
    durationMinutes?: boolean
    airDate?: boolean
    videoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    animeEntry?: boolean | AnimeEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animeEpisode"]>

  export type AnimeEpisodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    animeEntryId?: boolean
    episodeNumber?: boolean
    title?: boolean
    description?: boolean
    durationMinutes?: boolean
    airDate?: boolean
    videoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    animeEntry?: boolean | AnimeEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animeEpisode"]>

  export type AnimeEpisodeSelectScalar = {
    id?: boolean
    animeEntryId?: boolean
    episodeNumber?: boolean
    title?: boolean
    description?: boolean
    durationMinutes?: boolean
    airDate?: boolean
    videoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnimeEpisodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "animeEntryId" | "episodeNumber" | "title" | "description" | "durationMinutes" | "airDate" | "videoUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["animeEpisode"]>
  export type AnimeEpisodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animeEntry?: boolean | AnimeEntryDefaultArgs<ExtArgs>
  }
  export type AnimeEpisodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animeEntry?: boolean | AnimeEntryDefaultArgs<ExtArgs>
  }
  export type AnimeEpisodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animeEntry?: boolean | AnimeEntryDefaultArgs<ExtArgs>
  }

  export type $AnimeEpisodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnimeEpisode"
    objects: {
      animeEntry: Prisma.$AnimeEntryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      animeEntryId: string
      episodeNumber: number
      title: string | null
      description: string | null
      durationMinutes: number | null
      airDate: Date | null
      videoUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["animeEpisode"]>
    composites: {}
  }

  type AnimeEpisodeGetPayload<S extends boolean | null | undefined | AnimeEpisodeDefaultArgs> = $Result.GetResult<Prisma.$AnimeEpisodePayload, S>

  type AnimeEpisodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnimeEpisodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnimeEpisodeCountAggregateInputType | true
    }

  export interface AnimeEpisodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnimeEpisode'], meta: { name: 'AnimeEpisode' } }
    /**
     * Find zero or one AnimeEpisode that matches the filter.
     * @param {AnimeEpisodeFindUniqueArgs} args - Arguments to find a AnimeEpisode
     * @example
     * // Get one AnimeEpisode
     * const animeEpisode = await prisma.animeEpisode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnimeEpisodeFindUniqueArgs>(args: SelectSubset<T, AnimeEpisodeFindUniqueArgs<ExtArgs>>): Prisma__AnimeEpisodeClient<$Result.GetResult<Prisma.$AnimeEpisodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnimeEpisode that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnimeEpisodeFindUniqueOrThrowArgs} args - Arguments to find a AnimeEpisode
     * @example
     * // Get one AnimeEpisode
     * const animeEpisode = await prisma.animeEpisode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnimeEpisodeFindUniqueOrThrowArgs>(args: SelectSubset<T, AnimeEpisodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnimeEpisodeClient<$Result.GetResult<Prisma.$AnimeEpisodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnimeEpisode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeEpisodeFindFirstArgs} args - Arguments to find a AnimeEpisode
     * @example
     * // Get one AnimeEpisode
     * const animeEpisode = await prisma.animeEpisode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnimeEpisodeFindFirstArgs>(args?: SelectSubset<T, AnimeEpisodeFindFirstArgs<ExtArgs>>): Prisma__AnimeEpisodeClient<$Result.GetResult<Prisma.$AnimeEpisodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnimeEpisode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeEpisodeFindFirstOrThrowArgs} args - Arguments to find a AnimeEpisode
     * @example
     * // Get one AnimeEpisode
     * const animeEpisode = await prisma.animeEpisode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnimeEpisodeFindFirstOrThrowArgs>(args?: SelectSubset<T, AnimeEpisodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnimeEpisodeClient<$Result.GetResult<Prisma.$AnimeEpisodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnimeEpisodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeEpisodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnimeEpisodes
     * const animeEpisodes = await prisma.animeEpisode.findMany()
     * 
     * // Get first 10 AnimeEpisodes
     * const animeEpisodes = await prisma.animeEpisode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const animeEpisodeWithIdOnly = await prisma.animeEpisode.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnimeEpisodeFindManyArgs>(args?: SelectSubset<T, AnimeEpisodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeEpisodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnimeEpisode.
     * @param {AnimeEpisodeCreateArgs} args - Arguments to create a AnimeEpisode.
     * @example
     * // Create one AnimeEpisode
     * const AnimeEpisode = await prisma.animeEpisode.create({
     *   data: {
     *     // ... data to create a AnimeEpisode
     *   }
     * })
     * 
     */
    create<T extends AnimeEpisodeCreateArgs>(args: SelectSubset<T, AnimeEpisodeCreateArgs<ExtArgs>>): Prisma__AnimeEpisodeClient<$Result.GetResult<Prisma.$AnimeEpisodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnimeEpisodes.
     * @param {AnimeEpisodeCreateManyArgs} args - Arguments to create many AnimeEpisodes.
     * @example
     * // Create many AnimeEpisodes
     * const animeEpisode = await prisma.animeEpisode.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnimeEpisodeCreateManyArgs>(args?: SelectSubset<T, AnimeEpisodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnimeEpisodes and returns the data saved in the database.
     * @param {AnimeEpisodeCreateManyAndReturnArgs} args - Arguments to create many AnimeEpisodes.
     * @example
     * // Create many AnimeEpisodes
     * const animeEpisode = await prisma.animeEpisode.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnimeEpisodes and only return the `id`
     * const animeEpisodeWithIdOnly = await prisma.animeEpisode.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnimeEpisodeCreateManyAndReturnArgs>(args?: SelectSubset<T, AnimeEpisodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeEpisodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnimeEpisode.
     * @param {AnimeEpisodeDeleteArgs} args - Arguments to delete one AnimeEpisode.
     * @example
     * // Delete one AnimeEpisode
     * const AnimeEpisode = await prisma.animeEpisode.delete({
     *   where: {
     *     // ... filter to delete one AnimeEpisode
     *   }
     * })
     * 
     */
    delete<T extends AnimeEpisodeDeleteArgs>(args: SelectSubset<T, AnimeEpisodeDeleteArgs<ExtArgs>>): Prisma__AnimeEpisodeClient<$Result.GetResult<Prisma.$AnimeEpisodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnimeEpisode.
     * @param {AnimeEpisodeUpdateArgs} args - Arguments to update one AnimeEpisode.
     * @example
     * // Update one AnimeEpisode
     * const animeEpisode = await prisma.animeEpisode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnimeEpisodeUpdateArgs>(args: SelectSubset<T, AnimeEpisodeUpdateArgs<ExtArgs>>): Prisma__AnimeEpisodeClient<$Result.GetResult<Prisma.$AnimeEpisodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnimeEpisodes.
     * @param {AnimeEpisodeDeleteManyArgs} args - Arguments to filter AnimeEpisodes to delete.
     * @example
     * // Delete a few AnimeEpisodes
     * const { count } = await prisma.animeEpisode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnimeEpisodeDeleteManyArgs>(args?: SelectSubset<T, AnimeEpisodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnimeEpisodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeEpisodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnimeEpisodes
     * const animeEpisode = await prisma.animeEpisode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnimeEpisodeUpdateManyArgs>(args: SelectSubset<T, AnimeEpisodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnimeEpisodes and returns the data updated in the database.
     * @param {AnimeEpisodeUpdateManyAndReturnArgs} args - Arguments to update many AnimeEpisodes.
     * @example
     * // Update many AnimeEpisodes
     * const animeEpisode = await prisma.animeEpisode.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnimeEpisodes and only return the `id`
     * const animeEpisodeWithIdOnly = await prisma.animeEpisode.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnimeEpisodeUpdateManyAndReturnArgs>(args: SelectSubset<T, AnimeEpisodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeEpisodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnimeEpisode.
     * @param {AnimeEpisodeUpsertArgs} args - Arguments to update or create a AnimeEpisode.
     * @example
     * // Update or create a AnimeEpisode
     * const animeEpisode = await prisma.animeEpisode.upsert({
     *   create: {
     *     // ... data to create a AnimeEpisode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnimeEpisode we want to update
     *   }
     * })
     */
    upsert<T extends AnimeEpisodeUpsertArgs>(args: SelectSubset<T, AnimeEpisodeUpsertArgs<ExtArgs>>): Prisma__AnimeEpisodeClient<$Result.GetResult<Prisma.$AnimeEpisodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnimeEpisodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeEpisodeCountArgs} args - Arguments to filter AnimeEpisodes to count.
     * @example
     * // Count the number of AnimeEpisodes
     * const count = await prisma.animeEpisode.count({
     *   where: {
     *     // ... the filter for the AnimeEpisodes we want to count
     *   }
     * })
    **/
    count<T extends AnimeEpisodeCountArgs>(
      args?: Subset<T, AnimeEpisodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnimeEpisodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnimeEpisode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeEpisodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnimeEpisodeAggregateArgs>(args: Subset<T, AnimeEpisodeAggregateArgs>): Prisma.PrismaPromise<GetAnimeEpisodeAggregateType<T>>

    /**
     * Group by AnimeEpisode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeEpisodeGroupByArgs} args - Group by arguments.
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
      T extends AnimeEpisodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnimeEpisodeGroupByArgs['orderBy'] }
        : { orderBy?: AnimeEpisodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnimeEpisodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimeEpisodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnimeEpisode model
   */
  readonly fields: AnimeEpisodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnimeEpisode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnimeEpisodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    animeEntry<T extends AnimeEntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnimeEntryDefaultArgs<ExtArgs>>): Prisma__AnimeEntryClient<$Result.GetResult<Prisma.$AnimeEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AnimeEpisode model
   */
  interface AnimeEpisodeFieldRefs {
    readonly id: FieldRef<"AnimeEpisode", 'String'>
    readonly animeEntryId: FieldRef<"AnimeEpisode", 'String'>
    readonly episodeNumber: FieldRef<"AnimeEpisode", 'Int'>
    readonly title: FieldRef<"AnimeEpisode", 'String'>
    readonly description: FieldRef<"AnimeEpisode", 'String'>
    readonly durationMinutes: FieldRef<"AnimeEpisode", 'Int'>
    readonly airDate: FieldRef<"AnimeEpisode", 'DateTime'>
    readonly videoUrl: FieldRef<"AnimeEpisode", 'String'>
    readonly createdAt: FieldRef<"AnimeEpisode", 'DateTime'>
    readonly updatedAt: FieldRef<"AnimeEpisode", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnimeEpisode findUnique
   */
  export type AnimeEpisodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEpisode
     */
    select?: AnimeEpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEpisode
     */
    omit?: AnimeEpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEpisodeInclude<ExtArgs> | null
    /**
     * Filter, which AnimeEpisode to fetch.
     */
    where: AnimeEpisodeWhereUniqueInput
  }

  /**
   * AnimeEpisode findUniqueOrThrow
   */
  export type AnimeEpisodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEpisode
     */
    select?: AnimeEpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEpisode
     */
    omit?: AnimeEpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEpisodeInclude<ExtArgs> | null
    /**
     * Filter, which AnimeEpisode to fetch.
     */
    where: AnimeEpisodeWhereUniqueInput
  }

  /**
   * AnimeEpisode findFirst
   */
  export type AnimeEpisodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEpisode
     */
    select?: AnimeEpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEpisode
     */
    omit?: AnimeEpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEpisodeInclude<ExtArgs> | null
    /**
     * Filter, which AnimeEpisode to fetch.
     */
    where?: AnimeEpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeEpisodes to fetch.
     */
    orderBy?: AnimeEpisodeOrderByWithRelationInput | AnimeEpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnimeEpisodes.
     */
    cursor?: AnimeEpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeEpisodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeEpisodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnimeEpisodes.
     */
    distinct?: AnimeEpisodeScalarFieldEnum | AnimeEpisodeScalarFieldEnum[]
  }

  /**
   * AnimeEpisode findFirstOrThrow
   */
  export type AnimeEpisodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEpisode
     */
    select?: AnimeEpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEpisode
     */
    omit?: AnimeEpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEpisodeInclude<ExtArgs> | null
    /**
     * Filter, which AnimeEpisode to fetch.
     */
    where?: AnimeEpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeEpisodes to fetch.
     */
    orderBy?: AnimeEpisodeOrderByWithRelationInput | AnimeEpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnimeEpisodes.
     */
    cursor?: AnimeEpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeEpisodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeEpisodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnimeEpisodes.
     */
    distinct?: AnimeEpisodeScalarFieldEnum | AnimeEpisodeScalarFieldEnum[]
  }

  /**
   * AnimeEpisode findMany
   */
  export type AnimeEpisodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEpisode
     */
    select?: AnimeEpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEpisode
     */
    omit?: AnimeEpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEpisodeInclude<ExtArgs> | null
    /**
     * Filter, which AnimeEpisodes to fetch.
     */
    where?: AnimeEpisodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeEpisodes to fetch.
     */
    orderBy?: AnimeEpisodeOrderByWithRelationInput | AnimeEpisodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnimeEpisodes.
     */
    cursor?: AnimeEpisodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeEpisodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeEpisodes.
     */
    skip?: number
    distinct?: AnimeEpisodeScalarFieldEnum | AnimeEpisodeScalarFieldEnum[]
  }

  /**
   * AnimeEpisode create
   */
  export type AnimeEpisodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEpisode
     */
    select?: AnimeEpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEpisode
     */
    omit?: AnimeEpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEpisodeInclude<ExtArgs> | null
    /**
     * The data needed to create a AnimeEpisode.
     */
    data: XOR<AnimeEpisodeCreateInput, AnimeEpisodeUncheckedCreateInput>
  }

  /**
   * AnimeEpisode createMany
   */
  export type AnimeEpisodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnimeEpisodes.
     */
    data: AnimeEpisodeCreateManyInput | AnimeEpisodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnimeEpisode createManyAndReturn
   */
  export type AnimeEpisodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEpisode
     */
    select?: AnimeEpisodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEpisode
     */
    omit?: AnimeEpisodeOmit<ExtArgs> | null
    /**
     * The data used to create many AnimeEpisodes.
     */
    data: AnimeEpisodeCreateManyInput | AnimeEpisodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEpisodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnimeEpisode update
   */
  export type AnimeEpisodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEpisode
     */
    select?: AnimeEpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEpisode
     */
    omit?: AnimeEpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEpisodeInclude<ExtArgs> | null
    /**
     * The data needed to update a AnimeEpisode.
     */
    data: XOR<AnimeEpisodeUpdateInput, AnimeEpisodeUncheckedUpdateInput>
    /**
     * Choose, which AnimeEpisode to update.
     */
    where: AnimeEpisodeWhereUniqueInput
  }

  /**
   * AnimeEpisode updateMany
   */
  export type AnimeEpisodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnimeEpisodes.
     */
    data: XOR<AnimeEpisodeUpdateManyMutationInput, AnimeEpisodeUncheckedUpdateManyInput>
    /**
     * Filter which AnimeEpisodes to update
     */
    where?: AnimeEpisodeWhereInput
    /**
     * Limit how many AnimeEpisodes to update.
     */
    limit?: number
  }

  /**
   * AnimeEpisode updateManyAndReturn
   */
  export type AnimeEpisodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEpisode
     */
    select?: AnimeEpisodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEpisode
     */
    omit?: AnimeEpisodeOmit<ExtArgs> | null
    /**
     * The data used to update AnimeEpisodes.
     */
    data: XOR<AnimeEpisodeUpdateManyMutationInput, AnimeEpisodeUncheckedUpdateManyInput>
    /**
     * Filter which AnimeEpisodes to update
     */
    where?: AnimeEpisodeWhereInput
    /**
     * Limit how many AnimeEpisodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEpisodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnimeEpisode upsert
   */
  export type AnimeEpisodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEpisode
     */
    select?: AnimeEpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEpisode
     */
    omit?: AnimeEpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEpisodeInclude<ExtArgs> | null
    /**
     * The filter to search for the AnimeEpisode to update in case it exists.
     */
    where: AnimeEpisodeWhereUniqueInput
    /**
     * In case the AnimeEpisode found by the `where` argument doesn't exist, create a new AnimeEpisode with this data.
     */
    create: XOR<AnimeEpisodeCreateInput, AnimeEpisodeUncheckedCreateInput>
    /**
     * In case the AnimeEpisode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnimeEpisodeUpdateInput, AnimeEpisodeUncheckedUpdateInput>
  }

  /**
   * AnimeEpisode delete
   */
  export type AnimeEpisodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEpisode
     */
    select?: AnimeEpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEpisode
     */
    omit?: AnimeEpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEpisodeInclude<ExtArgs> | null
    /**
     * Filter which AnimeEpisode to delete.
     */
    where: AnimeEpisodeWhereUniqueInput
  }

  /**
   * AnimeEpisode deleteMany
   */
  export type AnimeEpisodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnimeEpisodes to delete
     */
    where?: AnimeEpisodeWhereInput
    /**
     * Limit how many AnimeEpisodes to delete.
     */
    limit?: number
  }

  /**
   * AnimeEpisode without action
   */
  export type AnimeEpisodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEpisode
     */
    select?: AnimeEpisodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEpisode
     */
    omit?: AnimeEpisodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEpisodeInclude<ExtArgs> | null
  }


  /**
   * Model AnimeAuthor
   */

  export type AggregateAnimeAuthor = {
    _count: AnimeAuthorCountAggregateOutputType | null
    _min: AnimeAuthorMinAggregateOutputType | null
    _max: AnimeAuthorMaxAggregateOutputType | null
  }

  export type AnimeAuthorMinAggregateOutputType = {
    id: string | null
    name: string | null
    bio: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnimeAuthorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    bio: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AnimeAuthorCountAggregateOutputType = {
    id: number
    name: number
    bio: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AnimeAuthorMinAggregateInputType = {
    id?: true
    name?: true
    bio?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnimeAuthorMaxAggregateInputType = {
    id?: true
    name?: true
    bio?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AnimeAuthorCountAggregateInputType = {
    id?: true
    name?: true
    bio?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AnimeAuthorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnimeAuthor to aggregate.
     */
    where?: AnimeAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeAuthors to fetch.
     */
    orderBy?: AnimeAuthorOrderByWithRelationInput | AnimeAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnimeAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeAuthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnimeAuthors
    **/
    _count?: true | AnimeAuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnimeAuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnimeAuthorMaxAggregateInputType
  }

  export type GetAnimeAuthorAggregateType<T extends AnimeAuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateAnimeAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnimeAuthor[P]>
      : GetScalarType<T[P], AggregateAnimeAuthor[P]>
  }




  export type AnimeAuthorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeAuthorWhereInput
    orderBy?: AnimeAuthorOrderByWithAggregationInput | AnimeAuthorOrderByWithAggregationInput[]
    by: AnimeAuthorScalarFieldEnum[] | AnimeAuthorScalarFieldEnum
    having?: AnimeAuthorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnimeAuthorCountAggregateInputType | true
    _min?: AnimeAuthorMinAggregateInputType
    _max?: AnimeAuthorMaxAggregateInputType
  }

  export type AnimeAuthorGroupByOutputType = {
    id: string
    name: string
    bio: string | null
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: AnimeAuthorCountAggregateOutputType | null
    _min: AnimeAuthorMinAggregateOutputType | null
    _max: AnimeAuthorMaxAggregateOutputType | null
  }

  type GetAnimeAuthorGroupByPayload<T extends AnimeAuthorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnimeAuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnimeAuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnimeAuthorGroupByOutputType[P]>
            : GetScalarType<T[P], AnimeAuthorGroupByOutputType[P]>
        }
      >
    >


  export type AnimeAuthorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bio?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    animeLinks?: boolean | AnimeAuthor$animeLinksArgs<ExtArgs>
    _count?: boolean | AnimeAuthorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animeAuthor"]>

  export type AnimeAuthorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bio?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animeAuthor"]>

  export type AnimeAuthorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bio?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animeAuthor"]>

  export type AnimeAuthorSelectScalar = {
    id?: boolean
    name?: boolean
    bio?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AnimeAuthorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "bio" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["animeAuthor"]>
  export type AnimeAuthorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    animeLinks?: boolean | AnimeAuthor$animeLinksArgs<ExtArgs>
    _count?: boolean | AnimeAuthorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnimeAuthorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnimeAuthorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AnimeAuthorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnimeAuthor"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      animeLinks: Prisma.$AnimeEntryAuthorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      bio: string | null
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["animeAuthor"]>
    composites: {}
  }

  type AnimeAuthorGetPayload<S extends boolean | null | undefined | AnimeAuthorDefaultArgs> = $Result.GetResult<Prisma.$AnimeAuthorPayload, S>

  type AnimeAuthorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnimeAuthorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnimeAuthorCountAggregateInputType | true
    }

  export interface AnimeAuthorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnimeAuthor'], meta: { name: 'AnimeAuthor' } }
    /**
     * Find zero or one AnimeAuthor that matches the filter.
     * @param {AnimeAuthorFindUniqueArgs} args - Arguments to find a AnimeAuthor
     * @example
     * // Get one AnimeAuthor
     * const animeAuthor = await prisma.animeAuthor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnimeAuthorFindUniqueArgs>(args: SelectSubset<T, AnimeAuthorFindUniqueArgs<ExtArgs>>): Prisma__AnimeAuthorClient<$Result.GetResult<Prisma.$AnimeAuthorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnimeAuthor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnimeAuthorFindUniqueOrThrowArgs} args - Arguments to find a AnimeAuthor
     * @example
     * // Get one AnimeAuthor
     * const animeAuthor = await prisma.animeAuthor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnimeAuthorFindUniqueOrThrowArgs>(args: SelectSubset<T, AnimeAuthorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnimeAuthorClient<$Result.GetResult<Prisma.$AnimeAuthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnimeAuthor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeAuthorFindFirstArgs} args - Arguments to find a AnimeAuthor
     * @example
     * // Get one AnimeAuthor
     * const animeAuthor = await prisma.animeAuthor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnimeAuthorFindFirstArgs>(args?: SelectSubset<T, AnimeAuthorFindFirstArgs<ExtArgs>>): Prisma__AnimeAuthorClient<$Result.GetResult<Prisma.$AnimeAuthorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnimeAuthor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeAuthorFindFirstOrThrowArgs} args - Arguments to find a AnimeAuthor
     * @example
     * // Get one AnimeAuthor
     * const animeAuthor = await prisma.animeAuthor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnimeAuthorFindFirstOrThrowArgs>(args?: SelectSubset<T, AnimeAuthorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnimeAuthorClient<$Result.GetResult<Prisma.$AnimeAuthorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnimeAuthors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeAuthorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnimeAuthors
     * const animeAuthors = await prisma.animeAuthor.findMany()
     * 
     * // Get first 10 AnimeAuthors
     * const animeAuthors = await prisma.animeAuthor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const animeAuthorWithIdOnly = await prisma.animeAuthor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnimeAuthorFindManyArgs>(args?: SelectSubset<T, AnimeAuthorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeAuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnimeAuthor.
     * @param {AnimeAuthorCreateArgs} args - Arguments to create a AnimeAuthor.
     * @example
     * // Create one AnimeAuthor
     * const AnimeAuthor = await prisma.animeAuthor.create({
     *   data: {
     *     // ... data to create a AnimeAuthor
     *   }
     * })
     * 
     */
    create<T extends AnimeAuthorCreateArgs>(args: SelectSubset<T, AnimeAuthorCreateArgs<ExtArgs>>): Prisma__AnimeAuthorClient<$Result.GetResult<Prisma.$AnimeAuthorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnimeAuthors.
     * @param {AnimeAuthorCreateManyArgs} args - Arguments to create many AnimeAuthors.
     * @example
     * // Create many AnimeAuthors
     * const animeAuthor = await prisma.animeAuthor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnimeAuthorCreateManyArgs>(args?: SelectSubset<T, AnimeAuthorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnimeAuthors and returns the data saved in the database.
     * @param {AnimeAuthorCreateManyAndReturnArgs} args - Arguments to create many AnimeAuthors.
     * @example
     * // Create many AnimeAuthors
     * const animeAuthor = await prisma.animeAuthor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnimeAuthors and only return the `id`
     * const animeAuthorWithIdOnly = await prisma.animeAuthor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnimeAuthorCreateManyAndReturnArgs>(args?: SelectSubset<T, AnimeAuthorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeAuthorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnimeAuthor.
     * @param {AnimeAuthorDeleteArgs} args - Arguments to delete one AnimeAuthor.
     * @example
     * // Delete one AnimeAuthor
     * const AnimeAuthor = await prisma.animeAuthor.delete({
     *   where: {
     *     // ... filter to delete one AnimeAuthor
     *   }
     * })
     * 
     */
    delete<T extends AnimeAuthorDeleteArgs>(args: SelectSubset<T, AnimeAuthorDeleteArgs<ExtArgs>>): Prisma__AnimeAuthorClient<$Result.GetResult<Prisma.$AnimeAuthorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnimeAuthor.
     * @param {AnimeAuthorUpdateArgs} args - Arguments to update one AnimeAuthor.
     * @example
     * // Update one AnimeAuthor
     * const animeAuthor = await prisma.animeAuthor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnimeAuthorUpdateArgs>(args: SelectSubset<T, AnimeAuthorUpdateArgs<ExtArgs>>): Prisma__AnimeAuthorClient<$Result.GetResult<Prisma.$AnimeAuthorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnimeAuthors.
     * @param {AnimeAuthorDeleteManyArgs} args - Arguments to filter AnimeAuthors to delete.
     * @example
     * // Delete a few AnimeAuthors
     * const { count } = await prisma.animeAuthor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnimeAuthorDeleteManyArgs>(args?: SelectSubset<T, AnimeAuthorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnimeAuthors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeAuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnimeAuthors
     * const animeAuthor = await prisma.animeAuthor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnimeAuthorUpdateManyArgs>(args: SelectSubset<T, AnimeAuthorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnimeAuthors and returns the data updated in the database.
     * @param {AnimeAuthorUpdateManyAndReturnArgs} args - Arguments to update many AnimeAuthors.
     * @example
     * // Update many AnimeAuthors
     * const animeAuthor = await prisma.animeAuthor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnimeAuthors and only return the `id`
     * const animeAuthorWithIdOnly = await prisma.animeAuthor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnimeAuthorUpdateManyAndReturnArgs>(args: SelectSubset<T, AnimeAuthorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeAuthorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnimeAuthor.
     * @param {AnimeAuthorUpsertArgs} args - Arguments to update or create a AnimeAuthor.
     * @example
     * // Update or create a AnimeAuthor
     * const animeAuthor = await prisma.animeAuthor.upsert({
     *   create: {
     *     // ... data to create a AnimeAuthor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnimeAuthor we want to update
     *   }
     * })
     */
    upsert<T extends AnimeAuthorUpsertArgs>(args: SelectSubset<T, AnimeAuthorUpsertArgs<ExtArgs>>): Prisma__AnimeAuthorClient<$Result.GetResult<Prisma.$AnimeAuthorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnimeAuthors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeAuthorCountArgs} args - Arguments to filter AnimeAuthors to count.
     * @example
     * // Count the number of AnimeAuthors
     * const count = await prisma.animeAuthor.count({
     *   where: {
     *     // ... the filter for the AnimeAuthors we want to count
     *   }
     * })
    **/
    count<T extends AnimeAuthorCountArgs>(
      args?: Subset<T, AnimeAuthorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnimeAuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnimeAuthor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeAuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnimeAuthorAggregateArgs>(args: Subset<T, AnimeAuthorAggregateArgs>): Prisma.PrismaPromise<GetAnimeAuthorAggregateType<T>>

    /**
     * Group by AnimeAuthor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeAuthorGroupByArgs} args - Group by arguments.
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
      T extends AnimeAuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnimeAuthorGroupByArgs['orderBy'] }
        : { orderBy?: AnimeAuthorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnimeAuthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimeAuthorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnimeAuthor model
   */
  readonly fields: AnimeAuthorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnimeAuthor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnimeAuthorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    animeLinks<T extends AnimeAuthor$animeLinksArgs<ExtArgs> = {}>(args?: Subset<T, AnimeAuthor$animeLinksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeEntryAuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the AnimeAuthor model
   */
  interface AnimeAuthorFieldRefs {
    readonly id: FieldRef<"AnimeAuthor", 'String'>
    readonly name: FieldRef<"AnimeAuthor", 'String'>
    readonly bio: FieldRef<"AnimeAuthor", 'String'>
    readonly userId: FieldRef<"AnimeAuthor", 'String'>
    readonly createdAt: FieldRef<"AnimeAuthor", 'DateTime'>
    readonly updatedAt: FieldRef<"AnimeAuthor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnimeAuthor findUnique
   */
  export type AnimeAuthorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeAuthor
     */
    select?: AnimeAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeAuthor
     */
    omit?: AnimeAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeAuthorInclude<ExtArgs> | null
    /**
     * Filter, which AnimeAuthor to fetch.
     */
    where: AnimeAuthorWhereUniqueInput
  }

  /**
   * AnimeAuthor findUniqueOrThrow
   */
  export type AnimeAuthorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeAuthor
     */
    select?: AnimeAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeAuthor
     */
    omit?: AnimeAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeAuthorInclude<ExtArgs> | null
    /**
     * Filter, which AnimeAuthor to fetch.
     */
    where: AnimeAuthorWhereUniqueInput
  }

  /**
   * AnimeAuthor findFirst
   */
  export type AnimeAuthorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeAuthor
     */
    select?: AnimeAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeAuthor
     */
    omit?: AnimeAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeAuthorInclude<ExtArgs> | null
    /**
     * Filter, which AnimeAuthor to fetch.
     */
    where?: AnimeAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeAuthors to fetch.
     */
    orderBy?: AnimeAuthorOrderByWithRelationInput | AnimeAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnimeAuthors.
     */
    cursor?: AnimeAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeAuthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnimeAuthors.
     */
    distinct?: AnimeAuthorScalarFieldEnum | AnimeAuthorScalarFieldEnum[]
  }

  /**
   * AnimeAuthor findFirstOrThrow
   */
  export type AnimeAuthorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeAuthor
     */
    select?: AnimeAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeAuthor
     */
    omit?: AnimeAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeAuthorInclude<ExtArgs> | null
    /**
     * Filter, which AnimeAuthor to fetch.
     */
    where?: AnimeAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeAuthors to fetch.
     */
    orderBy?: AnimeAuthorOrderByWithRelationInput | AnimeAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnimeAuthors.
     */
    cursor?: AnimeAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeAuthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnimeAuthors.
     */
    distinct?: AnimeAuthorScalarFieldEnum | AnimeAuthorScalarFieldEnum[]
  }

  /**
   * AnimeAuthor findMany
   */
  export type AnimeAuthorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeAuthor
     */
    select?: AnimeAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeAuthor
     */
    omit?: AnimeAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeAuthorInclude<ExtArgs> | null
    /**
     * Filter, which AnimeAuthors to fetch.
     */
    where?: AnimeAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeAuthors to fetch.
     */
    orderBy?: AnimeAuthorOrderByWithRelationInput | AnimeAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnimeAuthors.
     */
    cursor?: AnimeAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeAuthors.
     */
    skip?: number
    distinct?: AnimeAuthorScalarFieldEnum | AnimeAuthorScalarFieldEnum[]
  }

  /**
   * AnimeAuthor create
   */
  export type AnimeAuthorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeAuthor
     */
    select?: AnimeAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeAuthor
     */
    omit?: AnimeAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeAuthorInclude<ExtArgs> | null
    /**
     * The data needed to create a AnimeAuthor.
     */
    data: XOR<AnimeAuthorCreateInput, AnimeAuthorUncheckedCreateInput>
  }

  /**
   * AnimeAuthor createMany
   */
  export type AnimeAuthorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnimeAuthors.
     */
    data: AnimeAuthorCreateManyInput | AnimeAuthorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnimeAuthor createManyAndReturn
   */
  export type AnimeAuthorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeAuthor
     */
    select?: AnimeAuthorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeAuthor
     */
    omit?: AnimeAuthorOmit<ExtArgs> | null
    /**
     * The data used to create many AnimeAuthors.
     */
    data: AnimeAuthorCreateManyInput | AnimeAuthorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeAuthorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnimeAuthor update
   */
  export type AnimeAuthorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeAuthor
     */
    select?: AnimeAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeAuthor
     */
    omit?: AnimeAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeAuthorInclude<ExtArgs> | null
    /**
     * The data needed to update a AnimeAuthor.
     */
    data: XOR<AnimeAuthorUpdateInput, AnimeAuthorUncheckedUpdateInput>
    /**
     * Choose, which AnimeAuthor to update.
     */
    where: AnimeAuthorWhereUniqueInput
  }

  /**
   * AnimeAuthor updateMany
   */
  export type AnimeAuthorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnimeAuthors.
     */
    data: XOR<AnimeAuthorUpdateManyMutationInput, AnimeAuthorUncheckedUpdateManyInput>
    /**
     * Filter which AnimeAuthors to update
     */
    where?: AnimeAuthorWhereInput
    /**
     * Limit how many AnimeAuthors to update.
     */
    limit?: number
  }

  /**
   * AnimeAuthor updateManyAndReturn
   */
  export type AnimeAuthorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeAuthor
     */
    select?: AnimeAuthorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeAuthor
     */
    omit?: AnimeAuthorOmit<ExtArgs> | null
    /**
     * The data used to update AnimeAuthors.
     */
    data: XOR<AnimeAuthorUpdateManyMutationInput, AnimeAuthorUncheckedUpdateManyInput>
    /**
     * Filter which AnimeAuthors to update
     */
    where?: AnimeAuthorWhereInput
    /**
     * Limit how many AnimeAuthors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeAuthorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnimeAuthor upsert
   */
  export type AnimeAuthorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeAuthor
     */
    select?: AnimeAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeAuthor
     */
    omit?: AnimeAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeAuthorInclude<ExtArgs> | null
    /**
     * The filter to search for the AnimeAuthor to update in case it exists.
     */
    where: AnimeAuthorWhereUniqueInput
    /**
     * In case the AnimeAuthor found by the `where` argument doesn't exist, create a new AnimeAuthor with this data.
     */
    create: XOR<AnimeAuthorCreateInput, AnimeAuthorUncheckedCreateInput>
    /**
     * In case the AnimeAuthor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnimeAuthorUpdateInput, AnimeAuthorUncheckedUpdateInput>
  }

  /**
   * AnimeAuthor delete
   */
  export type AnimeAuthorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeAuthor
     */
    select?: AnimeAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeAuthor
     */
    omit?: AnimeAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeAuthorInclude<ExtArgs> | null
    /**
     * Filter which AnimeAuthor to delete.
     */
    where: AnimeAuthorWhereUniqueInput
  }

  /**
   * AnimeAuthor deleteMany
   */
  export type AnimeAuthorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnimeAuthors to delete
     */
    where?: AnimeAuthorWhereInput
    /**
     * Limit how many AnimeAuthors to delete.
     */
    limit?: number
  }

  /**
   * AnimeAuthor.animeLinks
   */
  export type AnimeAuthor$animeLinksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntryAuthor
     */
    select?: AnimeEntryAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntryAuthor
     */
    omit?: AnimeEntryAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryAuthorInclude<ExtArgs> | null
    where?: AnimeEntryAuthorWhereInput
    orderBy?: AnimeEntryAuthorOrderByWithRelationInput | AnimeEntryAuthorOrderByWithRelationInput[]
    cursor?: AnimeEntryAuthorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnimeEntryAuthorScalarFieldEnum | AnimeEntryAuthorScalarFieldEnum[]
  }

  /**
   * AnimeAuthor without action
   */
  export type AnimeAuthorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeAuthor
     */
    select?: AnimeAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeAuthor
     */
    omit?: AnimeAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeAuthorInclude<ExtArgs> | null
  }


  /**
   * Model AnimeEntryAuthor
   */

  export type AggregateAnimeEntryAuthor = {
    _count: AnimeEntryAuthorCountAggregateOutputType | null
    _min: AnimeEntryAuthorMinAggregateOutputType | null
    _max: AnimeEntryAuthorMaxAggregateOutputType | null
  }

  export type AnimeEntryAuthorMinAggregateOutputType = {
    animeEntryId: string | null
    authorId: string | null
    role: string | null
    createdAt: Date | null
  }

  export type AnimeEntryAuthorMaxAggregateOutputType = {
    animeEntryId: string | null
    authorId: string | null
    role: string | null
    createdAt: Date | null
  }

  export type AnimeEntryAuthorCountAggregateOutputType = {
    animeEntryId: number
    authorId: number
    role: number
    createdAt: number
    _all: number
  }


  export type AnimeEntryAuthorMinAggregateInputType = {
    animeEntryId?: true
    authorId?: true
    role?: true
    createdAt?: true
  }

  export type AnimeEntryAuthorMaxAggregateInputType = {
    animeEntryId?: true
    authorId?: true
    role?: true
    createdAt?: true
  }

  export type AnimeEntryAuthorCountAggregateInputType = {
    animeEntryId?: true
    authorId?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type AnimeEntryAuthorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnimeEntryAuthor to aggregate.
     */
    where?: AnimeEntryAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeEntryAuthors to fetch.
     */
    orderBy?: AnimeEntryAuthorOrderByWithRelationInput | AnimeEntryAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnimeEntryAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeEntryAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeEntryAuthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnimeEntryAuthors
    **/
    _count?: true | AnimeEntryAuthorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnimeEntryAuthorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnimeEntryAuthorMaxAggregateInputType
  }

  export type GetAnimeEntryAuthorAggregateType<T extends AnimeEntryAuthorAggregateArgs> = {
        [P in keyof T & keyof AggregateAnimeEntryAuthor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnimeEntryAuthor[P]>
      : GetScalarType<T[P], AggregateAnimeEntryAuthor[P]>
  }




  export type AnimeEntryAuthorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnimeEntryAuthorWhereInput
    orderBy?: AnimeEntryAuthorOrderByWithAggregationInput | AnimeEntryAuthorOrderByWithAggregationInput[]
    by: AnimeEntryAuthorScalarFieldEnum[] | AnimeEntryAuthorScalarFieldEnum
    having?: AnimeEntryAuthorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnimeEntryAuthorCountAggregateInputType | true
    _min?: AnimeEntryAuthorMinAggregateInputType
    _max?: AnimeEntryAuthorMaxAggregateInputType
  }

  export type AnimeEntryAuthorGroupByOutputType = {
    animeEntryId: string
    authorId: string
    role: string | null
    createdAt: Date
    _count: AnimeEntryAuthorCountAggregateOutputType | null
    _min: AnimeEntryAuthorMinAggregateOutputType | null
    _max: AnimeEntryAuthorMaxAggregateOutputType | null
  }

  type GetAnimeEntryAuthorGroupByPayload<T extends AnimeEntryAuthorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnimeEntryAuthorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnimeEntryAuthorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnimeEntryAuthorGroupByOutputType[P]>
            : GetScalarType<T[P], AnimeEntryAuthorGroupByOutputType[P]>
        }
      >
    >


  export type AnimeEntryAuthorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    animeEntryId?: boolean
    authorId?: boolean
    role?: boolean
    createdAt?: boolean
    animeEntry?: boolean | AnimeEntryDefaultArgs<ExtArgs>
    author?: boolean | AnimeAuthorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animeEntryAuthor"]>

  export type AnimeEntryAuthorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    animeEntryId?: boolean
    authorId?: boolean
    role?: boolean
    createdAt?: boolean
    animeEntry?: boolean | AnimeEntryDefaultArgs<ExtArgs>
    author?: boolean | AnimeAuthorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animeEntryAuthor"]>

  export type AnimeEntryAuthorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    animeEntryId?: boolean
    authorId?: boolean
    role?: boolean
    createdAt?: boolean
    animeEntry?: boolean | AnimeEntryDefaultArgs<ExtArgs>
    author?: boolean | AnimeAuthorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["animeEntryAuthor"]>

  export type AnimeEntryAuthorSelectScalar = {
    animeEntryId?: boolean
    authorId?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type AnimeEntryAuthorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"animeEntryId" | "authorId" | "role" | "createdAt", ExtArgs["result"]["animeEntryAuthor"]>
  export type AnimeEntryAuthorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animeEntry?: boolean | AnimeEntryDefaultArgs<ExtArgs>
    author?: boolean | AnimeAuthorDefaultArgs<ExtArgs>
  }
  export type AnimeEntryAuthorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animeEntry?: boolean | AnimeEntryDefaultArgs<ExtArgs>
    author?: boolean | AnimeAuthorDefaultArgs<ExtArgs>
  }
  export type AnimeEntryAuthorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    animeEntry?: boolean | AnimeEntryDefaultArgs<ExtArgs>
    author?: boolean | AnimeAuthorDefaultArgs<ExtArgs>
  }

  export type $AnimeEntryAuthorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnimeEntryAuthor"
    objects: {
      animeEntry: Prisma.$AnimeEntryPayload<ExtArgs>
      author: Prisma.$AnimeAuthorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      animeEntryId: string
      authorId: string
      role: string | null
      createdAt: Date
    }, ExtArgs["result"]["animeEntryAuthor"]>
    composites: {}
  }

  type AnimeEntryAuthorGetPayload<S extends boolean | null | undefined | AnimeEntryAuthorDefaultArgs> = $Result.GetResult<Prisma.$AnimeEntryAuthorPayload, S>

  type AnimeEntryAuthorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AnimeEntryAuthorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AnimeEntryAuthorCountAggregateInputType | true
    }

  export interface AnimeEntryAuthorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnimeEntryAuthor'], meta: { name: 'AnimeEntryAuthor' } }
    /**
     * Find zero or one AnimeEntryAuthor that matches the filter.
     * @param {AnimeEntryAuthorFindUniqueArgs} args - Arguments to find a AnimeEntryAuthor
     * @example
     * // Get one AnimeEntryAuthor
     * const animeEntryAuthor = await prisma.animeEntryAuthor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnimeEntryAuthorFindUniqueArgs>(args: SelectSubset<T, AnimeEntryAuthorFindUniqueArgs<ExtArgs>>): Prisma__AnimeEntryAuthorClient<$Result.GetResult<Prisma.$AnimeEntryAuthorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AnimeEntryAuthor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AnimeEntryAuthorFindUniqueOrThrowArgs} args - Arguments to find a AnimeEntryAuthor
     * @example
     * // Get one AnimeEntryAuthor
     * const animeEntryAuthor = await prisma.animeEntryAuthor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnimeEntryAuthorFindUniqueOrThrowArgs>(args: SelectSubset<T, AnimeEntryAuthorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnimeEntryAuthorClient<$Result.GetResult<Prisma.$AnimeEntryAuthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnimeEntryAuthor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeEntryAuthorFindFirstArgs} args - Arguments to find a AnimeEntryAuthor
     * @example
     * // Get one AnimeEntryAuthor
     * const animeEntryAuthor = await prisma.animeEntryAuthor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnimeEntryAuthorFindFirstArgs>(args?: SelectSubset<T, AnimeEntryAuthorFindFirstArgs<ExtArgs>>): Prisma__AnimeEntryAuthorClient<$Result.GetResult<Prisma.$AnimeEntryAuthorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AnimeEntryAuthor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeEntryAuthorFindFirstOrThrowArgs} args - Arguments to find a AnimeEntryAuthor
     * @example
     * // Get one AnimeEntryAuthor
     * const animeEntryAuthor = await prisma.animeEntryAuthor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnimeEntryAuthorFindFirstOrThrowArgs>(args?: SelectSubset<T, AnimeEntryAuthorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnimeEntryAuthorClient<$Result.GetResult<Prisma.$AnimeEntryAuthorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AnimeEntryAuthors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeEntryAuthorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnimeEntryAuthors
     * const animeEntryAuthors = await prisma.animeEntryAuthor.findMany()
     * 
     * // Get first 10 AnimeEntryAuthors
     * const animeEntryAuthors = await prisma.animeEntryAuthor.findMany({ take: 10 })
     * 
     * // Only select the `animeEntryId`
     * const animeEntryAuthorWithAnimeEntryIdOnly = await prisma.animeEntryAuthor.findMany({ select: { animeEntryId: true } })
     * 
     */
    findMany<T extends AnimeEntryAuthorFindManyArgs>(args?: SelectSubset<T, AnimeEntryAuthorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeEntryAuthorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AnimeEntryAuthor.
     * @param {AnimeEntryAuthorCreateArgs} args - Arguments to create a AnimeEntryAuthor.
     * @example
     * // Create one AnimeEntryAuthor
     * const AnimeEntryAuthor = await prisma.animeEntryAuthor.create({
     *   data: {
     *     // ... data to create a AnimeEntryAuthor
     *   }
     * })
     * 
     */
    create<T extends AnimeEntryAuthorCreateArgs>(args: SelectSubset<T, AnimeEntryAuthorCreateArgs<ExtArgs>>): Prisma__AnimeEntryAuthorClient<$Result.GetResult<Prisma.$AnimeEntryAuthorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AnimeEntryAuthors.
     * @param {AnimeEntryAuthorCreateManyArgs} args - Arguments to create many AnimeEntryAuthors.
     * @example
     * // Create many AnimeEntryAuthors
     * const animeEntryAuthor = await prisma.animeEntryAuthor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnimeEntryAuthorCreateManyArgs>(args?: SelectSubset<T, AnimeEntryAuthorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnimeEntryAuthors and returns the data saved in the database.
     * @param {AnimeEntryAuthorCreateManyAndReturnArgs} args - Arguments to create many AnimeEntryAuthors.
     * @example
     * // Create many AnimeEntryAuthors
     * const animeEntryAuthor = await prisma.animeEntryAuthor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnimeEntryAuthors and only return the `animeEntryId`
     * const animeEntryAuthorWithAnimeEntryIdOnly = await prisma.animeEntryAuthor.createManyAndReturn({
     *   select: { animeEntryId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnimeEntryAuthorCreateManyAndReturnArgs>(args?: SelectSubset<T, AnimeEntryAuthorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeEntryAuthorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AnimeEntryAuthor.
     * @param {AnimeEntryAuthorDeleteArgs} args - Arguments to delete one AnimeEntryAuthor.
     * @example
     * // Delete one AnimeEntryAuthor
     * const AnimeEntryAuthor = await prisma.animeEntryAuthor.delete({
     *   where: {
     *     // ... filter to delete one AnimeEntryAuthor
     *   }
     * })
     * 
     */
    delete<T extends AnimeEntryAuthorDeleteArgs>(args: SelectSubset<T, AnimeEntryAuthorDeleteArgs<ExtArgs>>): Prisma__AnimeEntryAuthorClient<$Result.GetResult<Prisma.$AnimeEntryAuthorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AnimeEntryAuthor.
     * @param {AnimeEntryAuthorUpdateArgs} args - Arguments to update one AnimeEntryAuthor.
     * @example
     * // Update one AnimeEntryAuthor
     * const animeEntryAuthor = await prisma.animeEntryAuthor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnimeEntryAuthorUpdateArgs>(args: SelectSubset<T, AnimeEntryAuthorUpdateArgs<ExtArgs>>): Prisma__AnimeEntryAuthorClient<$Result.GetResult<Prisma.$AnimeEntryAuthorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AnimeEntryAuthors.
     * @param {AnimeEntryAuthorDeleteManyArgs} args - Arguments to filter AnimeEntryAuthors to delete.
     * @example
     * // Delete a few AnimeEntryAuthors
     * const { count } = await prisma.animeEntryAuthor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnimeEntryAuthorDeleteManyArgs>(args?: SelectSubset<T, AnimeEntryAuthorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnimeEntryAuthors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeEntryAuthorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnimeEntryAuthors
     * const animeEntryAuthor = await prisma.animeEntryAuthor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnimeEntryAuthorUpdateManyArgs>(args: SelectSubset<T, AnimeEntryAuthorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnimeEntryAuthors and returns the data updated in the database.
     * @param {AnimeEntryAuthorUpdateManyAndReturnArgs} args - Arguments to update many AnimeEntryAuthors.
     * @example
     * // Update many AnimeEntryAuthors
     * const animeEntryAuthor = await prisma.animeEntryAuthor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AnimeEntryAuthors and only return the `animeEntryId`
     * const animeEntryAuthorWithAnimeEntryIdOnly = await prisma.animeEntryAuthor.updateManyAndReturn({
     *   select: { animeEntryId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AnimeEntryAuthorUpdateManyAndReturnArgs>(args: SelectSubset<T, AnimeEntryAuthorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnimeEntryAuthorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AnimeEntryAuthor.
     * @param {AnimeEntryAuthorUpsertArgs} args - Arguments to update or create a AnimeEntryAuthor.
     * @example
     * // Update or create a AnimeEntryAuthor
     * const animeEntryAuthor = await prisma.animeEntryAuthor.upsert({
     *   create: {
     *     // ... data to create a AnimeEntryAuthor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnimeEntryAuthor we want to update
     *   }
     * })
     */
    upsert<T extends AnimeEntryAuthorUpsertArgs>(args: SelectSubset<T, AnimeEntryAuthorUpsertArgs<ExtArgs>>): Prisma__AnimeEntryAuthorClient<$Result.GetResult<Prisma.$AnimeEntryAuthorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AnimeEntryAuthors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeEntryAuthorCountArgs} args - Arguments to filter AnimeEntryAuthors to count.
     * @example
     * // Count the number of AnimeEntryAuthors
     * const count = await prisma.animeEntryAuthor.count({
     *   where: {
     *     // ... the filter for the AnimeEntryAuthors we want to count
     *   }
     * })
    **/
    count<T extends AnimeEntryAuthorCountArgs>(
      args?: Subset<T, AnimeEntryAuthorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnimeEntryAuthorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnimeEntryAuthor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeEntryAuthorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AnimeEntryAuthorAggregateArgs>(args: Subset<T, AnimeEntryAuthorAggregateArgs>): Prisma.PrismaPromise<GetAnimeEntryAuthorAggregateType<T>>

    /**
     * Group by AnimeEntryAuthor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnimeEntryAuthorGroupByArgs} args - Group by arguments.
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
      T extends AnimeEntryAuthorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnimeEntryAuthorGroupByArgs['orderBy'] }
        : { orderBy?: AnimeEntryAuthorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AnimeEntryAuthorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnimeEntryAuthorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnimeEntryAuthor model
   */
  readonly fields: AnimeEntryAuthorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnimeEntryAuthor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnimeEntryAuthorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    animeEntry<T extends AnimeEntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnimeEntryDefaultArgs<ExtArgs>>): Prisma__AnimeEntryClient<$Result.GetResult<Prisma.$AnimeEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    author<T extends AnimeAuthorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnimeAuthorDefaultArgs<ExtArgs>>): Prisma__AnimeAuthorClient<$Result.GetResult<Prisma.$AnimeAuthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the AnimeEntryAuthor model
   */
  interface AnimeEntryAuthorFieldRefs {
    readonly animeEntryId: FieldRef<"AnimeEntryAuthor", 'String'>
    readonly authorId: FieldRef<"AnimeEntryAuthor", 'String'>
    readonly role: FieldRef<"AnimeEntryAuthor", 'String'>
    readonly createdAt: FieldRef<"AnimeEntryAuthor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AnimeEntryAuthor findUnique
   */
  export type AnimeEntryAuthorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntryAuthor
     */
    select?: AnimeEntryAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntryAuthor
     */
    omit?: AnimeEntryAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryAuthorInclude<ExtArgs> | null
    /**
     * Filter, which AnimeEntryAuthor to fetch.
     */
    where: AnimeEntryAuthorWhereUniqueInput
  }

  /**
   * AnimeEntryAuthor findUniqueOrThrow
   */
  export type AnimeEntryAuthorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntryAuthor
     */
    select?: AnimeEntryAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntryAuthor
     */
    omit?: AnimeEntryAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryAuthorInclude<ExtArgs> | null
    /**
     * Filter, which AnimeEntryAuthor to fetch.
     */
    where: AnimeEntryAuthorWhereUniqueInput
  }

  /**
   * AnimeEntryAuthor findFirst
   */
  export type AnimeEntryAuthorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntryAuthor
     */
    select?: AnimeEntryAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntryAuthor
     */
    omit?: AnimeEntryAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryAuthorInclude<ExtArgs> | null
    /**
     * Filter, which AnimeEntryAuthor to fetch.
     */
    where?: AnimeEntryAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeEntryAuthors to fetch.
     */
    orderBy?: AnimeEntryAuthorOrderByWithRelationInput | AnimeEntryAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnimeEntryAuthors.
     */
    cursor?: AnimeEntryAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeEntryAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeEntryAuthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnimeEntryAuthors.
     */
    distinct?: AnimeEntryAuthorScalarFieldEnum | AnimeEntryAuthorScalarFieldEnum[]
  }

  /**
   * AnimeEntryAuthor findFirstOrThrow
   */
  export type AnimeEntryAuthorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntryAuthor
     */
    select?: AnimeEntryAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntryAuthor
     */
    omit?: AnimeEntryAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryAuthorInclude<ExtArgs> | null
    /**
     * Filter, which AnimeEntryAuthor to fetch.
     */
    where?: AnimeEntryAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeEntryAuthors to fetch.
     */
    orderBy?: AnimeEntryAuthorOrderByWithRelationInput | AnimeEntryAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnimeEntryAuthors.
     */
    cursor?: AnimeEntryAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeEntryAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeEntryAuthors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnimeEntryAuthors.
     */
    distinct?: AnimeEntryAuthorScalarFieldEnum | AnimeEntryAuthorScalarFieldEnum[]
  }

  /**
   * AnimeEntryAuthor findMany
   */
  export type AnimeEntryAuthorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntryAuthor
     */
    select?: AnimeEntryAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntryAuthor
     */
    omit?: AnimeEntryAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryAuthorInclude<ExtArgs> | null
    /**
     * Filter, which AnimeEntryAuthors to fetch.
     */
    where?: AnimeEntryAuthorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnimeEntryAuthors to fetch.
     */
    orderBy?: AnimeEntryAuthorOrderByWithRelationInput | AnimeEntryAuthorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnimeEntryAuthors.
     */
    cursor?: AnimeEntryAuthorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnimeEntryAuthors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnimeEntryAuthors.
     */
    skip?: number
    distinct?: AnimeEntryAuthorScalarFieldEnum | AnimeEntryAuthorScalarFieldEnum[]
  }

  /**
   * AnimeEntryAuthor create
   */
  export type AnimeEntryAuthorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntryAuthor
     */
    select?: AnimeEntryAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntryAuthor
     */
    omit?: AnimeEntryAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryAuthorInclude<ExtArgs> | null
    /**
     * The data needed to create a AnimeEntryAuthor.
     */
    data: XOR<AnimeEntryAuthorCreateInput, AnimeEntryAuthorUncheckedCreateInput>
  }

  /**
   * AnimeEntryAuthor createMany
   */
  export type AnimeEntryAuthorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnimeEntryAuthors.
     */
    data: AnimeEntryAuthorCreateManyInput | AnimeEntryAuthorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnimeEntryAuthor createManyAndReturn
   */
  export type AnimeEntryAuthorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntryAuthor
     */
    select?: AnimeEntryAuthorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntryAuthor
     */
    omit?: AnimeEntryAuthorOmit<ExtArgs> | null
    /**
     * The data used to create many AnimeEntryAuthors.
     */
    data: AnimeEntryAuthorCreateManyInput | AnimeEntryAuthorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryAuthorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnimeEntryAuthor update
   */
  export type AnimeEntryAuthorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntryAuthor
     */
    select?: AnimeEntryAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntryAuthor
     */
    omit?: AnimeEntryAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryAuthorInclude<ExtArgs> | null
    /**
     * The data needed to update a AnimeEntryAuthor.
     */
    data: XOR<AnimeEntryAuthorUpdateInput, AnimeEntryAuthorUncheckedUpdateInput>
    /**
     * Choose, which AnimeEntryAuthor to update.
     */
    where: AnimeEntryAuthorWhereUniqueInput
  }

  /**
   * AnimeEntryAuthor updateMany
   */
  export type AnimeEntryAuthorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnimeEntryAuthors.
     */
    data: XOR<AnimeEntryAuthorUpdateManyMutationInput, AnimeEntryAuthorUncheckedUpdateManyInput>
    /**
     * Filter which AnimeEntryAuthors to update
     */
    where?: AnimeEntryAuthorWhereInput
    /**
     * Limit how many AnimeEntryAuthors to update.
     */
    limit?: number
  }

  /**
   * AnimeEntryAuthor updateManyAndReturn
   */
  export type AnimeEntryAuthorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntryAuthor
     */
    select?: AnimeEntryAuthorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntryAuthor
     */
    omit?: AnimeEntryAuthorOmit<ExtArgs> | null
    /**
     * The data used to update AnimeEntryAuthors.
     */
    data: XOR<AnimeEntryAuthorUpdateManyMutationInput, AnimeEntryAuthorUncheckedUpdateManyInput>
    /**
     * Filter which AnimeEntryAuthors to update
     */
    where?: AnimeEntryAuthorWhereInput
    /**
     * Limit how many AnimeEntryAuthors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryAuthorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnimeEntryAuthor upsert
   */
  export type AnimeEntryAuthorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntryAuthor
     */
    select?: AnimeEntryAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntryAuthor
     */
    omit?: AnimeEntryAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryAuthorInclude<ExtArgs> | null
    /**
     * The filter to search for the AnimeEntryAuthor to update in case it exists.
     */
    where: AnimeEntryAuthorWhereUniqueInput
    /**
     * In case the AnimeEntryAuthor found by the `where` argument doesn't exist, create a new AnimeEntryAuthor with this data.
     */
    create: XOR<AnimeEntryAuthorCreateInput, AnimeEntryAuthorUncheckedCreateInput>
    /**
     * In case the AnimeEntryAuthor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnimeEntryAuthorUpdateInput, AnimeEntryAuthorUncheckedUpdateInput>
  }

  /**
   * AnimeEntryAuthor delete
   */
  export type AnimeEntryAuthorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntryAuthor
     */
    select?: AnimeEntryAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntryAuthor
     */
    omit?: AnimeEntryAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryAuthorInclude<ExtArgs> | null
    /**
     * Filter which AnimeEntryAuthor to delete.
     */
    where: AnimeEntryAuthorWhereUniqueInput
  }

  /**
   * AnimeEntryAuthor deleteMany
   */
  export type AnimeEntryAuthorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnimeEntryAuthors to delete
     */
    where?: AnimeEntryAuthorWhereInput
    /**
     * Limit how many AnimeEntryAuthors to delete.
     */
    limit?: number
  }

  /**
   * AnimeEntryAuthor without action
   */
  export type AnimeEntryAuthorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnimeEntryAuthor
     */
    select?: AnimeEntryAuthorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AnimeEntryAuthor
     */
    omit?: AnimeEntryAuthorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnimeEntryAuthorInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    username: 'username',
    bio: 'bio',
    avatarUrl: 'avatarUrl',
    socialLinks: 'socialLinks',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const PermissionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PermissionScalarFieldEnum = (typeof PermissionScalarFieldEnum)[keyof typeof PermissionScalarFieldEnum]


  export const UserRoleScalarFieldEnum: {
    userId: 'userId',
    roleId: 'roleId',
    createdAt: 'createdAt'
  };

  export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum]


  export const RolePermissionScalarFieldEnum: {
    roleId: 'roleId',
    permissionId: 'permissionId',
    createdAt: 'createdAt'
  };

  export type RolePermissionScalarFieldEnum = (typeof RolePermissionScalarFieldEnum)[keyof typeof RolePermissionScalarFieldEnum]


  export const AnimeEntryScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    title: 'title',
    description: 'description',
    coverImageUrl: 'coverImageUrl',
    status: 'status',
    airedFrom: 'airedFrom',
    airedTo: 'airedTo',
    airedStatus: 'airedStatus',
    viewCount: 'viewCount',
    notes: 'notes',
    userId: 'userId',
    typeId: 'typeId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnimeEntryScalarFieldEnum = (typeof AnimeEntryScalarFieldEnum)[keyof typeof AnimeEntryScalarFieldEnum]


  export const GenreScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum]


  export const AnimeTypeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnimeTypeScalarFieldEnum = (typeof AnimeTypeScalarFieldEnum)[keyof typeof AnimeTypeScalarFieldEnum]


  export const AnimeEntryGenreScalarFieldEnum: {
    animeEntryId: 'animeEntryId',
    genreId: 'genreId',
    createdAt: 'createdAt'
  };

  export type AnimeEntryGenreScalarFieldEnum = (typeof AnimeEntryGenreScalarFieldEnum)[keyof typeof AnimeEntryGenreScalarFieldEnum]


  export const AnimeRatingScalarFieldEnum: {
    id: 'id',
    animeEntryId: 'animeEntryId',
    userId: 'userId',
    value: 'value',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnimeRatingScalarFieldEnum = (typeof AnimeRatingScalarFieldEnum)[keyof typeof AnimeRatingScalarFieldEnum]


  export const AnimeEpisodeScalarFieldEnum: {
    id: 'id',
    animeEntryId: 'animeEntryId',
    episodeNumber: 'episodeNumber',
    title: 'title',
    description: 'description',
    durationMinutes: 'durationMinutes',
    airDate: 'airDate',
    videoUrl: 'videoUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnimeEpisodeScalarFieldEnum = (typeof AnimeEpisodeScalarFieldEnum)[keyof typeof AnimeEpisodeScalarFieldEnum]


  export const AnimeAuthorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    bio: 'bio',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AnimeAuthorScalarFieldEnum = (typeof AnimeAuthorScalarFieldEnum)[keyof typeof AnimeAuthorScalarFieldEnum]


  export const AnimeEntryAuthorScalarFieldEnum: {
    animeEntryId: 'animeEntryId',
    authorId: 'authorId',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type AnimeEntryAuthorScalarFieldEnum = (typeof AnimeEntryAuthorScalarFieldEnum)[keyof typeof AnimeEntryAuthorScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'WatchStatus'
   */
  export type EnumWatchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WatchStatus'>
    


  /**
   * Reference to a field of type 'WatchStatus[]'
   */
  export type ListEnumWatchStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WatchStatus[]'>
    


  /**
   * Reference to a field of type 'AnimeAiredStatus'
   */
  export type EnumAnimeAiredStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnimeAiredStatus'>
    


  /**
   * Reference to a field of type 'AnimeAiredStatus[]'
   */
  export type ListEnumAnimeAiredStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnimeAiredStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    socialLinks?: JsonNullableFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    animeEntries?: AnimeEntryListRelationFilter
    animeAuthors?: AnimeAuthorListRelationFilter
    animeRatings?: AnimeRatingListRelationFilter
    roleLinks?: UserRoleListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    socialLinks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    animeEntries?: AnimeEntryOrderByRelationAggregateInput
    animeAuthors?: AnimeAuthorOrderByRelationAggregateInput
    animeRatings?: AnimeRatingOrderByRelationAggregateInput
    roleLinks?: UserRoleOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    socialLinks?: JsonNullableFilter<"User">
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    animeEntries?: AnimeEntryListRelationFilter
    animeAuthors?: AnimeAuthorListRelationFilter
    animeRatings?: AnimeRatingListRelationFilter
    roleLinks?: UserRoleListRelationFilter
  }, "id" | "email" | "username">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    avatarUrl?: SortOrderInput | SortOrder
    socialLinks?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    socialLinks?: JsonNullableWithAggregatesFilter<"User">
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    description?: StringNullableFilter<"Role"> | string | null
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    userLinks?: UserRoleListRelationFilter
    permissions?: RolePermissionListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userLinks?: UserRoleOrderByRelationAggregateInput
    permissions?: RolePermissionOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    description?: StringNullableFilter<"Role"> | string | null
    createdAt?: DateTimeFilter<"Role"> | Date | string
    updatedAt?: DateTimeFilter<"Role"> | Date | string
    userLinks?: UserRoleListRelationFilter
    permissions?: RolePermissionListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    name?: StringWithAggregatesFilter<"Role"> | string
    description?: StringNullableWithAggregatesFilter<"Role"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Role"> | Date | string
  }

  export type PermissionWhereInput = {
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    id?: StringFilter<"Permission"> | string
    name?: StringFilter<"Permission"> | string
    description?: StringNullableFilter<"Permission"> | string | null
    createdAt?: DateTimeFilter<"Permission"> | Date | string
    updatedAt?: DateTimeFilter<"Permission"> | Date | string
    roles?: RolePermissionListRelationFilter
  }

  export type PermissionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roles?: RolePermissionOrderByRelationAggregateInput
  }

  export type PermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: PermissionWhereInput | PermissionWhereInput[]
    OR?: PermissionWhereInput[]
    NOT?: PermissionWhereInput | PermissionWhereInput[]
    description?: StringNullableFilter<"Permission"> | string | null
    createdAt?: DateTimeFilter<"Permission"> | Date | string
    updatedAt?: DateTimeFilter<"Permission"> | Date | string
    roles?: RolePermissionListRelationFilter
  }, "id" | "name">

  export type PermissionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PermissionCountOrderByAggregateInput
    _max?: PermissionMaxOrderByAggregateInput
    _min?: PermissionMinOrderByAggregateInput
  }

  export type PermissionScalarWhereWithAggregatesInput = {
    AND?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    OR?: PermissionScalarWhereWithAggregatesInput[]
    NOT?: PermissionScalarWhereWithAggregatesInput | PermissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Permission"> | string
    name?: StringWithAggregatesFilter<"Permission"> | string
    description?: StringNullableWithAggregatesFilter<"Permission"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Permission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Permission"> | Date | string
  }

  export type UserRoleWhereInput = {
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    userId?: StringFilter<"UserRole"> | string
    roleId?: StringFilter<"UserRole"> | string
    createdAt?: DateTimeFilter<"UserRole"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type UserRoleOrderByWithRelationInput = {
    userId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
  }

  export type UserRoleWhereUniqueInput = Prisma.AtLeast<{
    userId_roleId?: UserRoleUserIdRoleIdCompoundUniqueInput
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    userId?: StringFilter<"UserRole"> | string
    roleId?: StringFilter<"UserRole"> | string
    createdAt?: DateTimeFilter<"UserRole"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "userId_roleId">

  export type UserRoleOrderByWithAggregationInput = {
    userId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    _count?: UserRoleCountOrderByAggregateInput
    _max?: UserRoleMaxOrderByAggregateInput
    _min?: UserRoleMinOrderByAggregateInput
  }

  export type UserRoleScalarWhereWithAggregatesInput = {
    AND?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    OR?: UserRoleScalarWhereWithAggregatesInput[]
    NOT?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserRole"> | string
    roleId?: StringWithAggregatesFilter<"UserRole"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserRole"> | Date | string
  }

  export type RolePermissionWhereInput = {
    AND?: RolePermissionWhereInput | RolePermissionWhereInput[]
    OR?: RolePermissionWhereInput[]
    NOT?: RolePermissionWhereInput | RolePermissionWhereInput[]
    roleId?: StringFilter<"RolePermission"> | string
    permissionId?: StringFilter<"RolePermission"> | string
    createdAt?: DateTimeFilter<"RolePermission"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    permission?: XOR<PermissionScalarRelationFilter, PermissionWhereInput>
  }

  export type RolePermissionOrderByWithRelationInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
    createdAt?: SortOrder
    role?: RoleOrderByWithRelationInput
    permission?: PermissionOrderByWithRelationInput
  }

  export type RolePermissionWhereUniqueInput = Prisma.AtLeast<{
    roleId_permissionId?: RolePermissionRoleIdPermissionIdCompoundUniqueInput
    AND?: RolePermissionWhereInput | RolePermissionWhereInput[]
    OR?: RolePermissionWhereInput[]
    NOT?: RolePermissionWhereInput | RolePermissionWhereInput[]
    roleId?: StringFilter<"RolePermission"> | string
    permissionId?: StringFilter<"RolePermission"> | string
    createdAt?: DateTimeFilter<"RolePermission"> | Date | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    permission?: XOR<PermissionScalarRelationFilter, PermissionWhereInput>
  }, "roleId_permissionId">

  export type RolePermissionOrderByWithAggregationInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
    createdAt?: SortOrder
    _count?: RolePermissionCountOrderByAggregateInput
    _max?: RolePermissionMaxOrderByAggregateInput
    _min?: RolePermissionMinOrderByAggregateInput
  }

  export type RolePermissionScalarWhereWithAggregatesInput = {
    AND?: RolePermissionScalarWhereWithAggregatesInput | RolePermissionScalarWhereWithAggregatesInput[]
    OR?: RolePermissionScalarWhereWithAggregatesInput[]
    NOT?: RolePermissionScalarWhereWithAggregatesInput | RolePermissionScalarWhereWithAggregatesInput[]
    roleId?: StringWithAggregatesFilter<"RolePermission"> | string
    permissionId?: StringWithAggregatesFilter<"RolePermission"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RolePermission"> | Date | string
  }

  export type AnimeEntryWhereInput = {
    AND?: AnimeEntryWhereInput | AnimeEntryWhereInput[]
    OR?: AnimeEntryWhereInput[]
    NOT?: AnimeEntryWhereInput | AnimeEntryWhereInput[]
    id?: StringFilter<"AnimeEntry"> | string
    slug?: StringFilter<"AnimeEntry"> | string
    title?: StringFilter<"AnimeEntry"> | string
    description?: StringFilter<"AnimeEntry"> | string
    coverImageUrl?: StringFilter<"AnimeEntry"> | string
    status?: EnumWatchStatusFilter<"AnimeEntry"> | $Enums.WatchStatus
    airedFrom?: DateTimeNullableFilter<"AnimeEntry"> | Date | string | null
    airedTo?: DateTimeNullableFilter<"AnimeEntry"> | Date | string | null
    airedStatus?: EnumAnimeAiredStatusFilter<"AnimeEntry"> | $Enums.AnimeAiredStatus
    viewCount?: IntFilter<"AnimeEntry"> | number
    notes?: StringNullableFilter<"AnimeEntry"> | string | null
    userId?: StringFilter<"AnimeEntry"> | string
    typeId?: StringNullableFilter<"AnimeEntry"> | string | null
    createdAt?: DateTimeFilter<"AnimeEntry"> | Date | string
    updatedAt?: DateTimeFilter<"AnimeEntry"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    episodes?: AnimeEpisodeListRelationFilter
    authorLinks?: AnimeEntryAuthorListRelationFilter
    ratings?: AnimeRatingListRelationFilter
    genreLinks?: AnimeEntryGenreListRelationFilter
    type?: XOR<AnimeTypeNullableScalarRelationFilter, AnimeTypeWhereInput> | null
  }

  export type AnimeEntryOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    coverImageUrl?: SortOrder
    status?: SortOrder
    airedFrom?: SortOrderInput | SortOrder
    airedTo?: SortOrderInput | SortOrder
    airedStatus?: SortOrder
    viewCount?: SortOrder
    notes?: SortOrderInput | SortOrder
    userId?: SortOrder
    typeId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    episodes?: AnimeEpisodeOrderByRelationAggregateInput
    authorLinks?: AnimeEntryAuthorOrderByRelationAggregateInput
    ratings?: AnimeRatingOrderByRelationAggregateInput
    genreLinks?: AnimeEntryGenreOrderByRelationAggregateInput
    type?: AnimeTypeOrderByWithRelationInput
  }

  export type AnimeEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: AnimeEntryWhereInput | AnimeEntryWhereInput[]
    OR?: AnimeEntryWhereInput[]
    NOT?: AnimeEntryWhereInput | AnimeEntryWhereInput[]
    title?: StringFilter<"AnimeEntry"> | string
    description?: StringFilter<"AnimeEntry"> | string
    coverImageUrl?: StringFilter<"AnimeEntry"> | string
    status?: EnumWatchStatusFilter<"AnimeEntry"> | $Enums.WatchStatus
    airedFrom?: DateTimeNullableFilter<"AnimeEntry"> | Date | string | null
    airedTo?: DateTimeNullableFilter<"AnimeEntry"> | Date | string | null
    airedStatus?: EnumAnimeAiredStatusFilter<"AnimeEntry"> | $Enums.AnimeAiredStatus
    viewCount?: IntFilter<"AnimeEntry"> | number
    notes?: StringNullableFilter<"AnimeEntry"> | string | null
    userId?: StringFilter<"AnimeEntry"> | string
    typeId?: StringNullableFilter<"AnimeEntry"> | string | null
    createdAt?: DateTimeFilter<"AnimeEntry"> | Date | string
    updatedAt?: DateTimeFilter<"AnimeEntry"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    episodes?: AnimeEpisodeListRelationFilter
    authorLinks?: AnimeEntryAuthorListRelationFilter
    ratings?: AnimeRatingListRelationFilter
    genreLinks?: AnimeEntryGenreListRelationFilter
    type?: XOR<AnimeTypeNullableScalarRelationFilter, AnimeTypeWhereInput> | null
  }, "id" | "slug">

  export type AnimeEntryOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    coverImageUrl?: SortOrder
    status?: SortOrder
    airedFrom?: SortOrderInput | SortOrder
    airedTo?: SortOrderInput | SortOrder
    airedStatus?: SortOrder
    viewCount?: SortOrder
    notes?: SortOrderInput | SortOrder
    userId?: SortOrder
    typeId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnimeEntryCountOrderByAggregateInput
    _avg?: AnimeEntryAvgOrderByAggregateInput
    _max?: AnimeEntryMaxOrderByAggregateInput
    _min?: AnimeEntryMinOrderByAggregateInput
    _sum?: AnimeEntrySumOrderByAggregateInput
  }

  export type AnimeEntryScalarWhereWithAggregatesInput = {
    AND?: AnimeEntryScalarWhereWithAggregatesInput | AnimeEntryScalarWhereWithAggregatesInput[]
    OR?: AnimeEntryScalarWhereWithAggregatesInput[]
    NOT?: AnimeEntryScalarWhereWithAggregatesInput | AnimeEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnimeEntry"> | string
    slug?: StringWithAggregatesFilter<"AnimeEntry"> | string
    title?: StringWithAggregatesFilter<"AnimeEntry"> | string
    description?: StringWithAggregatesFilter<"AnimeEntry"> | string
    coverImageUrl?: StringWithAggregatesFilter<"AnimeEntry"> | string
    status?: EnumWatchStatusWithAggregatesFilter<"AnimeEntry"> | $Enums.WatchStatus
    airedFrom?: DateTimeNullableWithAggregatesFilter<"AnimeEntry"> | Date | string | null
    airedTo?: DateTimeNullableWithAggregatesFilter<"AnimeEntry"> | Date | string | null
    airedStatus?: EnumAnimeAiredStatusWithAggregatesFilter<"AnimeEntry"> | $Enums.AnimeAiredStatus
    viewCount?: IntWithAggregatesFilter<"AnimeEntry"> | number
    notes?: StringNullableWithAggregatesFilter<"AnimeEntry"> | string | null
    userId?: StringWithAggregatesFilter<"AnimeEntry"> | string
    typeId?: StringNullableWithAggregatesFilter<"AnimeEntry"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AnimeEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AnimeEntry"> | Date | string
  }

  export type GenreWhereInput = {
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    id?: StringFilter<"Genre"> | string
    name?: StringFilter<"Genre"> | string
    createdAt?: DateTimeFilter<"Genre"> | Date | string
    updatedAt?: DateTimeFilter<"Genre"> | Date | string
    animeLinks?: AnimeEntryGenreListRelationFilter
  }

  export type GenreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    animeLinks?: AnimeEntryGenreOrderByRelationAggregateInput
  }

  export type GenreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    createdAt?: DateTimeFilter<"Genre"> | Date | string
    updatedAt?: DateTimeFilter<"Genre"> | Date | string
    animeLinks?: AnimeEntryGenreListRelationFilter
  }, "id" | "name">

  export type GenreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GenreCountOrderByAggregateInput
    _max?: GenreMaxOrderByAggregateInput
    _min?: GenreMinOrderByAggregateInput
  }

  export type GenreScalarWhereWithAggregatesInput = {
    AND?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    OR?: GenreScalarWhereWithAggregatesInput[]
    NOT?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Genre"> | string
    name?: StringWithAggregatesFilter<"Genre"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Genre"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Genre"> | Date | string
  }

  export type AnimeTypeWhereInput = {
    AND?: AnimeTypeWhereInput | AnimeTypeWhereInput[]
    OR?: AnimeTypeWhereInput[]
    NOT?: AnimeTypeWhereInput | AnimeTypeWhereInput[]
    id?: StringFilter<"AnimeType"> | string
    name?: StringFilter<"AnimeType"> | string
    createdAt?: DateTimeFilter<"AnimeType"> | Date | string
    updatedAt?: DateTimeFilter<"AnimeType"> | Date | string
    animeEntries?: AnimeEntryListRelationFilter
  }

  export type AnimeTypeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    animeEntries?: AnimeEntryOrderByRelationAggregateInput
  }

  export type AnimeTypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: AnimeTypeWhereInput | AnimeTypeWhereInput[]
    OR?: AnimeTypeWhereInput[]
    NOT?: AnimeTypeWhereInput | AnimeTypeWhereInput[]
    createdAt?: DateTimeFilter<"AnimeType"> | Date | string
    updatedAt?: DateTimeFilter<"AnimeType"> | Date | string
    animeEntries?: AnimeEntryListRelationFilter
  }, "id" | "name">

  export type AnimeTypeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnimeTypeCountOrderByAggregateInput
    _max?: AnimeTypeMaxOrderByAggregateInput
    _min?: AnimeTypeMinOrderByAggregateInput
  }

  export type AnimeTypeScalarWhereWithAggregatesInput = {
    AND?: AnimeTypeScalarWhereWithAggregatesInput | AnimeTypeScalarWhereWithAggregatesInput[]
    OR?: AnimeTypeScalarWhereWithAggregatesInput[]
    NOT?: AnimeTypeScalarWhereWithAggregatesInput | AnimeTypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnimeType"> | string
    name?: StringWithAggregatesFilter<"AnimeType"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AnimeType"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AnimeType"> | Date | string
  }

  export type AnimeEntryGenreWhereInput = {
    AND?: AnimeEntryGenreWhereInput | AnimeEntryGenreWhereInput[]
    OR?: AnimeEntryGenreWhereInput[]
    NOT?: AnimeEntryGenreWhereInput | AnimeEntryGenreWhereInput[]
    animeEntryId?: StringFilter<"AnimeEntryGenre"> | string
    genreId?: StringFilter<"AnimeEntryGenre"> | string
    createdAt?: DateTimeFilter<"AnimeEntryGenre"> | Date | string
    animeEntry?: XOR<AnimeEntryScalarRelationFilter, AnimeEntryWhereInput>
    genre?: XOR<GenreScalarRelationFilter, GenreWhereInput>
  }

  export type AnimeEntryGenreOrderByWithRelationInput = {
    animeEntryId?: SortOrder
    genreId?: SortOrder
    createdAt?: SortOrder
    animeEntry?: AnimeEntryOrderByWithRelationInput
    genre?: GenreOrderByWithRelationInput
  }

  export type AnimeEntryGenreWhereUniqueInput = Prisma.AtLeast<{
    animeEntryId_genreId?: AnimeEntryGenreAnimeEntryIdGenreIdCompoundUniqueInput
    AND?: AnimeEntryGenreWhereInput | AnimeEntryGenreWhereInput[]
    OR?: AnimeEntryGenreWhereInput[]
    NOT?: AnimeEntryGenreWhereInput | AnimeEntryGenreWhereInput[]
    animeEntryId?: StringFilter<"AnimeEntryGenre"> | string
    genreId?: StringFilter<"AnimeEntryGenre"> | string
    createdAt?: DateTimeFilter<"AnimeEntryGenre"> | Date | string
    animeEntry?: XOR<AnimeEntryScalarRelationFilter, AnimeEntryWhereInput>
    genre?: XOR<GenreScalarRelationFilter, GenreWhereInput>
  }, "animeEntryId_genreId">

  export type AnimeEntryGenreOrderByWithAggregationInput = {
    animeEntryId?: SortOrder
    genreId?: SortOrder
    createdAt?: SortOrder
    _count?: AnimeEntryGenreCountOrderByAggregateInput
    _max?: AnimeEntryGenreMaxOrderByAggregateInput
    _min?: AnimeEntryGenreMinOrderByAggregateInput
  }

  export type AnimeEntryGenreScalarWhereWithAggregatesInput = {
    AND?: AnimeEntryGenreScalarWhereWithAggregatesInput | AnimeEntryGenreScalarWhereWithAggregatesInput[]
    OR?: AnimeEntryGenreScalarWhereWithAggregatesInput[]
    NOT?: AnimeEntryGenreScalarWhereWithAggregatesInput | AnimeEntryGenreScalarWhereWithAggregatesInput[]
    animeEntryId?: StringWithAggregatesFilter<"AnimeEntryGenre"> | string
    genreId?: StringWithAggregatesFilter<"AnimeEntryGenre"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AnimeEntryGenre"> | Date | string
  }

  export type AnimeRatingWhereInput = {
    AND?: AnimeRatingWhereInput | AnimeRatingWhereInput[]
    OR?: AnimeRatingWhereInput[]
    NOT?: AnimeRatingWhereInput | AnimeRatingWhereInput[]
    id?: StringFilter<"AnimeRating"> | string
    animeEntryId?: StringFilter<"AnimeRating"> | string
    userId?: StringFilter<"AnimeRating"> | string
    value?: IntFilter<"AnimeRating"> | number
    createdAt?: DateTimeFilter<"AnimeRating"> | Date | string
    updatedAt?: DateTimeFilter<"AnimeRating"> | Date | string
    animeEntry?: XOR<AnimeEntryScalarRelationFilter, AnimeEntryWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AnimeRatingOrderByWithRelationInput = {
    id?: SortOrder
    animeEntryId?: SortOrder
    userId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    animeEntry?: AnimeEntryOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type AnimeRatingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    animeEntryId_userId?: AnimeRatingAnimeEntryIdUserIdCompoundUniqueInput
    AND?: AnimeRatingWhereInput | AnimeRatingWhereInput[]
    OR?: AnimeRatingWhereInput[]
    NOT?: AnimeRatingWhereInput | AnimeRatingWhereInput[]
    animeEntryId?: StringFilter<"AnimeRating"> | string
    userId?: StringFilter<"AnimeRating"> | string
    value?: IntFilter<"AnimeRating"> | number
    createdAt?: DateTimeFilter<"AnimeRating"> | Date | string
    updatedAt?: DateTimeFilter<"AnimeRating"> | Date | string
    animeEntry?: XOR<AnimeEntryScalarRelationFilter, AnimeEntryWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "animeEntryId_userId">

  export type AnimeRatingOrderByWithAggregationInput = {
    id?: SortOrder
    animeEntryId?: SortOrder
    userId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnimeRatingCountOrderByAggregateInput
    _avg?: AnimeRatingAvgOrderByAggregateInput
    _max?: AnimeRatingMaxOrderByAggregateInput
    _min?: AnimeRatingMinOrderByAggregateInput
    _sum?: AnimeRatingSumOrderByAggregateInput
  }

  export type AnimeRatingScalarWhereWithAggregatesInput = {
    AND?: AnimeRatingScalarWhereWithAggregatesInput | AnimeRatingScalarWhereWithAggregatesInput[]
    OR?: AnimeRatingScalarWhereWithAggregatesInput[]
    NOT?: AnimeRatingScalarWhereWithAggregatesInput | AnimeRatingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnimeRating"> | string
    animeEntryId?: StringWithAggregatesFilter<"AnimeRating"> | string
    userId?: StringWithAggregatesFilter<"AnimeRating"> | string
    value?: IntWithAggregatesFilter<"AnimeRating"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AnimeRating"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AnimeRating"> | Date | string
  }

  export type AnimeEpisodeWhereInput = {
    AND?: AnimeEpisodeWhereInput | AnimeEpisodeWhereInput[]
    OR?: AnimeEpisodeWhereInput[]
    NOT?: AnimeEpisodeWhereInput | AnimeEpisodeWhereInput[]
    id?: StringFilter<"AnimeEpisode"> | string
    animeEntryId?: StringFilter<"AnimeEpisode"> | string
    episodeNumber?: IntFilter<"AnimeEpisode"> | number
    title?: StringNullableFilter<"AnimeEpisode"> | string | null
    description?: StringNullableFilter<"AnimeEpisode"> | string | null
    durationMinutes?: IntNullableFilter<"AnimeEpisode"> | number | null
    airDate?: DateTimeNullableFilter<"AnimeEpisode"> | Date | string | null
    videoUrl?: StringNullableFilter<"AnimeEpisode"> | string | null
    createdAt?: DateTimeFilter<"AnimeEpisode"> | Date | string
    updatedAt?: DateTimeFilter<"AnimeEpisode"> | Date | string
    animeEntry?: XOR<AnimeEntryScalarRelationFilter, AnimeEntryWhereInput>
  }

  export type AnimeEpisodeOrderByWithRelationInput = {
    id?: SortOrder
    animeEntryId?: SortOrder
    episodeNumber?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    durationMinutes?: SortOrderInput | SortOrder
    airDate?: SortOrderInput | SortOrder
    videoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    animeEntry?: AnimeEntryOrderByWithRelationInput
  }

  export type AnimeEpisodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    animeEntryId_episodeNumber?: AnimeEpisodeAnimeEntryIdEpisodeNumberCompoundUniqueInput
    AND?: AnimeEpisodeWhereInput | AnimeEpisodeWhereInput[]
    OR?: AnimeEpisodeWhereInput[]
    NOT?: AnimeEpisodeWhereInput | AnimeEpisodeWhereInput[]
    animeEntryId?: StringFilter<"AnimeEpisode"> | string
    episodeNumber?: IntFilter<"AnimeEpisode"> | number
    title?: StringNullableFilter<"AnimeEpisode"> | string | null
    description?: StringNullableFilter<"AnimeEpisode"> | string | null
    durationMinutes?: IntNullableFilter<"AnimeEpisode"> | number | null
    airDate?: DateTimeNullableFilter<"AnimeEpisode"> | Date | string | null
    videoUrl?: StringNullableFilter<"AnimeEpisode"> | string | null
    createdAt?: DateTimeFilter<"AnimeEpisode"> | Date | string
    updatedAt?: DateTimeFilter<"AnimeEpisode"> | Date | string
    animeEntry?: XOR<AnimeEntryScalarRelationFilter, AnimeEntryWhereInput>
  }, "id" | "animeEntryId_episodeNumber">

  export type AnimeEpisodeOrderByWithAggregationInput = {
    id?: SortOrder
    animeEntryId?: SortOrder
    episodeNumber?: SortOrder
    title?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    durationMinutes?: SortOrderInput | SortOrder
    airDate?: SortOrderInput | SortOrder
    videoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnimeEpisodeCountOrderByAggregateInput
    _avg?: AnimeEpisodeAvgOrderByAggregateInput
    _max?: AnimeEpisodeMaxOrderByAggregateInput
    _min?: AnimeEpisodeMinOrderByAggregateInput
    _sum?: AnimeEpisodeSumOrderByAggregateInput
  }

  export type AnimeEpisodeScalarWhereWithAggregatesInput = {
    AND?: AnimeEpisodeScalarWhereWithAggregatesInput | AnimeEpisodeScalarWhereWithAggregatesInput[]
    OR?: AnimeEpisodeScalarWhereWithAggregatesInput[]
    NOT?: AnimeEpisodeScalarWhereWithAggregatesInput | AnimeEpisodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnimeEpisode"> | string
    animeEntryId?: StringWithAggregatesFilter<"AnimeEpisode"> | string
    episodeNumber?: IntWithAggregatesFilter<"AnimeEpisode"> | number
    title?: StringNullableWithAggregatesFilter<"AnimeEpisode"> | string | null
    description?: StringNullableWithAggregatesFilter<"AnimeEpisode"> | string | null
    durationMinutes?: IntNullableWithAggregatesFilter<"AnimeEpisode"> | number | null
    airDate?: DateTimeNullableWithAggregatesFilter<"AnimeEpisode"> | Date | string | null
    videoUrl?: StringNullableWithAggregatesFilter<"AnimeEpisode"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AnimeEpisode"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AnimeEpisode"> | Date | string
  }

  export type AnimeAuthorWhereInput = {
    AND?: AnimeAuthorWhereInput | AnimeAuthorWhereInput[]
    OR?: AnimeAuthorWhereInput[]
    NOT?: AnimeAuthorWhereInput | AnimeAuthorWhereInput[]
    id?: StringFilter<"AnimeAuthor"> | string
    name?: StringFilter<"AnimeAuthor"> | string
    bio?: StringNullableFilter<"AnimeAuthor"> | string | null
    userId?: StringFilter<"AnimeAuthor"> | string
    createdAt?: DateTimeFilter<"AnimeAuthor"> | Date | string
    updatedAt?: DateTimeFilter<"AnimeAuthor"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    animeLinks?: AnimeEntryAuthorListRelationFilter
  }

  export type AnimeAuthorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    animeLinks?: AnimeEntryAuthorOrderByRelationAggregateInput
  }

  export type AnimeAuthorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_name?: AnimeAuthorUserIdNameCompoundUniqueInput
    AND?: AnimeAuthorWhereInput | AnimeAuthorWhereInput[]
    OR?: AnimeAuthorWhereInput[]
    NOT?: AnimeAuthorWhereInput | AnimeAuthorWhereInput[]
    name?: StringFilter<"AnimeAuthor"> | string
    bio?: StringNullableFilter<"AnimeAuthor"> | string | null
    userId?: StringFilter<"AnimeAuthor"> | string
    createdAt?: DateTimeFilter<"AnimeAuthor"> | Date | string
    updatedAt?: DateTimeFilter<"AnimeAuthor"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    animeLinks?: AnimeEntryAuthorListRelationFilter
  }, "id" | "userId_name">

  export type AnimeAuthorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrderInput | SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AnimeAuthorCountOrderByAggregateInput
    _max?: AnimeAuthorMaxOrderByAggregateInput
    _min?: AnimeAuthorMinOrderByAggregateInput
  }

  export type AnimeAuthorScalarWhereWithAggregatesInput = {
    AND?: AnimeAuthorScalarWhereWithAggregatesInput | AnimeAuthorScalarWhereWithAggregatesInput[]
    OR?: AnimeAuthorScalarWhereWithAggregatesInput[]
    NOT?: AnimeAuthorScalarWhereWithAggregatesInput | AnimeAuthorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnimeAuthor"> | string
    name?: StringWithAggregatesFilter<"AnimeAuthor"> | string
    bio?: StringNullableWithAggregatesFilter<"AnimeAuthor"> | string | null
    userId?: StringWithAggregatesFilter<"AnimeAuthor"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AnimeAuthor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AnimeAuthor"> | Date | string
  }

  export type AnimeEntryAuthorWhereInput = {
    AND?: AnimeEntryAuthorWhereInput | AnimeEntryAuthorWhereInput[]
    OR?: AnimeEntryAuthorWhereInput[]
    NOT?: AnimeEntryAuthorWhereInput | AnimeEntryAuthorWhereInput[]
    animeEntryId?: StringFilter<"AnimeEntryAuthor"> | string
    authorId?: StringFilter<"AnimeEntryAuthor"> | string
    role?: StringNullableFilter<"AnimeEntryAuthor"> | string | null
    createdAt?: DateTimeFilter<"AnimeEntryAuthor"> | Date | string
    animeEntry?: XOR<AnimeEntryScalarRelationFilter, AnimeEntryWhereInput>
    author?: XOR<AnimeAuthorScalarRelationFilter, AnimeAuthorWhereInput>
  }

  export type AnimeEntryAuthorOrderByWithRelationInput = {
    animeEntryId?: SortOrder
    authorId?: SortOrder
    role?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    animeEntry?: AnimeEntryOrderByWithRelationInput
    author?: AnimeAuthorOrderByWithRelationInput
  }

  export type AnimeEntryAuthorWhereUniqueInput = Prisma.AtLeast<{
    animeEntryId_authorId?: AnimeEntryAuthorAnimeEntryIdAuthorIdCompoundUniqueInput
    AND?: AnimeEntryAuthorWhereInput | AnimeEntryAuthorWhereInput[]
    OR?: AnimeEntryAuthorWhereInput[]
    NOT?: AnimeEntryAuthorWhereInput | AnimeEntryAuthorWhereInput[]
    animeEntryId?: StringFilter<"AnimeEntryAuthor"> | string
    authorId?: StringFilter<"AnimeEntryAuthor"> | string
    role?: StringNullableFilter<"AnimeEntryAuthor"> | string | null
    createdAt?: DateTimeFilter<"AnimeEntryAuthor"> | Date | string
    animeEntry?: XOR<AnimeEntryScalarRelationFilter, AnimeEntryWhereInput>
    author?: XOR<AnimeAuthorScalarRelationFilter, AnimeAuthorWhereInput>
  }, "animeEntryId_authorId">

  export type AnimeEntryAuthorOrderByWithAggregationInput = {
    animeEntryId?: SortOrder
    authorId?: SortOrder
    role?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AnimeEntryAuthorCountOrderByAggregateInput
    _max?: AnimeEntryAuthorMaxOrderByAggregateInput
    _min?: AnimeEntryAuthorMinOrderByAggregateInput
  }

  export type AnimeEntryAuthorScalarWhereWithAggregatesInput = {
    AND?: AnimeEntryAuthorScalarWhereWithAggregatesInput | AnimeEntryAuthorScalarWhereWithAggregatesInput[]
    OR?: AnimeEntryAuthorScalarWhereWithAggregatesInput[]
    NOT?: AnimeEntryAuthorScalarWhereWithAggregatesInput | AnimeEntryAuthorScalarWhereWithAggregatesInput[]
    animeEntryId?: StringWithAggregatesFilter<"AnimeEntryAuthor"> | string
    authorId?: StringWithAggregatesFilter<"AnimeEntryAuthor"> | string
    role?: StringNullableWithAggregatesFilter<"AnimeEntryAuthor"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AnimeEntryAuthor"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    username?: string | null
    bio?: string | null
    avatarUrl?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    animeEntries?: AnimeEntryCreateNestedManyWithoutUserInput
    animeAuthors?: AnimeAuthorCreateNestedManyWithoutUserInput
    animeRatings?: AnimeRatingCreateNestedManyWithoutUserInput
    roleLinks?: UserRoleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    username?: string | null
    bio?: string | null
    avatarUrl?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    animeEntries?: AnimeEntryUncheckedCreateNestedManyWithoutUserInput
    animeAuthors?: AnimeAuthorUncheckedCreateNestedManyWithoutUserInput
    animeRatings?: AnimeRatingUncheckedCreateNestedManyWithoutUserInput
    roleLinks?: UserRoleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    animeEntries?: AnimeEntryUpdateManyWithoutUserNestedInput
    animeAuthors?: AnimeAuthorUpdateManyWithoutUserNestedInput
    animeRatings?: AnimeRatingUpdateManyWithoutUserNestedInput
    roleLinks?: UserRoleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    animeEntries?: AnimeEntryUncheckedUpdateManyWithoutUserNestedInput
    animeAuthors?: AnimeAuthorUncheckedUpdateManyWithoutUserNestedInput
    animeRatings?: AnimeRatingUncheckedUpdateManyWithoutUserNestedInput
    roleLinks?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    username?: string | null
    bio?: string | null
    avatarUrl?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userLinks?: UserRoleCreateNestedManyWithoutRoleInput
    permissions?: RolePermissionCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userLinks?: UserRoleUncheckedCreateNestedManyWithoutRoleInput
    permissions?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userLinks?: UserRoleUpdateManyWithoutRoleNestedInput
    permissions?: RolePermissionUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userLinks?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput
    permissions?: RolePermissionUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: RolePermissionCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: RolePermissionUncheckedCreateNestedManyWithoutPermissionInput
  }

  export type PermissionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RolePermissionUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: RolePermissionUncheckedUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleCreateInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRoleLinksInput
    role: RoleCreateNestedOneWithoutUserLinksInput
  }

  export type UserRoleUncheckedCreateInput = {
    userId: string
    roleId: string
    createdAt?: Date | string
  }

  export type UserRoleUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoleLinksNestedInput
    role?: RoleUpdateOneRequiredWithoutUserLinksNestedInput
  }

  export type UserRoleUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleCreateManyInput = {
    userId: string
    roleId: string
    createdAt?: Date | string
  }

  export type UserRoleUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionCreateInput = {
    createdAt?: Date | string
    role: RoleCreateNestedOneWithoutPermissionsInput
    permission: PermissionCreateNestedOneWithoutRolesInput
  }

  export type RolePermissionUncheckedCreateInput = {
    roleId: string
    permissionId: string
    createdAt?: Date | string
  }

  export type RolePermissionUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutPermissionsNestedInput
    permission?: PermissionUpdateOneRequiredWithoutRolesNestedInput
  }

  export type RolePermissionUncheckedUpdateInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    permissionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionCreateManyInput = {
    roleId: string
    permissionId: string
    createdAt?: Date | string
  }

  export type RolePermissionUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionUncheckedUpdateManyInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    permissionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeEntryCreateInput = {
    id?: string
    slug: string
    title: string
    description: string
    coverImageUrl: string
    status?: $Enums.WatchStatus
    airedFrom?: Date | string | null
    airedTo?: Date | string | null
    airedStatus?: $Enums.AnimeAiredStatus
    viewCount?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAnimeEntriesInput
    episodes?: AnimeEpisodeCreateNestedManyWithoutAnimeEntryInput
    authorLinks?: AnimeEntryAuthorCreateNestedManyWithoutAnimeEntryInput
    ratings?: AnimeRatingCreateNestedManyWithoutAnimeEntryInput
    genreLinks?: AnimeEntryGenreCreateNestedManyWithoutAnimeEntryInput
    type?: AnimeTypeCreateNestedOneWithoutAnimeEntriesInput
  }

  export type AnimeEntryUncheckedCreateInput = {
    id?: string
    slug: string
    title: string
    description: string
    coverImageUrl: string
    status?: $Enums.WatchStatus
    airedFrom?: Date | string | null
    airedTo?: Date | string | null
    airedStatus?: $Enums.AnimeAiredStatus
    viewCount?: number
    notes?: string | null
    userId: string
    typeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    episodes?: AnimeEpisodeUncheckedCreateNestedManyWithoutAnimeEntryInput
    authorLinks?: AnimeEntryAuthorUncheckedCreateNestedManyWithoutAnimeEntryInput
    ratings?: AnimeRatingUncheckedCreateNestedManyWithoutAnimeEntryInput
    genreLinks?: AnimeEntryGenreUncheckedCreateNestedManyWithoutAnimeEntryInput
  }

  export type AnimeEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumWatchStatusFieldUpdateOperationsInput | $Enums.WatchStatus
    airedFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airedTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airedStatus?: EnumAnimeAiredStatusFieldUpdateOperationsInput | $Enums.AnimeAiredStatus
    viewCount?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAnimeEntriesNestedInput
    episodes?: AnimeEpisodeUpdateManyWithoutAnimeEntryNestedInput
    authorLinks?: AnimeEntryAuthorUpdateManyWithoutAnimeEntryNestedInput
    ratings?: AnimeRatingUpdateManyWithoutAnimeEntryNestedInput
    genreLinks?: AnimeEntryGenreUpdateManyWithoutAnimeEntryNestedInput
    type?: AnimeTypeUpdateOneWithoutAnimeEntriesNestedInput
  }

  export type AnimeEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumWatchStatusFieldUpdateOperationsInput | $Enums.WatchStatus
    airedFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airedTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airedStatus?: EnumAnimeAiredStatusFieldUpdateOperationsInput | $Enums.AnimeAiredStatus
    viewCount?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    typeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: AnimeEpisodeUncheckedUpdateManyWithoutAnimeEntryNestedInput
    authorLinks?: AnimeEntryAuthorUncheckedUpdateManyWithoutAnimeEntryNestedInput
    ratings?: AnimeRatingUncheckedUpdateManyWithoutAnimeEntryNestedInput
    genreLinks?: AnimeEntryGenreUncheckedUpdateManyWithoutAnimeEntryNestedInput
  }

  export type AnimeEntryCreateManyInput = {
    id?: string
    slug: string
    title: string
    description: string
    coverImageUrl: string
    status?: $Enums.WatchStatus
    airedFrom?: Date | string | null
    airedTo?: Date | string | null
    airedStatus?: $Enums.AnimeAiredStatus
    viewCount?: number
    notes?: string | null
    userId: string
    typeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnimeEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumWatchStatusFieldUpdateOperationsInput | $Enums.WatchStatus
    airedFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airedTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airedStatus?: EnumAnimeAiredStatusFieldUpdateOperationsInput | $Enums.AnimeAiredStatus
    viewCount?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumWatchStatusFieldUpdateOperationsInput | $Enums.WatchStatus
    airedFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airedTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airedStatus?: EnumAnimeAiredStatusFieldUpdateOperationsInput | $Enums.AnimeAiredStatus
    viewCount?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    typeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    animeLinks?: AnimeEntryGenreCreateNestedManyWithoutGenreInput
  }

  export type GenreUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    animeLinks?: AnimeEntryGenreUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    animeLinks?: AnimeEntryGenreUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    animeLinks?: AnimeEntryGenreUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type GenreCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GenreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeTypeCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    animeEntries?: AnimeEntryCreateNestedManyWithoutTypeInput
  }

  export type AnimeTypeUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    animeEntries?: AnimeEntryUncheckedCreateNestedManyWithoutTypeInput
  }

  export type AnimeTypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    animeEntries?: AnimeEntryUpdateManyWithoutTypeNestedInput
  }

  export type AnimeTypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    animeEntries?: AnimeEntryUncheckedUpdateManyWithoutTypeNestedInput
  }

  export type AnimeTypeCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnimeTypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeTypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeEntryGenreCreateInput = {
    createdAt?: Date | string
    animeEntry: AnimeEntryCreateNestedOneWithoutGenreLinksInput
    genre: GenreCreateNestedOneWithoutAnimeLinksInput
  }

  export type AnimeEntryGenreUncheckedCreateInput = {
    animeEntryId: string
    genreId: string
    createdAt?: Date | string
  }

  export type AnimeEntryGenreUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    animeEntry?: AnimeEntryUpdateOneRequiredWithoutGenreLinksNestedInput
    genre?: GenreUpdateOneRequiredWithoutAnimeLinksNestedInput
  }

  export type AnimeEntryGenreUncheckedUpdateInput = {
    animeEntryId?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeEntryGenreCreateManyInput = {
    animeEntryId: string
    genreId: string
    createdAt?: Date | string
  }

  export type AnimeEntryGenreUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeEntryGenreUncheckedUpdateManyInput = {
    animeEntryId?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeRatingCreateInput = {
    id?: string
    value: number
    createdAt?: Date | string
    updatedAt?: Date | string
    animeEntry: AnimeEntryCreateNestedOneWithoutRatingsInput
    user: UserCreateNestedOneWithoutAnimeRatingsInput
  }

  export type AnimeRatingUncheckedCreateInput = {
    id?: string
    animeEntryId: string
    userId: string
    value: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnimeRatingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    animeEntry?: AnimeEntryUpdateOneRequiredWithoutRatingsNestedInput
    user?: UserUpdateOneRequiredWithoutAnimeRatingsNestedInput
  }

  export type AnimeRatingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    animeEntryId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeRatingCreateManyInput = {
    id?: string
    animeEntryId: string
    userId: string
    value: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnimeRatingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeRatingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    animeEntryId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeEpisodeCreateInput = {
    id?: string
    episodeNumber: number
    title?: string | null
    description?: string | null
    durationMinutes?: number | null
    airDate?: Date | string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    animeEntry: AnimeEntryCreateNestedOneWithoutEpisodesInput
  }

  export type AnimeEpisodeUncheckedCreateInput = {
    id?: string
    animeEntryId: string
    episodeNumber: number
    title?: string | null
    description?: string | null
    durationMinutes?: number | null
    airDate?: Date | string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnimeEpisodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    episodeNumber?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    airDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    animeEntry?: AnimeEntryUpdateOneRequiredWithoutEpisodesNestedInput
  }

  export type AnimeEpisodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    animeEntryId?: StringFieldUpdateOperationsInput | string
    episodeNumber?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    airDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeEpisodeCreateManyInput = {
    id?: string
    animeEntryId: string
    episodeNumber: number
    title?: string | null
    description?: string | null
    durationMinutes?: number | null
    airDate?: Date | string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnimeEpisodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    episodeNumber?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    airDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeEpisodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    animeEntryId?: StringFieldUpdateOperationsInput | string
    episodeNumber?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    airDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeAuthorCreateInput = {
    id?: string
    name: string
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAnimeAuthorsInput
    animeLinks?: AnimeEntryAuthorCreateNestedManyWithoutAuthorInput
  }

  export type AnimeAuthorUncheckedCreateInput = {
    id?: string
    name: string
    bio?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    animeLinks?: AnimeEntryAuthorUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AnimeAuthorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAnimeAuthorsNestedInput
    animeLinks?: AnimeEntryAuthorUpdateManyWithoutAuthorNestedInput
  }

  export type AnimeAuthorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    animeLinks?: AnimeEntryAuthorUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AnimeAuthorCreateManyInput = {
    id?: string
    name: string
    bio?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnimeAuthorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeAuthorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeEntryAuthorCreateInput = {
    role?: string | null
    createdAt?: Date | string
    animeEntry: AnimeEntryCreateNestedOneWithoutAuthorLinksInput
    author: AnimeAuthorCreateNestedOneWithoutAnimeLinksInput
  }

  export type AnimeEntryAuthorUncheckedCreateInput = {
    animeEntryId: string
    authorId: string
    role?: string | null
    createdAt?: Date | string
  }

  export type AnimeEntryAuthorUpdateInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    animeEntry?: AnimeEntryUpdateOneRequiredWithoutAuthorLinksNestedInput
    author?: AnimeAuthorUpdateOneRequiredWithoutAnimeLinksNestedInput
  }

  export type AnimeEntryAuthorUncheckedUpdateInput = {
    animeEntryId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeEntryAuthorCreateManyInput = {
    animeEntryId: string
    authorId: string
    role?: string | null
    createdAt?: Date | string
  }

  export type AnimeEntryAuthorUpdateManyMutationInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeEntryAuthorUncheckedUpdateManyInput = {
    animeEntryId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AnimeEntryListRelationFilter = {
    every?: AnimeEntryWhereInput
    some?: AnimeEntryWhereInput
    none?: AnimeEntryWhereInput
  }

  export type AnimeAuthorListRelationFilter = {
    every?: AnimeAuthorWhereInput
    some?: AnimeAuthorWhereInput
    none?: AnimeAuthorWhereInput
  }

  export type AnimeRatingListRelationFilter = {
    every?: AnimeRatingWhereInput
    some?: AnimeRatingWhereInput
    none?: AnimeRatingWhereInput
  }

  export type UserRoleListRelationFilter = {
    every?: UserRoleWhereInput
    some?: UserRoleWhereInput
    none?: UserRoleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AnimeEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnimeAuthorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnimeRatingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    username?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    socialLinks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    username?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    username?: SortOrder
    bio?: SortOrder
    avatarUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type RolePermissionListRelationFilter = {
    every?: RolePermissionWhereInput
    some?: RolePermissionWhereInput
    none?: RolePermissionWhereInput
  }

  export type RolePermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PermissionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PermissionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type UserRoleUserIdRoleIdCompoundUniqueInput = {
    userId: string
    roleId: string
  }

  export type UserRoleCountOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserRoleMaxOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserRoleMinOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
  }

  export type PermissionScalarRelationFilter = {
    is?: PermissionWhereInput
    isNot?: PermissionWhereInput
  }

  export type RolePermissionRoleIdPermissionIdCompoundUniqueInput = {
    roleId: string
    permissionId: string
  }

  export type RolePermissionCountOrderByAggregateInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
    createdAt?: SortOrder
  }

  export type RolePermissionMaxOrderByAggregateInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
    createdAt?: SortOrder
  }

  export type RolePermissionMinOrderByAggregateInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumWatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WatchStatus | EnumWatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WatchStatus[] | ListEnumWatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WatchStatus[] | ListEnumWatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWatchStatusFilter<$PrismaModel> | $Enums.WatchStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumAnimeAiredStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimeAiredStatus | EnumAnimeAiredStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnimeAiredStatus[] | ListEnumAnimeAiredStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimeAiredStatus[] | ListEnumAnimeAiredStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimeAiredStatusFilter<$PrismaModel> | $Enums.AnimeAiredStatus
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AnimeEpisodeListRelationFilter = {
    every?: AnimeEpisodeWhereInput
    some?: AnimeEpisodeWhereInput
    none?: AnimeEpisodeWhereInput
  }

  export type AnimeEntryAuthorListRelationFilter = {
    every?: AnimeEntryAuthorWhereInput
    some?: AnimeEntryAuthorWhereInput
    none?: AnimeEntryAuthorWhereInput
  }

  export type AnimeEntryGenreListRelationFilter = {
    every?: AnimeEntryGenreWhereInput
    some?: AnimeEntryGenreWhereInput
    none?: AnimeEntryGenreWhereInput
  }

  export type AnimeTypeNullableScalarRelationFilter = {
    is?: AnimeTypeWhereInput | null
    isNot?: AnimeTypeWhereInput | null
  }

  export type AnimeEpisodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnimeEntryAuthorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnimeEntryGenreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnimeEntryCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    coverImageUrl?: SortOrder
    status?: SortOrder
    airedFrom?: SortOrder
    airedTo?: SortOrder
    airedStatus?: SortOrder
    viewCount?: SortOrder
    notes?: SortOrder
    userId?: SortOrder
    typeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnimeEntryAvgOrderByAggregateInput = {
    viewCount?: SortOrder
  }

  export type AnimeEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    coverImageUrl?: SortOrder
    status?: SortOrder
    airedFrom?: SortOrder
    airedTo?: SortOrder
    airedStatus?: SortOrder
    viewCount?: SortOrder
    notes?: SortOrder
    userId?: SortOrder
    typeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnimeEntryMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    title?: SortOrder
    description?: SortOrder
    coverImageUrl?: SortOrder
    status?: SortOrder
    airedFrom?: SortOrder
    airedTo?: SortOrder
    airedStatus?: SortOrder
    viewCount?: SortOrder
    notes?: SortOrder
    userId?: SortOrder
    typeId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnimeEntrySumOrderByAggregateInput = {
    viewCount?: SortOrder
  }

  export type EnumWatchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WatchStatus | EnumWatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WatchStatus[] | ListEnumWatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WatchStatus[] | ListEnumWatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWatchStatusWithAggregatesFilter<$PrismaModel> | $Enums.WatchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWatchStatusFilter<$PrismaModel>
    _max?: NestedEnumWatchStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumAnimeAiredStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimeAiredStatus | EnumAnimeAiredStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnimeAiredStatus[] | ListEnumAnimeAiredStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimeAiredStatus[] | ListEnumAnimeAiredStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimeAiredStatusWithAggregatesFilter<$PrismaModel> | $Enums.AnimeAiredStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnimeAiredStatusFilter<$PrismaModel>
    _max?: NestedEnumAnimeAiredStatusFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type GenreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GenreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GenreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnimeTypeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnimeTypeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnimeTypeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnimeEntryScalarRelationFilter = {
    is?: AnimeEntryWhereInput
    isNot?: AnimeEntryWhereInput
  }

  export type GenreScalarRelationFilter = {
    is?: GenreWhereInput
    isNot?: GenreWhereInput
  }

  export type AnimeEntryGenreAnimeEntryIdGenreIdCompoundUniqueInput = {
    animeEntryId: string
    genreId: string
  }

  export type AnimeEntryGenreCountOrderByAggregateInput = {
    animeEntryId?: SortOrder
    genreId?: SortOrder
    createdAt?: SortOrder
  }

  export type AnimeEntryGenreMaxOrderByAggregateInput = {
    animeEntryId?: SortOrder
    genreId?: SortOrder
    createdAt?: SortOrder
  }

  export type AnimeEntryGenreMinOrderByAggregateInput = {
    animeEntryId?: SortOrder
    genreId?: SortOrder
    createdAt?: SortOrder
  }

  export type AnimeRatingAnimeEntryIdUserIdCompoundUniqueInput = {
    animeEntryId: string
    userId: string
  }

  export type AnimeRatingCountOrderByAggregateInput = {
    id?: SortOrder
    animeEntryId?: SortOrder
    userId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnimeRatingAvgOrderByAggregateInput = {
    value?: SortOrder
  }

  export type AnimeRatingMaxOrderByAggregateInput = {
    id?: SortOrder
    animeEntryId?: SortOrder
    userId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnimeRatingMinOrderByAggregateInput = {
    id?: SortOrder
    animeEntryId?: SortOrder
    userId?: SortOrder
    value?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnimeRatingSumOrderByAggregateInput = {
    value?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AnimeEpisodeAnimeEntryIdEpisodeNumberCompoundUniqueInput = {
    animeEntryId: string
    episodeNumber: number
  }

  export type AnimeEpisodeCountOrderByAggregateInput = {
    id?: SortOrder
    animeEntryId?: SortOrder
    episodeNumber?: SortOrder
    title?: SortOrder
    description?: SortOrder
    durationMinutes?: SortOrder
    airDate?: SortOrder
    videoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnimeEpisodeAvgOrderByAggregateInput = {
    episodeNumber?: SortOrder
    durationMinutes?: SortOrder
  }

  export type AnimeEpisodeMaxOrderByAggregateInput = {
    id?: SortOrder
    animeEntryId?: SortOrder
    episodeNumber?: SortOrder
    title?: SortOrder
    description?: SortOrder
    durationMinutes?: SortOrder
    airDate?: SortOrder
    videoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnimeEpisodeMinOrderByAggregateInput = {
    id?: SortOrder
    animeEntryId?: SortOrder
    episodeNumber?: SortOrder
    title?: SortOrder
    description?: SortOrder
    durationMinutes?: SortOrder
    airDate?: SortOrder
    videoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnimeEpisodeSumOrderByAggregateInput = {
    episodeNumber?: SortOrder
    durationMinutes?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AnimeAuthorUserIdNameCompoundUniqueInput = {
    userId: string
    name: string
  }

  export type AnimeAuthorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnimeAuthorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnimeAuthorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AnimeAuthorScalarRelationFilter = {
    is?: AnimeAuthorWhereInput
    isNot?: AnimeAuthorWhereInput
  }

  export type AnimeEntryAuthorAnimeEntryIdAuthorIdCompoundUniqueInput = {
    animeEntryId: string
    authorId: string
  }

  export type AnimeEntryAuthorCountOrderByAggregateInput = {
    animeEntryId?: SortOrder
    authorId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type AnimeEntryAuthorMaxOrderByAggregateInput = {
    animeEntryId?: SortOrder
    authorId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type AnimeEntryAuthorMinOrderByAggregateInput = {
    animeEntryId?: SortOrder
    authorId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type AnimeEntryCreateNestedManyWithoutUserInput = {
    create?: XOR<AnimeEntryCreateWithoutUserInput, AnimeEntryUncheckedCreateWithoutUserInput> | AnimeEntryCreateWithoutUserInput[] | AnimeEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnimeEntryCreateOrConnectWithoutUserInput | AnimeEntryCreateOrConnectWithoutUserInput[]
    createMany?: AnimeEntryCreateManyUserInputEnvelope
    connect?: AnimeEntryWhereUniqueInput | AnimeEntryWhereUniqueInput[]
  }

  export type AnimeAuthorCreateNestedManyWithoutUserInput = {
    create?: XOR<AnimeAuthorCreateWithoutUserInput, AnimeAuthorUncheckedCreateWithoutUserInput> | AnimeAuthorCreateWithoutUserInput[] | AnimeAuthorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnimeAuthorCreateOrConnectWithoutUserInput | AnimeAuthorCreateOrConnectWithoutUserInput[]
    createMany?: AnimeAuthorCreateManyUserInputEnvelope
    connect?: AnimeAuthorWhereUniqueInput | AnimeAuthorWhereUniqueInput[]
  }

  export type AnimeRatingCreateNestedManyWithoutUserInput = {
    create?: XOR<AnimeRatingCreateWithoutUserInput, AnimeRatingUncheckedCreateWithoutUserInput> | AnimeRatingCreateWithoutUserInput[] | AnimeRatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnimeRatingCreateOrConnectWithoutUserInput | AnimeRatingCreateOrConnectWithoutUserInput[]
    createMany?: AnimeRatingCreateManyUserInputEnvelope
    connect?: AnimeRatingWhereUniqueInput | AnimeRatingWhereUniqueInput[]
  }

  export type UserRoleCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type AnimeEntryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AnimeEntryCreateWithoutUserInput, AnimeEntryUncheckedCreateWithoutUserInput> | AnimeEntryCreateWithoutUserInput[] | AnimeEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnimeEntryCreateOrConnectWithoutUserInput | AnimeEntryCreateOrConnectWithoutUserInput[]
    createMany?: AnimeEntryCreateManyUserInputEnvelope
    connect?: AnimeEntryWhereUniqueInput | AnimeEntryWhereUniqueInput[]
  }

  export type AnimeAuthorUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AnimeAuthorCreateWithoutUserInput, AnimeAuthorUncheckedCreateWithoutUserInput> | AnimeAuthorCreateWithoutUserInput[] | AnimeAuthorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnimeAuthorCreateOrConnectWithoutUserInput | AnimeAuthorCreateOrConnectWithoutUserInput[]
    createMany?: AnimeAuthorCreateManyUserInputEnvelope
    connect?: AnimeAuthorWhereUniqueInput | AnimeAuthorWhereUniqueInput[]
  }

  export type AnimeRatingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AnimeRatingCreateWithoutUserInput, AnimeRatingUncheckedCreateWithoutUserInput> | AnimeRatingCreateWithoutUserInput[] | AnimeRatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnimeRatingCreateOrConnectWithoutUserInput | AnimeRatingCreateOrConnectWithoutUserInput[]
    createMany?: AnimeRatingCreateManyUserInputEnvelope
    connect?: AnimeRatingWhereUniqueInput | AnimeRatingWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AnimeEntryUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnimeEntryCreateWithoutUserInput, AnimeEntryUncheckedCreateWithoutUserInput> | AnimeEntryCreateWithoutUserInput[] | AnimeEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnimeEntryCreateOrConnectWithoutUserInput | AnimeEntryCreateOrConnectWithoutUserInput[]
    upsert?: AnimeEntryUpsertWithWhereUniqueWithoutUserInput | AnimeEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnimeEntryCreateManyUserInputEnvelope
    set?: AnimeEntryWhereUniqueInput | AnimeEntryWhereUniqueInput[]
    disconnect?: AnimeEntryWhereUniqueInput | AnimeEntryWhereUniqueInput[]
    delete?: AnimeEntryWhereUniqueInput | AnimeEntryWhereUniqueInput[]
    connect?: AnimeEntryWhereUniqueInput | AnimeEntryWhereUniqueInput[]
    update?: AnimeEntryUpdateWithWhereUniqueWithoutUserInput | AnimeEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnimeEntryUpdateManyWithWhereWithoutUserInput | AnimeEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnimeEntryScalarWhereInput | AnimeEntryScalarWhereInput[]
  }

  export type AnimeAuthorUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnimeAuthorCreateWithoutUserInput, AnimeAuthorUncheckedCreateWithoutUserInput> | AnimeAuthorCreateWithoutUserInput[] | AnimeAuthorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnimeAuthorCreateOrConnectWithoutUserInput | AnimeAuthorCreateOrConnectWithoutUserInput[]
    upsert?: AnimeAuthorUpsertWithWhereUniqueWithoutUserInput | AnimeAuthorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnimeAuthorCreateManyUserInputEnvelope
    set?: AnimeAuthorWhereUniqueInput | AnimeAuthorWhereUniqueInput[]
    disconnect?: AnimeAuthorWhereUniqueInput | AnimeAuthorWhereUniqueInput[]
    delete?: AnimeAuthorWhereUniqueInput | AnimeAuthorWhereUniqueInput[]
    connect?: AnimeAuthorWhereUniqueInput | AnimeAuthorWhereUniqueInput[]
    update?: AnimeAuthorUpdateWithWhereUniqueWithoutUserInput | AnimeAuthorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnimeAuthorUpdateManyWithWhereWithoutUserInput | AnimeAuthorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnimeAuthorScalarWhereInput | AnimeAuthorScalarWhereInput[]
  }

  export type AnimeRatingUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnimeRatingCreateWithoutUserInput, AnimeRatingUncheckedCreateWithoutUserInput> | AnimeRatingCreateWithoutUserInput[] | AnimeRatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnimeRatingCreateOrConnectWithoutUserInput | AnimeRatingCreateOrConnectWithoutUserInput[]
    upsert?: AnimeRatingUpsertWithWhereUniqueWithoutUserInput | AnimeRatingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnimeRatingCreateManyUserInputEnvelope
    set?: AnimeRatingWhereUniqueInput | AnimeRatingWhereUniqueInput[]
    disconnect?: AnimeRatingWhereUniqueInput | AnimeRatingWhereUniqueInput[]
    delete?: AnimeRatingWhereUniqueInput | AnimeRatingWhereUniqueInput[]
    connect?: AnimeRatingWhereUniqueInput | AnimeRatingWhereUniqueInput[]
    update?: AnimeRatingUpdateWithWhereUniqueWithoutUserInput | AnimeRatingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnimeRatingUpdateManyWithWhereWithoutUserInput | AnimeRatingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnimeRatingScalarWhereInput | AnimeRatingScalarWhereInput[]
  }

  export type UserRoleUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type AnimeEntryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnimeEntryCreateWithoutUserInput, AnimeEntryUncheckedCreateWithoutUserInput> | AnimeEntryCreateWithoutUserInput[] | AnimeEntryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnimeEntryCreateOrConnectWithoutUserInput | AnimeEntryCreateOrConnectWithoutUserInput[]
    upsert?: AnimeEntryUpsertWithWhereUniqueWithoutUserInput | AnimeEntryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnimeEntryCreateManyUserInputEnvelope
    set?: AnimeEntryWhereUniqueInput | AnimeEntryWhereUniqueInput[]
    disconnect?: AnimeEntryWhereUniqueInput | AnimeEntryWhereUniqueInput[]
    delete?: AnimeEntryWhereUniqueInput | AnimeEntryWhereUniqueInput[]
    connect?: AnimeEntryWhereUniqueInput | AnimeEntryWhereUniqueInput[]
    update?: AnimeEntryUpdateWithWhereUniqueWithoutUserInput | AnimeEntryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnimeEntryUpdateManyWithWhereWithoutUserInput | AnimeEntryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnimeEntryScalarWhereInput | AnimeEntryScalarWhereInput[]
  }

  export type AnimeAuthorUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnimeAuthorCreateWithoutUserInput, AnimeAuthorUncheckedCreateWithoutUserInput> | AnimeAuthorCreateWithoutUserInput[] | AnimeAuthorUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnimeAuthorCreateOrConnectWithoutUserInput | AnimeAuthorCreateOrConnectWithoutUserInput[]
    upsert?: AnimeAuthorUpsertWithWhereUniqueWithoutUserInput | AnimeAuthorUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnimeAuthorCreateManyUserInputEnvelope
    set?: AnimeAuthorWhereUniqueInput | AnimeAuthorWhereUniqueInput[]
    disconnect?: AnimeAuthorWhereUniqueInput | AnimeAuthorWhereUniqueInput[]
    delete?: AnimeAuthorWhereUniqueInput | AnimeAuthorWhereUniqueInput[]
    connect?: AnimeAuthorWhereUniqueInput | AnimeAuthorWhereUniqueInput[]
    update?: AnimeAuthorUpdateWithWhereUniqueWithoutUserInput | AnimeAuthorUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnimeAuthorUpdateManyWithWhereWithoutUserInput | AnimeAuthorUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnimeAuthorScalarWhereInput | AnimeAuthorScalarWhereInput[]
  }

  export type AnimeRatingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnimeRatingCreateWithoutUserInput, AnimeRatingUncheckedCreateWithoutUserInput> | AnimeRatingCreateWithoutUserInput[] | AnimeRatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnimeRatingCreateOrConnectWithoutUserInput | AnimeRatingCreateOrConnectWithoutUserInput[]
    upsert?: AnimeRatingUpsertWithWhereUniqueWithoutUserInput | AnimeRatingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnimeRatingCreateManyUserInputEnvelope
    set?: AnimeRatingWhereUniqueInput | AnimeRatingWhereUniqueInput[]
    disconnect?: AnimeRatingWhereUniqueInput | AnimeRatingWhereUniqueInput[]
    delete?: AnimeRatingWhereUniqueInput | AnimeRatingWhereUniqueInput[]
    connect?: AnimeRatingWhereUniqueInput | AnimeRatingWhereUniqueInput[]
    update?: AnimeRatingUpdateWithWhereUniqueWithoutUserInput | AnimeRatingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnimeRatingUpdateManyWithWhereWithoutUserInput | AnimeRatingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnimeRatingScalarWhereInput | AnimeRatingScalarWhereInput[]
  }

  export type UserRoleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserRoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type RolePermissionCreateNestedManyWithoutRoleInput = {
    create?: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput> | RolePermissionCreateWithoutRoleInput[] | RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRoleInput | RolePermissionCreateOrConnectWithoutRoleInput[]
    createMany?: RolePermissionCreateManyRoleInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type RolePermissionUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput> | RolePermissionCreateWithoutRoleInput[] | RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRoleInput | RolePermissionCreateOrConnectWithoutRoleInput[]
    createMany?: RolePermissionCreateManyRoleInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type UserRoleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type RolePermissionUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput> | RolePermissionCreateWithoutRoleInput[] | RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRoleInput | RolePermissionCreateOrConnectWithoutRoleInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutRoleInput | RolePermissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RolePermissionCreateManyRoleInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutRoleInput | RolePermissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutRoleInput | RolePermissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type RolePermissionUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput> | RolePermissionCreateWithoutRoleInput[] | RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutRoleInput | RolePermissionCreateOrConnectWithoutRoleInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutRoleInput | RolePermissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: RolePermissionCreateManyRoleInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutRoleInput | RolePermissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutRoleInput | RolePermissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type RolePermissionCreateNestedManyWithoutPermissionInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput> | RolePermissionCreateWithoutPermissionInput[] | RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionInput | RolePermissionCreateOrConnectWithoutPermissionInput[]
    createMany?: RolePermissionCreateManyPermissionInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type RolePermissionUncheckedCreateNestedManyWithoutPermissionInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput> | RolePermissionCreateWithoutPermissionInput[] | RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionInput | RolePermissionCreateOrConnectWithoutPermissionInput[]
    createMany?: RolePermissionCreateManyPermissionInputEnvelope
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
  }

  export type RolePermissionUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput> | RolePermissionCreateWithoutPermissionInput[] | RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionInput | RolePermissionCreateOrConnectWithoutPermissionInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutPermissionInput | RolePermissionUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: RolePermissionCreateManyPermissionInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutPermissionInput | RolePermissionUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutPermissionInput | RolePermissionUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type RolePermissionUncheckedUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput> | RolePermissionCreateWithoutPermissionInput[] | RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: RolePermissionCreateOrConnectWithoutPermissionInput | RolePermissionCreateOrConnectWithoutPermissionInput[]
    upsert?: RolePermissionUpsertWithWhereUniqueWithoutPermissionInput | RolePermissionUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: RolePermissionCreateManyPermissionInputEnvelope
    set?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    disconnect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    delete?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    connect?: RolePermissionWhereUniqueInput | RolePermissionWhereUniqueInput[]
    update?: RolePermissionUpdateWithWhereUniqueWithoutPermissionInput | RolePermissionUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: RolePermissionUpdateManyWithWhereWithoutPermissionInput | RolePermissionUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRoleLinksInput = {
    create?: XOR<UserCreateWithoutRoleLinksInput, UserUncheckedCreateWithoutRoleLinksInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoleLinksInput
    connect?: UserWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutUserLinksInput = {
    create?: XOR<RoleCreateWithoutUserLinksInput, RoleUncheckedCreateWithoutUserLinksInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserLinksInput
    connect?: RoleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRoleLinksNestedInput = {
    create?: XOR<UserCreateWithoutRoleLinksInput, UserUncheckedCreateWithoutRoleLinksInput>
    connectOrCreate?: UserCreateOrConnectWithoutRoleLinksInput
    upsert?: UserUpsertWithoutRoleLinksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRoleLinksInput, UserUpdateWithoutRoleLinksInput>, UserUncheckedUpdateWithoutRoleLinksInput>
  }

  export type RoleUpdateOneRequiredWithoutUserLinksNestedInput = {
    create?: XOR<RoleCreateWithoutUserLinksInput, RoleUncheckedCreateWithoutUserLinksInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUserLinksInput
    upsert?: RoleUpsertWithoutUserLinksInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUserLinksInput, RoleUpdateWithoutUserLinksInput>, RoleUncheckedUpdateWithoutUserLinksInput>
  }

  export type RoleCreateNestedOneWithoutPermissionsInput = {
    create?: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput
    connect?: RoleWhereUniqueInput
  }

  export type PermissionCreateNestedOneWithoutRolesInput = {
    create?: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput>
    connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput
    connect?: PermissionWhereUniqueInput
  }

  export type RoleUpdateOneRequiredWithoutPermissionsNestedInput = {
    create?: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutPermissionsInput
    upsert?: RoleUpsertWithoutPermissionsInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutPermissionsInput, RoleUpdateWithoutPermissionsInput>, RoleUncheckedUpdateWithoutPermissionsInput>
  }

  export type PermissionUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput>
    connectOrCreate?: PermissionCreateOrConnectWithoutRolesInput
    upsert?: PermissionUpsertWithoutRolesInput
    connect?: PermissionWhereUniqueInput
    update?: XOR<XOR<PermissionUpdateToOneWithWhereWithoutRolesInput, PermissionUpdateWithoutRolesInput>, PermissionUncheckedUpdateWithoutRolesInput>
  }

  export type UserCreateNestedOneWithoutAnimeEntriesInput = {
    create?: XOR<UserCreateWithoutAnimeEntriesInput, UserUncheckedCreateWithoutAnimeEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnimeEntriesInput
    connect?: UserWhereUniqueInput
  }

  export type AnimeEpisodeCreateNestedManyWithoutAnimeEntryInput = {
    create?: XOR<AnimeEpisodeCreateWithoutAnimeEntryInput, AnimeEpisodeUncheckedCreateWithoutAnimeEntryInput> | AnimeEpisodeCreateWithoutAnimeEntryInput[] | AnimeEpisodeUncheckedCreateWithoutAnimeEntryInput[]
    connectOrCreate?: AnimeEpisodeCreateOrConnectWithoutAnimeEntryInput | AnimeEpisodeCreateOrConnectWithoutAnimeEntryInput[]
    createMany?: AnimeEpisodeCreateManyAnimeEntryInputEnvelope
    connect?: AnimeEpisodeWhereUniqueInput | AnimeEpisodeWhereUniqueInput[]
  }

  export type AnimeEntryAuthorCreateNestedManyWithoutAnimeEntryInput = {
    create?: XOR<AnimeEntryAuthorCreateWithoutAnimeEntryInput, AnimeEntryAuthorUncheckedCreateWithoutAnimeEntryInput> | AnimeEntryAuthorCreateWithoutAnimeEntryInput[] | AnimeEntryAuthorUncheckedCreateWithoutAnimeEntryInput[]
    connectOrCreate?: AnimeEntryAuthorCreateOrConnectWithoutAnimeEntryInput | AnimeEntryAuthorCreateOrConnectWithoutAnimeEntryInput[]
    createMany?: AnimeEntryAuthorCreateManyAnimeEntryInputEnvelope
    connect?: AnimeEntryAuthorWhereUniqueInput | AnimeEntryAuthorWhereUniqueInput[]
  }

  export type AnimeRatingCreateNestedManyWithoutAnimeEntryInput = {
    create?: XOR<AnimeRatingCreateWithoutAnimeEntryInput, AnimeRatingUncheckedCreateWithoutAnimeEntryInput> | AnimeRatingCreateWithoutAnimeEntryInput[] | AnimeRatingUncheckedCreateWithoutAnimeEntryInput[]
    connectOrCreate?: AnimeRatingCreateOrConnectWithoutAnimeEntryInput | AnimeRatingCreateOrConnectWithoutAnimeEntryInput[]
    createMany?: AnimeRatingCreateManyAnimeEntryInputEnvelope
    connect?: AnimeRatingWhereUniqueInput | AnimeRatingWhereUniqueInput[]
  }

  export type AnimeEntryGenreCreateNestedManyWithoutAnimeEntryInput = {
    create?: XOR<AnimeEntryGenreCreateWithoutAnimeEntryInput, AnimeEntryGenreUncheckedCreateWithoutAnimeEntryInput> | AnimeEntryGenreCreateWithoutAnimeEntryInput[] | AnimeEntryGenreUncheckedCreateWithoutAnimeEntryInput[]
    connectOrCreate?: AnimeEntryGenreCreateOrConnectWithoutAnimeEntryInput | AnimeEntryGenreCreateOrConnectWithoutAnimeEntryInput[]
    createMany?: AnimeEntryGenreCreateManyAnimeEntryInputEnvelope
    connect?: AnimeEntryGenreWhereUniqueInput | AnimeEntryGenreWhereUniqueInput[]
  }

  export type AnimeTypeCreateNestedOneWithoutAnimeEntriesInput = {
    create?: XOR<AnimeTypeCreateWithoutAnimeEntriesInput, AnimeTypeUncheckedCreateWithoutAnimeEntriesInput>
    connectOrCreate?: AnimeTypeCreateOrConnectWithoutAnimeEntriesInput
    connect?: AnimeTypeWhereUniqueInput
  }

  export type AnimeEpisodeUncheckedCreateNestedManyWithoutAnimeEntryInput = {
    create?: XOR<AnimeEpisodeCreateWithoutAnimeEntryInput, AnimeEpisodeUncheckedCreateWithoutAnimeEntryInput> | AnimeEpisodeCreateWithoutAnimeEntryInput[] | AnimeEpisodeUncheckedCreateWithoutAnimeEntryInput[]
    connectOrCreate?: AnimeEpisodeCreateOrConnectWithoutAnimeEntryInput | AnimeEpisodeCreateOrConnectWithoutAnimeEntryInput[]
    createMany?: AnimeEpisodeCreateManyAnimeEntryInputEnvelope
    connect?: AnimeEpisodeWhereUniqueInput | AnimeEpisodeWhereUniqueInput[]
  }

  export type AnimeEntryAuthorUncheckedCreateNestedManyWithoutAnimeEntryInput = {
    create?: XOR<AnimeEntryAuthorCreateWithoutAnimeEntryInput, AnimeEntryAuthorUncheckedCreateWithoutAnimeEntryInput> | AnimeEntryAuthorCreateWithoutAnimeEntryInput[] | AnimeEntryAuthorUncheckedCreateWithoutAnimeEntryInput[]
    connectOrCreate?: AnimeEntryAuthorCreateOrConnectWithoutAnimeEntryInput | AnimeEntryAuthorCreateOrConnectWithoutAnimeEntryInput[]
    createMany?: AnimeEntryAuthorCreateManyAnimeEntryInputEnvelope
    connect?: AnimeEntryAuthorWhereUniqueInput | AnimeEntryAuthorWhereUniqueInput[]
  }

  export type AnimeRatingUncheckedCreateNestedManyWithoutAnimeEntryInput = {
    create?: XOR<AnimeRatingCreateWithoutAnimeEntryInput, AnimeRatingUncheckedCreateWithoutAnimeEntryInput> | AnimeRatingCreateWithoutAnimeEntryInput[] | AnimeRatingUncheckedCreateWithoutAnimeEntryInput[]
    connectOrCreate?: AnimeRatingCreateOrConnectWithoutAnimeEntryInput | AnimeRatingCreateOrConnectWithoutAnimeEntryInput[]
    createMany?: AnimeRatingCreateManyAnimeEntryInputEnvelope
    connect?: AnimeRatingWhereUniqueInput | AnimeRatingWhereUniqueInput[]
  }

  export type AnimeEntryGenreUncheckedCreateNestedManyWithoutAnimeEntryInput = {
    create?: XOR<AnimeEntryGenreCreateWithoutAnimeEntryInput, AnimeEntryGenreUncheckedCreateWithoutAnimeEntryInput> | AnimeEntryGenreCreateWithoutAnimeEntryInput[] | AnimeEntryGenreUncheckedCreateWithoutAnimeEntryInput[]
    connectOrCreate?: AnimeEntryGenreCreateOrConnectWithoutAnimeEntryInput | AnimeEntryGenreCreateOrConnectWithoutAnimeEntryInput[]
    createMany?: AnimeEntryGenreCreateManyAnimeEntryInputEnvelope
    connect?: AnimeEntryGenreWhereUniqueInput | AnimeEntryGenreWhereUniqueInput[]
  }

  export type EnumWatchStatusFieldUpdateOperationsInput = {
    set?: $Enums.WatchStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumAnimeAiredStatusFieldUpdateOperationsInput = {
    set?: $Enums.AnimeAiredStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAnimeEntriesNestedInput = {
    create?: XOR<UserCreateWithoutAnimeEntriesInput, UserUncheckedCreateWithoutAnimeEntriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnimeEntriesInput
    upsert?: UserUpsertWithoutAnimeEntriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnimeEntriesInput, UserUpdateWithoutAnimeEntriesInput>, UserUncheckedUpdateWithoutAnimeEntriesInput>
  }

  export type AnimeEpisodeUpdateManyWithoutAnimeEntryNestedInput = {
    create?: XOR<AnimeEpisodeCreateWithoutAnimeEntryInput, AnimeEpisodeUncheckedCreateWithoutAnimeEntryInput> | AnimeEpisodeCreateWithoutAnimeEntryInput[] | AnimeEpisodeUncheckedCreateWithoutAnimeEntryInput[]
    connectOrCreate?: AnimeEpisodeCreateOrConnectWithoutAnimeEntryInput | AnimeEpisodeCreateOrConnectWithoutAnimeEntryInput[]
    upsert?: AnimeEpisodeUpsertWithWhereUniqueWithoutAnimeEntryInput | AnimeEpisodeUpsertWithWhereUniqueWithoutAnimeEntryInput[]
    createMany?: AnimeEpisodeCreateManyAnimeEntryInputEnvelope
    set?: AnimeEpisodeWhereUniqueInput | AnimeEpisodeWhereUniqueInput[]
    disconnect?: AnimeEpisodeWhereUniqueInput | AnimeEpisodeWhereUniqueInput[]
    delete?: AnimeEpisodeWhereUniqueInput | AnimeEpisodeWhereUniqueInput[]
    connect?: AnimeEpisodeWhereUniqueInput | AnimeEpisodeWhereUniqueInput[]
    update?: AnimeEpisodeUpdateWithWhereUniqueWithoutAnimeEntryInput | AnimeEpisodeUpdateWithWhereUniqueWithoutAnimeEntryInput[]
    updateMany?: AnimeEpisodeUpdateManyWithWhereWithoutAnimeEntryInput | AnimeEpisodeUpdateManyWithWhereWithoutAnimeEntryInput[]
    deleteMany?: AnimeEpisodeScalarWhereInput | AnimeEpisodeScalarWhereInput[]
  }

  export type AnimeEntryAuthorUpdateManyWithoutAnimeEntryNestedInput = {
    create?: XOR<AnimeEntryAuthorCreateWithoutAnimeEntryInput, AnimeEntryAuthorUncheckedCreateWithoutAnimeEntryInput> | AnimeEntryAuthorCreateWithoutAnimeEntryInput[] | AnimeEntryAuthorUncheckedCreateWithoutAnimeEntryInput[]
    connectOrCreate?: AnimeEntryAuthorCreateOrConnectWithoutAnimeEntryInput | AnimeEntryAuthorCreateOrConnectWithoutAnimeEntryInput[]
    upsert?: AnimeEntryAuthorUpsertWithWhereUniqueWithoutAnimeEntryInput | AnimeEntryAuthorUpsertWithWhereUniqueWithoutAnimeEntryInput[]
    createMany?: AnimeEntryAuthorCreateManyAnimeEntryInputEnvelope
    set?: AnimeEntryAuthorWhereUniqueInput | AnimeEntryAuthorWhereUniqueInput[]
    disconnect?: AnimeEntryAuthorWhereUniqueInput | AnimeEntryAuthorWhereUniqueInput[]
    delete?: AnimeEntryAuthorWhereUniqueInput | AnimeEntryAuthorWhereUniqueInput[]
    connect?: AnimeEntryAuthorWhereUniqueInput | AnimeEntryAuthorWhereUniqueInput[]
    update?: AnimeEntryAuthorUpdateWithWhereUniqueWithoutAnimeEntryInput | AnimeEntryAuthorUpdateWithWhereUniqueWithoutAnimeEntryInput[]
    updateMany?: AnimeEntryAuthorUpdateManyWithWhereWithoutAnimeEntryInput | AnimeEntryAuthorUpdateManyWithWhereWithoutAnimeEntryInput[]
    deleteMany?: AnimeEntryAuthorScalarWhereInput | AnimeEntryAuthorScalarWhereInput[]
  }

  export type AnimeRatingUpdateManyWithoutAnimeEntryNestedInput = {
    create?: XOR<AnimeRatingCreateWithoutAnimeEntryInput, AnimeRatingUncheckedCreateWithoutAnimeEntryInput> | AnimeRatingCreateWithoutAnimeEntryInput[] | AnimeRatingUncheckedCreateWithoutAnimeEntryInput[]
    connectOrCreate?: AnimeRatingCreateOrConnectWithoutAnimeEntryInput | AnimeRatingCreateOrConnectWithoutAnimeEntryInput[]
    upsert?: AnimeRatingUpsertWithWhereUniqueWithoutAnimeEntryInput | AnimeRatingUpsertWithWhereUniqueWithoutAnimeEntryInput[]
    createMany?: AnimeRatingCreateManyAnimeEntryInputEnvelope
    set?: AnimeRatingWhereUniqueInput | AnimeRatingWhereUniqueInput[]
    disconnect?: AnimeRatingWhereUniqueInput | AnimeRatingWhereUniqueInput[]
    delete?: AnimeRatingWhereUniqueInput | AnimeRatingWhereUniqueInput[]
    connect?: AnimeRatingWhereUniqueInput | AnimeRatingWhereUniqueInput[]
    update?: AnimeRatingUpdateWithWhereUniqueWithoutAnimeEntryInput | AnimeRatingUpdateWithWhereUniqueWithoutAnimeEntryInput[]
    updateMany?: AnimeRatingUpdateManyWithWhereWithoutAnimeEntryInput | AnimeRatingUpdateManyWithWhereWithoutAnimeEntryInput[]
    deleteMany?: AnimeRatingScalarWhereInput | AnimeRatingScalarWhereInput[]
  }

  export type AnimeEntryGenreUpdateManyWithoutAnimeEntryNestedInput = {
    create?: XOR<AnimeEntryGenreCreateWithoutAnimeEntryInput, AnimeEntryGenreUncheckedCreateWithoutAnimeEntryInput> | AnimeEntryGenreCreateWithoutAnimeEntryInput[] | AnimeEntryGenreUncheckedCreateWithoutAnimeEntryInput[]
    connectOrCreate?: AnimeEntryGenreCreateOrConnectWithoutAnimeEntryInput | AnimeEntryGenreCreateOrConnectWithoutAnimeEntryInput[]
    upsert?: AnimeEntryGenreUpsertWithWhereUniqueWithoutAnimeEntryInput | AnimeEntryGenreUpsertWithWhereUniqueWithoutAnimeEntryInput[]
    createMany?: AnimeEntryGenreCreateManyAnimeEntryInputEnvelope
    set?: AnimeEntryGenreWhereUniqueInput | AnimeEntryGenreWhereUniqueInput[]
    disconnect?: AnimeEntryGenreWhereUniqueInput | AnimeEntryGenreWhereUniqueInput[]
    delete?: AnimeEntryGenreWhereUniqueInput | AnimeEntryGenreWhereUniqueInput[]
    connect?: AnimeEntryGenreWhereUniqueInput | AnimeEntryGenreWhereUniqueInput[]
    update?: AnimeEntryGenreUpdateWithWhereUniqueWithoutAnimeEntryInput | AnimeEntryGenreUpdateWithWhereUniqueWithoutAnimeEntryInput[]
    updateMany?: AnimeEntryGenreUpdateManyWithWhereWithoutAnimeEntryInput | AnimeEntryGenreUpdateManyWithWhereWithoutAnimeEntryInput[]
    deleteMany?: AnimeEntryGenreScalarWhereInput | AnimeEntryGenreScalarWhereInput[]
  }

  export type AnimeTypeUpdateOneWithoutAnimeEntriesNestedInput = {
    create?: XOR<AnimeTypeCreateWithoutAnimeEntriesInput, AnimeTypeUncheckedCreateWithoutAnimeEntriesInput>
    connectOrCreate?: AnimeTypeCreateOrConnectWithoutAnimeEntriesInput
    upsert?: AnimeTypeUpsertWithoutAnimeEntriesInput
    disconnect?: AnimeTypeWhereInput | boolean
    delete?: AnimeTypeWhereInput | boolean
    connect?: AnimeTypeWhereUniqueInput
    update?: XOR<XOR<AnimeTypeUpdateToOneWithWhereWithoutAnimeEntriesInput, AnimeTypeUpdateWithoutAnimeEntriesInput>, AnimeTypeUncheckedUpdateWithoutAnimeEntriesInput>
  }

  export type AnimeEpisodeUncheckedUpdateManyWithoutAnimeEntryNestedInput = {
    create?: XOR<AnimeEpisodeCreateWithoutAnimeEntryInput, AnimeEpisodeUncheckedCreateWithoutAnimeEntryInput> | AnimeEpisodeCreateWithoutAnimeEntryInput[] | AnimeEpisodeUncheckedCreateWithoutAnimeEntryInput[]
    connectOrCreate?: AnimeEpisodeCreateOrConnectWithoutAnimeEntryInput | AnimeEpisodeCreateOrConnectWithoutAnimeEntryInput[]
    upsert?: AnimeEpisodeUpsertWithWhereUniqueWithoutAnimeEntryInput | AnimeEpisodeUpsertWithWhereUniqueWithoutAnimeEntryInput[]
    createMany?: AnimeEpisodeCreateManyAnimeEntryInputEnvelope
    set?: AnimeEpisodeWhereUniqueInput | AnimeEpisodeWhereUniqueInput[]
    disconnect?: AnimeEpisodeWhereUniqueInput | AnimeEpisodeWhereUniqueInput[]
    delete?: AnimeEpisodeWhereUniqueInput | AnimeEpisodeWhereUniqueInput[]
    connect?: AnimeEpisodeWhereUniqueInput | AnimeEpisodeWhereUniqueInput[]
    update?: AnimeEpisodeUpdateWithWhereUniqueWithoutAnimeEntryInput | AnimeEpisodeUpdateWithWhereUniqueWithoutAnimeEntryInput[]
    updateMany?: AnimeEpisodeUpdateManyWithWhereWithoutAnimeEntryInput | AnimeEpisodeUpdateManyWithWhereWithoutAnimeEntryInput[]
    deleteMany?: AnimeEpisodeScalarWhereInput | AnimeEpisodeScalarWhereInput[]
  }

  export type AnimeEntryAuthorUncheckedUpdateManyWithoutAnimeEntryNestedInput = {
    create?: XOR<AnimeEntryAuthorCreateWithoutAnimeEntryInput, AnimeEntryAuthorUncheckedCreateWithoutAnimeEntryInput> | AnimeEntryAuthorCreateWithoutAnimeEntryInput[] | AnimeEntryAuthorUncheckedCreateWithoutAnimeEntryInput[]
    connectOrCreate?: AnimeEntryAuthorCreateOrConnectWithoutAnimeEntryInput | AnimeEntryAuthorCreateOrConnectWithoutAnimeEntryInput[]
    upsert?: AnimeEntryAuthorUpsertWithWhereUniqueWithoutAnimeEntryInput | AnimeEntryAuthorUpsertWithWhereUniqueWithoutAnimeEntryInput[]
    createMany?: AnimeEntryAuthorCreateManyAnimeEntryInputEnvelope
    set?: AnimeEntryAuthorWhereUniqueInput | AnimeEntryAuthorWhereUniqueInput[]
    disconnect?: AnimeEntryAuthorWhereUniqueInput | AnimeEntryAuthorWhereUniqueInput[]
    delete?: AnimeEntryAuthorWhereUniqueInput | AnimeEntryAuthorWhereUniqueInput[]
    connect?: AnimeEntryAuthorWhereUniqueInput | AnimeEntryAuthorWhereUniqueInput[]
    update?: AnimeEntryAuthorUpdateWithWhereUniqueWithoutAnimeEntryInput | AnimeEntryAuthorUpdateWithWhereUniqueWithoutAnimeEntryInput[]
    updateMany?: AnimeEntryAuthorUpdateManyWithWhereWithoutAnimeEntryInput | AnimeEntryAuthorUpdateManyWithWhereWithoutAnimeEntryInput[]
    deleteMany?: AnimeEntryAuthorScalarWhereInput | AnimeEntryAuthorScalarWhereInput[]
  }

  export type AnimeRatingUncheckedUpdateManyWithoutAnimeEntryNestedInput = {
    create?: XOR<AnimeRatingCreateWithoutAnimeEntryInput, AnimeRatingUncheckedCreateWithoutAnimeEntryInput> | AnimeRatingCreateWithoutAnimeEntryInput[] | AnimeRatingUncheckedCreateWithoutAnimeEntryInput[]
    connectOrCreate?: AnimeRatingCreateOrConnectWithoutAnimeEntryInput | AnimeRatingCreateOrConnectWithoutAnimeEntryInput[]
    upsert?: AnimeRatingUpsertWithWhereUniqueWithoutAnimeEntryInput | AnimeRatingUpsertWithWhereUniqueWithoutAnimeEntryInput[]
    createMany?: AnimeRatingCreateManyAnimeEntryInputEnvelope
    set?: AnimeRatingWhereUniqueInput | AnimeRatingWhereUniqueInput[]
    disconnect?: AnimeRatingWhereUniqueInput | AnimeRatingWhereUniqueInput[]
    delete?: AnimeRatingWhereUniqueInput | AnimeRatingWhereUniqueInput[]
    connect?: AnimeRatingWhereUniqueInput | AnimeRatingWhereUniqueInput[]
    update?: AnimeRatingUpdateWithWhereUniqueWithoutAnimeEntryInput | AnimeRatingUpdateWithWhereUniqueWithoutAnimeEntryInput[]
    updateMany?: AnimeRatingUpdateManyWithWhereWithoutAnimeEntryInput | AnimeRatingUpdateManyWithWhereWithoutAnimeEntryInput[]
    deleteMany?: AnimeRatingScalarWhereInput | AnimeRatingScalarWhereInput[]
  }

  export type AnimeEntryGenreUncheckedUpdateManyWithoutAnimeEntryNestedInput = {
    create?: XOR<AnimeEntryGenreCreateWithoutAnimeEntryInput, AnimeEntryGenreUncheckedCreateWithoutAnimeEntryInput> | AnimeEntryGenreCreateWithoutAnimeEntryInput[] | AnimeEntryGenreUncheckedCreateWithoutAnimeEntryInput[]
    connectOrCreate?: AnimeEntryGenreCreateOrConnectWithoutAnimeEntryInput | AnimeEntryGenreCreateOrConnectWithoutAnimeEntryInput[]
    upsert?: AnimeEntryGenreUpsertWithWhereUniqueWithoutAnimeEntryInput | AnimeEntryGenreUpsertWithWhereUniqueWithoutAnimeEntryInput[]
    createMany?: AnimeEntryGenreCreateManyAnimeEntryInputEnvelope
    set?: AnimeEntryGenreWhereUniqueInput | AnimeEntryGenreWhereUniqueInput[]
    disconnect?: AnimeEntryGenreWhereUniqueInput | AnimeEntryGenreWhereUniqueInput[]
    delete?: AnimeEntryGenreWhereUniqueInput | AnimeEntryGenreWhereUniqueInput[]
    connect?: AnimeEntryGenreWhereUniqueInput | AnimeEntryGenreWhereUniqueInput[]
    update?: AnimeEntryGenreUpdateWithWhereUniqueWithoutAnimeEntryInput | AnimeEntryGenreUpdateWithWhereUniqueWithoutAnimeEntryInput[]
    updateMany?: AnimeEntryGenreUpdateManyWithWhereWithoutAnimeEntryInput | AnimeEntryGenreUpdateManyWithWhereWithoutAnimeEntryInput[]
    deleteMany?: AnimeEntryGenreScalarWhereInput | AnimeEntryGenreScalarWhereInput[]
  }

  export type AnimeEntryGenreCreateNestedManyWithoutGenreInput = {
    create?: XOR<AnimeEntryGenreCreateWithoutGenreInput, AnimeEntryGenreUncheckedCreateWithoutGenreInput> | AnimeEntryGenreCreateWithoutGenreInput[] | AnimeEntryGenreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: AnimeEntryGenreCreateOrConnectWithoutGenreInput | AnimeEntryGenreCreateOrConnectWithoutGenreInput[]
    createMany?: AnimeEntryGenreCreateManyGenreInputEnvelope
    connect?: AnimeEntryGenreWhereUniqueInput | AnimeEntryGenreWhereUniqueInput[]
  }

  export type AnimeEntryGenreUncheckedCreateNestedManyWithoutGenreInput = {
    create?: XOR<AnimeEntryGenreCreateWithoutGenreInput, AnimeEntryGenreUncheckedCreateWithoutGenreInput> | AnimeEntryGenreCreateWithoutGenreInput[] | AnimeEntryGenreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: AnimeEntryGenreCreateOrConnectWithoutGenreInput | AnimeEntryGenreCreateOrConnectWithoutGenreInput[]
    createMany?: AnimeEntryGenreCreateManyGenreInputEnvelope
    connect?: AnimeEntryGenreWhereUniqueInput | AnimeEntryGenreWhereUniqueInput[]
  }

  export type AnimeEntryGenreUpdateManyWithoutGenreNestedInput = {
    create?: XOR<AnimeEntryGenreCreateWithoutGenreInput, AnimeEntryGenreUncheckedCreateWithoutGenreInput> | AnimeEntryGenreCreateWithoutGenreInput[] | AnimeEntryGenreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: AnimeEntryGenreCreateOrConnectWithoutGenreInput | AnimeEntryGenreCreateOrConnectWithoutGenreInput[]
    upsert?: AnimeEntryGenreUpsertWithWhereUniqueWithoutGenreInput | AnimeEntryGenreUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: AnimeEntryGenreCreateManyGenreInputEnvelope
    set?: AnimeEntryGenreWhereUniqueInput | AnimeEntryGenreWhereUniqueInput[]
    disconnect?: AnimeEntryGenreWhereUniqueInput | AnimeEntryGenreWhereUniqueInput[]
    delete?: AnimeEntryGenreWhereUniqueInput | AnimeEntryGenreWhereUniqueInput[]
    connect?: AnimeEntryGenreWhereUniqueInput | AnimeEntryGenreWhereUniqueInput[]
    update?: AnimeEntryGenreUpdateWithWhereUniqueWithoutGenreInput | AnimeEntryGenreUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: AnimeEntryGenreUpdateManyWithWhereWithoutGenreInput | AnimeEntryGenreUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: AnimeEntryGenreScalarWhereInput | AnimeEntryGenreScalarWhereInput[]
  }

  export type AnimeEntryGenreUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: XOR<AnimeEntryGenreCreateWithoutGenreInput, AnimeEntryGenreUncheckedCreateWithoutGenreInput> | AnimeEntryGenreCreateWithoutGenreInput[] | AnimeEntryGenreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: AnimeEntryGenreCreateOrConnectWithoutGenreInput | AnimeEntryGenreCreateOrConnectWithoutGenreInput[]
    upsert?: AnimeEntryGenreUpsertWithWhereUniqueWithoutGenreInput | AnimeEntryGenreUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: AnimeEntryGenreCreateManyGenreInputEnvelope
    set?: AnimeEntryGenreWhereUniqueInput | AnimeEntryGenreWhereUniqueInput[]
    disconnect?: AnimeEntryGenreWhereUniqueInput | AnimeEntryGenreWhereUniqueInput[]
    delete?: AnimeEntryGenreWhereUniqueInput | AnimeEntryGenreWhereUniqueInput[]
    connect?: AnimeEntryGenreWhereUniqueInput | AnimeEntryGenreWhereUniqueInput[]
    update?: AnimeEntryGenreUpdateWithWhereUniqueWithoutGenreInput | AnimeEntryGenreUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: AnimeEntryGenreUpdateManyWithWhereWithoutGenreInput | AnimeEntryGenreUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: AnimeEntryGenreScalarWhereInput | AnimeEntryGenreScalarWhereInput[]
  }

  export type AnimeEntryCreateNestedManyWithoutTypeInput = {
    create?: XOR<AnimeEntryCreateWithoutTypeInput, AnimeEntryUncheckedCreateWithoutTypeInput> | AnimeEntryCreateWithoutTypeInput[] | AnimeEntryUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: AnimeEntryCreateOrConnectWithoutTypeInput | AnimeEntryCreateOrConnectWithoutTypeInput[]
    createMany?: AnimeEntryCreateManyTypeInputEnvelope
    connect?: AnimeEntryWhereUniqueInput | AnimeEntryWhereUniqueInput[]
  }

  export type AnimeEntryUncheckedCreateNestedManyWithoutTypeInput = {
    create?: XOR<AnimeEntryCreateWithoutTypeInput, AnimeEntryUncheckedCreateWithoutTypeInput> | AnimeEntryCreateWithoutTypeInput[] | AnimeEntryUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: AnimeEntryCreateOrConnectWithoutTypeInput | AnimeEntryCreateOrConnectWithoutTypeInput[]
    createMany?: AnimeEntryCreateManyTypeInputEnvelope
    connect?: AnimeEntryWhereUniqueInput | AnimeEntryWhereUniqueInput[]
  }

  export type AnimeEntryUpdateManyWithoutTypeNestedInput = {
    create?: XOR<AnimeEntryCreateWithoutTypeInput, AnimeEntryUncheckedCreateWithoutTypeInput> | AnimeEntryCreateWithoutTypeInput[] | AnimeEntryUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: AnimeEntryCreateOrConnectWithoutTypeInput | AnimeEntryCreateOrConnectWithoutTypeInput[]
    upsert?: AnimeEntryUpsertWithWhereUniqueWithoutTypeInput | AnimeEntryUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: AnimeEntryCreateManyTypeInputEnvelope
    set?: AnimeEntryWhereUniqueInput | AnimeEntryWhereUniqueInput[]
    disconnect?: AnimeEntryWhereUniqueInput | AnimeEntryWhereUniqueInput[]
    delete?: AnimeEntryWhereUniqueInput | AnimeEntryWhereUniqueInput[]
    connect?: AnimeEntryWhereUniqueInput | AnimeEntryWhereUniqueInput[]
    update?: AnimeEntryUpdateWithWhereUniqueWithoutTypeInput | AnimeEntryUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: AnimeEntryUpdateManyWithWhereWithoutTypeInput | AnimeEntryUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: AnimeEntryScalarWhereInput | AnimeEntryScalarWhereInput[]
  }

  export type AnimeEntryUncheckedUpdateManyWithoutTypeNestedInput = {
    create?: XOR<AnimeEntryCreateWithoutTypeInput, AnimeEntryUncheckedCreateWithoutTypeInput> | AnimeEntryCreateWithoutTypeInput[] | AnimeEntryUncheckedCreateWithoutTypeInput[]
    connectOrCreate?: AnimeEntryCreateOrConnectWithoutTypeInput | AnimeEntryCreateOrConnectWithoutTypeInput[]
    upsert?: AnimeEntryUpsertWithWhereUniqueWithoutTypeInput | AnimeEntryUpsertWithWhereUniqueWithoutTypeInput[]
    createMany?: AnimeEntryCreateManyTypeInputEnvelope
    set?: AnimeEntryWhereUniqueInput | AnimeEntryWhereUniqueInput[]
    disconnect?: AnimeEntryWhereUniqueInput | AnimeEntryWhereUniqueInput[]
    delete?: AnimeEntryWhereUniqueInput | AnimeEntryWhereUniqueInput[]
    connect?: AnimeEntryWhereUniqueInput | AnimeEntryWhereUniqueInput[]
    update?: AnimeEntryUpdateWithWhereUniqueWithoutTypeInput | AnimeEntryUpdateWithWhereUniqueWithoutTypeInput[]
    updateMany?: AnimeEntryUpdateManyWithWhereWithoutTypeInput | AnimeEntryUpdateManyWithWhereWithoutTypeInput[]
    deleteMany?: AnimeEntryScalarWhereInput | AnimeEntryScalarWhereInput[]
  }

  export type AnimeEntryCreateNestedOneWithoutGenreLinksInput = {
    create?: XOR<AnimeEntryCreateWithoutGenreLinksInput, AnimeEntryUncheckedCreateWithoutGenreLinksInput>
    connectOrCreate?: AnimeEntryCreateOrConnectWithoutGenreLinksInput
    connect?: AnimeEntryWhereUniqueInput
  }

  export type GenreCreateNestedOneWithoutAnimeLinksInput = {
    create?: XOR<GenreCreateWithoutAnimeLinksInput, GenreUncheckedCreateWithoutAnimeLinksInput>
    connectOrCreate?: GenreCreateOrConnectWithoutAnimeLinksInput
    connect?: GenreWhereUniqueInput
  }

  export type AnimeEntryUpdateOneRequiredWithoutGenreLinksNestedInput = {
    create?: XOR<AnimeEntryCreateWithoutGenreLinksInput, AnimeEntryUncheckedCreateWithoutGenreLinksInput>
    connectOrCreate?: AnimeEntryCreateOrConnectWithoutGenreLinksInput
    upsert?: AnimeEntryUpsertWithoutGenreLinksInput
    connect?: AnimeEntryWhereUniqueInput
    update?: XOR<XOR<AnimeEntryUpdateToOneWithWhereWithoutGenreLinksInput, AnimeEntryUpdateWithoutGenreLinksInput>, AnimeEntryUncheckedUpdateWithoutGenreLinksInput>
  }

  export type GenreUpdateOneRequiredWithoutAnimeLinksNestedInput = {
    create?: XOR<GenreCreateWithoutAnimeLinksInput, GenreUncheckedCreateWithoutAnimeLinksInput>
    connectOrCreate?: GenreCreateOrConnectWithoutAnimeLinksInput
    upsert?: GenreUpsertWithoutAnimeLinksInput
    connect?: GenreWhereUniqueInput
    update?: XOR<XOR<GenreUpdateToOneWithWhereWithoutAnimeLinksInput, GenreUpdateWithoutAnimeLinksInput>, GenreUncheckedUpdateWithoutAnimeLinksInput>
  }

  export type AnimeEntryCreateNestedOneWithoutRatingsInput = {
    create?: XOR<AnimeEntryCreateWithoutRatingsInput, AnimeEntryUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: AnimeEntryCreateOrConnectWithoutRatingsInput
    connect?: AnimeEntryWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAnimeRatingsInput = {
    create?: XOR<UserCreateWithoutAnimeRatingsInput, UserUncheckedCreateWithoutAnimeRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnimeRatingsInput
    connect?: UserWhereUniqueInput
  }

  export type AnimeEntryUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<AnimeEntryCreateWithoutRatingsInput, AnimeEntryUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: AnimeEntryCreateOrConnectWithoutRatingsInput
    upsert?: AnimeEntryUpsertWithoutRatingsInput
    connect?: AnimeEntryWhereUniqueInput
    update?: XOR<XOR<AnimeEntryUpdateToOneWithWhereWithoutRatingsInput, AnimeEntryUpdateWithoutRatingsInput>, AnimeEntryUncheckedUpdateWithoutRatingsInput>
  }

  export type UserUpdateOneRequiredWithoutAnimeRatingsNestedInput = {
    create?: XOR<UserCreateWithoutAnimeRatingsInput, UserUncheckedCreateWithoutAnimeRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnimeRatingsInput
    upsert?: UserUpsertWithoutAnimeRatingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnimeRatingsInput, UserUpdateWithoutAnimeRatingsInput>, UserUncheckedUpdateWithoutAnimeRatingsInput>
  }

  export type AnimeEntryCreateNestedOneWithoutEpisodesInput = {
    create?: XOR<AnimeEntryCreateWithoutEpisodesInput, AnimeEntryUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: AnimeEntryCreateOrConnectWithoutEpisodesInput
    connect?: AnimeEntryWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AnimeEntryUpdateOneRequiredWithoutEpisodesNestedInput = {
    create?: XOR<AnimeEntryCreateWithoutEpisodesInput, AnimeEntryUncheckedCreateWithoutEpisodesInput>
    connectOrCreate?: AnimeEntryCreateOrConnectWithoutEpisodesInput
    upsert?: AnimeEntryUpsertWithoutEpisodesInput
    connect?: AnimeEntryWhereUniqueInput
    update?: XOR<XOR<AnimeEntryUpdateToOneWithWhereWithoutEpisodesInput, AnimeEntryUpdateWithoutEpisodesInput>, AnimeEntryUncheckedUpdateWithoutEpisodesInput>
  }

  export type UserCreateNestedOneWithoutAnimeAuthorsInput = {
    create?: XOR<UserCreateWithoutAnimeAuthorsInput, UserUncheckedCreateWithoutAnimeAuthorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnimeAuthorsInput
    connect?: UserWhereUniqueInput
  }

  export type AnimeEntryAuthorCreateNestedManyWithoutAuthorInput = {
    create?: XOR<AnimeEntryAuthorCreateWithoutAuthorInput, AnimeEntryAuthorUncheckedCreateWithoutAuthorInput> | AnimeEntryAuthorCreateWithoutAuthorInput[] | AnimeEntryAuthorUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AnimeEntryAuthorCreateOrConnectWithoutAuthorInput | AnimeEntryAuthorCreateOrConnectWithoutAuthorInput[]
    createMany?: AnimeEntryAuthorCreateManyAuthorInputEnvelope
    connect?: AnimeEntryAuthorWhereUniqueInput | AnimeEntryAuthorWhereUniqueInput[]
  }

  export type AnimeEntryAuthorUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<AnimeEntryAuthorCreateWithoutAuthorInput, AnimeEntryAuthorUncheckedCreateWithoutAuthorInput> | AnimeEntryAuthorCreateWithoutAuthorInput[] | AnimeEntryAuthorUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AnimeEntryAuthorCreateOrConnectWithoutAuthorInput | AnimeEntryAuthorCreateOrConnectWithoutAuthorInput[]
    createMany?: AnimeEntryAuthorCreateManyAuthorInputEnvelope
    connect?: AnimeEntryAuthorWhereUniqueInput | AnimeEntryAuthorWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutAnimeAuthorsNestedInput = {
    create?: XOR<UserCreateWithoutAnimeAuthorsInput, UserUncheckedCreateWithoutAnimeAuthorsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnimeAuthorsInput
    upsert?: UserUpsertWithoutAnimeAuthorsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnimeAuthorsInput, UserUpdateWithoutAnimeAuthorsInput>, UserUncheckedUpdateWithoutAnimeAuthorsInput>
  }

  export type AnimeEntryAuthorUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<AnimeEntryAuthorCreateWithoutAuthorInput, AnimeEntryAuthorUncheckedCreateWithoutAuthorInput> | AnimeEntryAuthorCreateWithoutAuthorInput[] | AnimeEntryAuthorUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AnimeEntryAuthorCreateOrConnectWithoutAuthorInput | AnimeEntryAuthorCreateOrConnectWithoutAuthorInput[]
    upsert?: AnimeEntryAuthorUpsertWithWhereUniqueWithoutAuthorInput | AnimeEntryAuthorUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: AnimeEntryAuthorCreateManyAuthorInputEnvelope
    set?: AnimeEntryAuthorWhereUniqueInput | AnimeEntryAuthorWhereUniqueInput[]
    disconnect?: AnimeEntryAuthorWhereUniqueInput | AnimeEntryAuthorWhereUniqueInput[]
    delete?: AnimeEntryAuthorWhereUniqueInput | AnimeEntryAuthorWhereUniqueInput[]
    connect?: AnimeEntryAuthorWhereUniqueInput | AnimeEntryAuthorWhereUniqueInput[]
    update?: AnimeEntryAuthorUpdateWithWhereUniqueWithoutAuthorInput | AnimeEntryAuthorUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: AnimeEntryAuthorUpdateManyWithWhereWithoutAuthorInput | AnimeEntryAuthorUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: AnimeEntryAuthorScalarWhereInput | AnimeEntryAuthorScalarWhereInput[]
  }

  export type AnimeEntryAuthorUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<AnimeEntryAuthorCreateWithoutAuthorInput, AnimeEntryAuthorUncheckedCreateWithoutAuthorInput> | AnimeEntryAuthorCreateWithoutAuthorInput[] | AnimeEntryAuthorUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: AnimeEntryAuthorCreateOrConnectWithoutAuthorInput | AnimeEntryAuthorCreateOrConnectWithoutAuthorInput[]
    upsert?: AnimeEntryAuthorUpsertWithWhereUniqueWithoutAuthorInput | AnimeEntryAuthorUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: AnimeEntryAuthorCreateManyAuthorInputEnvelope
    set?: AnimeEntryAuthorWhereUniqueInput | AnimeEntryAuthorWhereUniqueInput[]
    disconnect?: AnimeEntryAuthorWhereUniqueInput | AnimeEntryAuthorWhereUniqueInput[]
    delete?: AnimeEntryAuthorWhereUniqueInput | AnimeEntryAuthorWhereUniqueInput[]
    connect?: AnimeEntryAuthorWhereUniqueInput | AnimeEntryAuthorWhereUniqueInput[]
    update?: AnimeEntryAuthorUpdateWithWhereUniqueWithoutAuthorInput | AnimeEntryAuthorUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: AnimeEntryAuthorUpdateManyWithWhereWithoutAuthorInput | AnimeEntryAuthorUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: AnimeEntryAuthorScalarWhereInput | AnimeEntryAuthorScalarWhereInput[]
  }

  export type AnimeEntryCreateNestedOneWithoutAuthorLinksInput = {
    create?: XOR<AnimeEntryCreateWithoutAuthorLinksInput, AnimeEntryUncheckedCreateWithoutAuthorLinksInput>
    connectOrCreate?: AnimeEntryCreateOrConnectWithoutAuthorLinksInput
    connect?: AnimeEntryWhereUniqueInput
  }

  export type AnimeAuthorCreateNestedOneWithoutAnimeLinksInput = {
    create?: XOR<AnimeAuthorCreateWithoutAnimeLinksInput, AnimeAuthorUncheckedCreateWithoutAnimeLinksInput>
    connectOrCreate?: AnimeAuthorCreateOrConnectWithoutAnimeLinksInput
    connect?: AnimeAuthorWhereUniqueInput
  }

  export type AnimeEntryUpdateOneRequiredWithoutAuthorLinksNestedInput = {
    create?: XOR<AnimeEntryCreateWithoutAuthorLinksInput, AnimeEntryUncheckedCreateWithoutAuthorLinksInput>
    connectOrCreate?: AnimeEntryCreateOrConnectWithoutAuthorLinksInput
    upsert?: AnimeEntryUpsertWithoutAuthorLinksInput
    connect?: AnimeEntryWhereUniqueInput
    update?: XOR<XOR<AnimeEntryUpdateToOneWithWhereWithoutAuthorLinksInput, AnimeEntryUpdateWithoutAuthorLinksInput>, AnimeEntryUncheckedUpdateWithoutAuthorLinksInput>
  }

  export type AnimeAuthorUpdateOneRequiredWithoutAnimeLinksNestedInput = {
    create?: XOR<AnimeAuthorCreateWithoutAnimeLinksInput, AnimeAuthorUncheckedCreateWithoutAnimeLinksInput>
    connectOrCreate?: AnimeAuthorCreateOrConnectWithoutAnimeLinksInput
    upsert?: AnimeAuthorUpsertWithoutAnimeLinksInput
    connect?: AnimeAuthorWhereUniqueInput
    update?: XOR<XOR<AnimeAuthorUpdateToOneWithWhereWithoutAnimeLinksInput, AnimeAuthorUpdateWithoutAnimeLinksInput>, AnimeAuthorUncheckedUpdateWithoutAnimeLinksInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumWatchStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WatchStatus | EnumWatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WatchStatus[] | ListEnumWatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WatchStatus[] | ListEnumWatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWatchStatusFilter<$PrismaModel> | $Enums.WatchStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumAnimeAiredStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimeAiredStatus | EnumAnimeAiredStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnimeAiredStatus[] | ListEnumAnimeAiredStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimeAiredStatus[] | ListEnumAnimeAiredStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimeAiredStatusFilter<$PrismaModel> | $Enums.AnimeAiredStatus
  }

  export type NestedEnumWatchStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WatchStatus | EnumWatchStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WatchStatus[] | ListEnumWatchStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WatchStatus[] | ListEnumWatchStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWatchStatusWithAggregatesFilter<$PrismaModel> | $Enums.WatchStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWatchStatusFilter<$PrismaModel>
    _max?: NestedEnumWatchStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumAnimeAiredStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnimeAiredStatus | EnumAnimeAiredStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnimeAiredStatus[] | ListEnumAnimeAiredStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnimeAiredStatus[] | ListEnumAnimeAiredStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnimeAiredStatusWithAggregatesFilter<$PrismaModel> | $Enums.AnimeAiredStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnimeAiredStatusFilter<$PrismaModel>
    _max?: NestedEnumAnimeAiredStatusFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type AnimeEntryCreateWithoutUserInput = {
    id?: string
    slug: string
    title: string
    description: string
    coverImageUrl: string
    status?: $Enums.WatchStatus
    airedFrom?: Date | string | null
    airedTo?: Date | string | null
    airedStatus?: $Enums.AnimeAiredStatus
    viewCount?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    episodes?: AnimeEpisodeCreateNestedManyWithoutAnimeEntryInput
    authorLinks?: AnimeEntryAuthorCreateNestedManyWithoutAnimeEntryInput
    ratings?: AnimeRatingCreateNestedManyWithoutAnimeEntryInput
    genreLinks?: AnimeEntryGenreCreateNestedManyWithoutAnimeEntryInput
    type?: AnimeTypeCreateNestedOneWithoutAnimeEntriesInput
  }

  export type AnimeEntryUncheckedCreateWithoutUserInput = {
    id?: string
    slug: string
    title: string
    description: string
    coverImageUrl: string
    status?: $Enums.WatchStatus
    airedFrom?: Date | string | null
    airedTo?: Date | string | null
    airedStatus?: $Enums.AnimeAiredStatus
    viewCount?: number
    notes?: string | null
    typeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    episodes?: AnimeEpisodeUncheckedCreateNestedManyWithoutAnimeEntryInput
    authorLinks?: AnimeEntryAuthorUncheckedCreateNestedManyWithoutAnimeEntryInput
    ratings?: AnimeRatingUncheckedCreateNestedManyWithoutAnimeEntryInput
    genreLinks?: AnimeEntryGenreUncheckedCreateNestedManyWithoutAnimeEntryInput
  }

  export type AnimeEntryCreateOrConnectWithoutUserInput = {
    where: AnimeEntryWhereUniqueInput
    create: XOR<AnimeEntryCreateWithoutUserInput, AnimeEntryUncheckedCreateWithoutUserInput>
  }

  export type AnimeEntryCreateManyUserInputEnvelope = {
    data: AnimeEntryCreateManyUserInput | AnimeEntryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AnimeAuthorCreateWithoutUserInput = {
    id?: string
    name: string
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    animeLinks?: AnimeEntryAuthorCreateNestedManyWithoutAuthorInput
  }

  export type AnimeAuthorUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    animeLinks?: AnimeEntryAuthorUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type AnimeAuthorCreateOrConnectWithoutUserInput = {
    where: AnimeAuthorWhereUniqueInput
    create: XOR<AnimeAuthorCreateWithoutUserInput, AnimeAuthorUncheckedCreateWithoutUserInput>
  }

  export type AnimeAuthorCreateManyUserInputEnvelope = {
    data: AnimeAuthorCreateManyUserInput | AnimeAuthorCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AnimeRatingCreateWithoutUserInput = {
    id?: string
    value: number
    createdAt?: Date | string
    updatedAt?: Date | string
    animeEntry: AnimeEntryCreateNestedOneWithoutRatingsInput
  }

  export type AnimeRatingUncheckedCreateWithoutUserInput = {
    id?: string
    animeEntryId: string
    value: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnimeRatingCreateOrConnectWithoutUserInput = {
    where: AnimeRatingWhereUniqueInput
    create: XOR<AnimeRatingCreateWithoutUserInput, AnimeRatingUncheckedCreateWithoutUserInput>
  }

  export type AnimeRatingCreateManyUserInputEnvelope = {
    data: AnimeRatingCreateManyUserInput | AnimeRatingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleCreateWithoutUserInput = {
    createdAt?: Date | string
    role: RoleCreateNestedOneWithoutUserLinksInput
  }

  export type UserRoleUncheckedCreateWithoutUserInput = {
    roleId: string
    createdAt?: Date | string
  }

  export type UserRoleCreateOrConnectWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleCreateManyUserInputEnvelope = {
    data: UserRoleCreateManyUserInput | UserRoleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AnimeEntryUpsertWithWhereUniqueWithoutUserInput = {
    where: AnimeEntryWhereUniqueInput
    update: XOR<AnimeEntryUpdateWithoutUserInput, AnimeEntryUncheckedUpdateWithoutUserInput>
    create: XOR<AnimeEntryCreateWithoutUserInput, AnimeEntryUncheckedCreateWithoutUserInput>
  }

  export type AnimeEntryUpdateWithWhereUniqueWithoutUserInput = {
    where: AnimeEntryWhereUniqueInput
    data: XOR<AnimeEntryUpdateWithoutUserInput, AnimeEntryUncheckedUpdateWithoutUserInput>
  }

  export type AnimeEntryUpdateManyWithWhereWithoutUserInput = {
    where: AnimeEntryScalarWhereInput
    data: XOR<AnimeEntryUpdateManyMutationInput, AnimeEntryUncheckedUpdateManyWithoutUserInput>
  }

  export type AnimeEntryScalarWhereInput = {
    AND?: AnimeEntryScalarWhereInput | AnimeEntryScalarWhereInput[]
    OR?: AnimeEntryScalarWhereInput[]
    NOT?: AnimeEntryScalarWhereInput | AnimeEntryScalarWhereInput[]
    id?: StringFilter<"AnimeEntry"> | string
    slug?: StringFilter<"AnimeEntry"> | string
    title?: StringFilter<"AnimeEntry"> | string
    description?: StringFilter<"AnimeEntry"> | string
    coverImageUrl?: StringFilter<"AnimeEntry"> | string
    status?: EnumWatchStatusFilter<"AnimeEntry"> | $Enums.WatchStatus
    airedFrom?: DateTimeNullableFilter<"AnimeEntry"> | Date | string | null
    airedTo?: DateTimeNullableFilter<"AnimeEntry"> | Date | string | null
    airedStatus?: EnumAnimeAiredStatusFilter<"AnimeEntry"> | $Enums.AnimeAiredStatus
    viewCount?: IntFilter<"AnimeEntry"> | number
    notes?: StringNullableFilter<"AnimeEntry"> | string | null
    userId?: StringFilter<"AnimeEntry"> | string
    typeId?: StringNullableFilter<"AnimeEntry"> | string | null
    createdAt?: DateTimeFilter<"AnimeEntry"> | Date | string
    updatedAt?: DateTimeFilter<"AnimeEntry"> | Date | string
  }

  export type AnimeAuthorUpsertWithWhereUniqueWithoutUserInput = {
    where: AnimeAuthorWhereUniqueInput
    update: XOR<AnimeAuthorUpdateWithoutUserInput, AnimeAuthorUncheckedUpdateWithoutUserInput>
    create: XOR<AnimeAuthorCreateWithoutUserInput, AnimeAuthorUncheckedCreateWithoutUserInput>
  }

  export type AnimeAuthorUpdateWithWhereUniqueWithoutUserInput = {
    where: AnimeAuthorWhereUniqueInput
    data: XOR<AnimeAuthorUpdateWithoutUserInput, AnimeAuthorUncheckedUpdateWithoutUserInput>
  }

  export type AnimeAuthorUpdateManyWithWhereWithoutUserInput = {
    where: AnimeAuthorScalarWhereInput
    data: XOR<AnimeAuthorUpdateManyMutationInput, AnimeAuthorUncheckedUpdateManyWithoutUserInput>
  }

  export type AnimeAuthorScalarWhereInput = {
    AND?: AnimeAuthorScalarWhereInput | AnimeAuthorScalarWhereInput[]
    OR?: AnimeAuthorScalarWhereInput[]
    NOT?: AnimeAuthorScalarWhereInput | AnimeAuthorScalarWhereInput[]
    id?: StringFilter<"AnimeAuthor"> | string
    name?: StringFilter<"AnimeAuthor"> | string
    bio?: StringNullableFilter<"AnimeAuthor"> | string | null
    userId?: StringFilter<"AnimeAuthor"> | string
    createdAt?: DateTimeFilter<"AnimeAuthor"> | Date | string
    updatedAt?: DateTimeFilter<"AnimeAuthor"> | Date | string
  }

  export type AnimeRatingUpsertWithWhereUniqueWithoutUserInput = {
    where: AnimeRatingWhereUniqueInput
    update: XOR<AnimeRatingUpdateWithoutUserInput, AnimeRatingUncheckedUpdateWithoutUserInput>
    create: XOR<AnimeRatingCreateWithoutUserInput, AnimeRatingUncheckedCreateWithoutUserInput>
  }

  export type AnimeRatingUpdateWithWhereUniqueWithoutUserInput = {
    where: AnimeRatingWhereUniqueInput
    data: XOR<AnimeRatingUpdateWithoutUserInput, AnimeRatingUncheckedUpdateWithoutUserInput>
  }

  export type AnimeRatingUpdateManyWithWhereWithoutUserInput = {
    where: AnimeRatingScalarWhereInput
    data: XOR<AnimeRatingUpdateManyMutationInput, AnimeRatingUncheckedUpdateManyWithoutUserInput>
  }

  export type AnimeRatingScalarWhereInput = {
    AND?: AnimeRatingScalarWhereInput | AnimeRatingScalarWhereInput[]
    OR?: AnimeRatingScalarWhereInput[]
    NOT?: AnimeRatingScalarWhereInput | AnimeRatingScalarWhereInput[]
    id?: StringFilter<"AnimeRating"> | string
    animeEntryId?: StringFilter<"AnimeRating"> | string
    userId?: StringFilter<"AnimeRating"> | string
    value?: IntFilter<"AnimeRating"> | number
    createdAt?: DateTimeFilter<"AnimeRating"> | Date | string
    updatedAt?: DateTimeFilter<"AnimeRating"> | Date | string
  }

  export type UserRoleUpsertWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutUserInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutUserInput>
  }

  export type UserRoleScalarWhereInput = {
    AND?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    OR?: UserRoleScalarWhereInput[]
    NOT?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    userId?: StringFilter<"UserRole"> | string
    roleId?: StringFilter<"UserRole"> | string
    createdAt?: DateTimeFilter<"UserRole"> | Date | string
  }

  export type UserRoleCreateWithoutRoleInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutRoleLinksInput
  }

  export type UserRoleUncheckedCreateWithoutRoleInput = {
    userId: string
    createdAt?: Date | string
  }

  export type UserRoleCreateOrConnectWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleCreateManyRoleInputEnvelope = {
    data: UserRoleCreateManyRoleInput | UserRoleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type RolePermissionCreateWithoutRoleInput = {
    createdAt?: Date | string
    permission: PermissionCreateNestedOneWithoutRolesInput
  }

  export type RolePermissionUncheckedCreateWithoutRoleInput = {
    permissionId: string
    createdAt?: Date | string
  }

  export type RolePermissionCreateOrConnectWithoutRoleInput = {
    where: RolePermissionWhereUniqueInput
    create: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput>
  }

  export type RolePermissionCreateManyRoleInputEnvelope = {
    data: RolePermissionCreateManyRoleInput | RolePermissionCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutRoleInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type RolePermissionUpsertWithWhereUniqueWithoutRoleInput = {
    where: RolePermissionWhereUniqueInput
    update: XOR<RolePermissionUpdateWithoutRoleInput, RolePermissionUncheckedUpdateWithoutRoleInput>
    create: XOR<RolePermissionCreateWithoutRoleInput, RolePermissionUncheckedCreateWithoutRoleInput>
  }

  export type RolePermissionUpdateWithWhereUniqueWithoutRoleInput = {
    where: RolePermissionWhereUniqueInput
    data: XOR<RolePermissionUpdateWithoutRoleInput, RolePermissionUncheckedUpdateWithoutRoleInput>
  }

  export type RolePermissionUpdateManyWithWhereWithoutRoleInput = {
    where: RolePermissionScalarWhereInput
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyWithoutRoleInput>
  }

  export type RolePermissionScalarWhereInput = {
    AND?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
    OR?: RolePermissionScalarWhereInput[]
    NOT?: RolePermissionScalarWhereInput | RolePermissionScalarWhereInput[]
    roleId?: StringFilter<"RolePermission"> | string
    permissionId?: StringFilter<"RolePermission"> | string
    createdAt?: DateTimeFilter<"RolePermission"> | Date | string
  }

  export type RolePermissionCreateWithoutPermissionInput = {
    createdAt?: Date | string
    role: RoleCreateNestedOneWithoutPermissionsInput
  }

  export type RolePermissionUncheckedCreateWithoutPermissionInput = {
    roleId: string
    createdAt?: Date | string
  }

  export type RolePermissionCreateOrConnectWithoutPermissionInput = {
    where: RolePermissionWhereUniqueInput
    create: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput>
  }

  export type RolePermissionCreateManyPermissionInputEnvelope = {
    data: RolePermissionCreateManyPermissionInput | RolePermissionCreateManyPermissionInput[]
    skipDuplicates?: boolean
  }

  export type RolePermissionUpsertWithWhereUniqueWithoutPermissionInput = {
    where: RolePermissionWhereUniqueInput
    update: XOR<RolePermissionUpdateWithoutPermissionInput, RolePermissionUncheckedUpdateWithoutPermissionInput>
    create: XOR<RolePermissionCreateWithoutPermissionInput, RolePermissionUncheckedCreateWithoutPermissionInput>
  }

  export type RolePermissionUpdateWithWhereUniqueWithoutPermissionInput = {
    where: RolePermissionWhereUniqueInput
    data: XOR<RolePermissionUpdateWithoutPermissionInput, RolePermissionUncheckedUpdateWithoutPermissionInput>
  }

  export type RolePermissionUpdateManyWithWhereWithoutPermissionInput = {
    where: RolePermissionScalarWhereInput
    data: XOR<RolePermissionUpdateManyMutationInput, RolePermissionUncheckedUpdateManyWithoutPermissionInput>
  }

  export type UserCreateWithoutRoleLinksInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    username?: string | null
    bio?: string | null
    avatarUrl?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    animeEntries?: AnimeEntryCreateNestedManyWithoutUserInput
    animeAuthors?: AnimeAuthorCreateNestedManyWithoutUserInput
    animeRatings?: AnimeRatingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRoleLinksInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    username?: string | null
    bio?: string | null
    avatarUrl?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    animeEntries?: AnimeEntryUncheckedCreateNestedManyWithoutUserInput
    animeAuthors?: AnimeAuthorUncheckedCreateNestedManyWithoutUserInput
    animeRatings?: AnimeRatingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRoleLinksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleLinksInput, UserUncheckedCreateWithoutRoleLinksInput>
  }

  export type RoleCreateWithoutUserLinksInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions?: RolePermissionCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutUserLinksInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    permissions?: RolePermissionUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutUserLinksInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUserLinksInput, RoleUncheckedCreateWithoutUserLinksInput>
  }

  export type UserUpsertWithoutRoleLinksInput = {
    update: XOR<UserUpdateWithoutRoleLinksInput, UserUncheckedUpdateWithoutRoleLinksInput>
    create: XOR<UserCreateWithoutRoleLinksInput, UserUncheckedCreateWithoutRoleLinksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRoleLinksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRoleLinksInput, UserUncheckedUpdateWithoutRoleLinksInput>
  }

  export type UserUpdateWithoutRoleLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    animeEntries?: AnimeEntryUpdateManyWithoutUserNestedInput
    animeAuthors?: AnimeAuthorUpdateManyWithoutUserNestedInput
    animeRatings?: AnimeRatingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    animeEntries?: AnimeEntryUncheckedUpdateManyWithoutUserNestedInput
    animeAuthors?: AnimeAuthorUncheckedUpdateManyWithoutUserNestedInput
    animeRatings?: AnimeRatingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type RoleUpsertWithoutUserLinksInput = {
    update: XOR<RoleUpdateWithoutUserLinksInput, RoleUncheckedUpdateWithoutUserLinksInput>
    create: XOR<RoleCreateWithoutUserLinksInput, RoleUncheckedCreateWithoutUserLinksInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUserLinksInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUserLinksInput, RoleUncheckedUpdateWithoutUserLinksInput>
  }

  export type RoleUpdateWithoutUserLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: RolePermissionUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutUserLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permissions?: RolePermissionUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateWithoutPermissionsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userLinks?: UserRoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutPermissionsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userLinks?: UserRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutPermissionsInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput>
  }

  export type PermissionCreateWithoutRolesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionUncheckedCreateWithoutRolesInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PermissionCreateOrConnectWithoutRolesInput = {
    where: PermissionWhereUniqueInput
    create: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput>
  }

  export type RoleUpsertWithoutPermissionsInput = {
    update: XOR<RoleUpdateWithoutPermissionsInput, RoleUncheckedUpdateWithoutPermissionsInput>
    create: XOR<RoleCreateWithoutPermissionsInput, RoleUncheckedCreateWithoutPermissionsInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutPermissionsInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutPermissionsInput, RoleUncheckedUpdateWithoutPermissionsInput>
  }

  export type RoleUpdateWithoutPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userLinks?: UserRoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userLinks?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type PermissionUpsertWithoutRolesInput = {
    update: XOR<PermissionUpdateWithoutRolesInput, PermissionUncheckedUpdateWithoutRolesInput>
    create: XOR<PermissionCreateWithoutRolesInput, PermissionUncheckedCreateWithoutRolesInput>
    where?: PermissionWhereInput
  }

  export type PermissionUpdateToOneWithWhereWithoutRolesInput = {
    where?: PermissionWhereInput
    data: XOR<PermissionUpdateWithoutRolesInput, PermissionUncheckedUpdateWithoutRolesInput>
  }

  export type PermissionUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionUncheckedUpdateWithoutRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutAnimeEntriesInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    username?: string | null
    bio?: string | null
    avatarUrl?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    animeAuthors?: AnimeAuthorCreateNestedManyWithoutUserInput
    animeRatings?: AnimeRatingCreateNestedManyWithoutUserInput
    roleLinks?: UserRoleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAnimeEntriesInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    username?: string | null
    bio?: string | null
    avatarUrl?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    animeAuthors?: AnimeAuthorUncheckedCreateNestedManyWithoutUserInput
    animeRatings?: AnimeRatingUncheckedCreateNestedManyWithoutUserInput
    roleLinks?: UserRoleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAnimeEntriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnimeEntriesInput, UserUncheckedCreateWithoutAnimeEntriesInput>
  }

  export type AnimeEpisodeCreateWithoutAnimeEntryInput = {
    id?: string
    episodeNumber: number
    title?: string | null
    description?: string | null
    durationMinutes?: number | null
    airDate?: Date | string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnimeEpisodeUncheckedCreateWithoutAnimeEntryInput = {
    id?: string
    episodeNumber: number
    title?: string | null
    description?: string | null
    durationMinutes?: number | null
    airDate?: Date | string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnimeEpisodeCreateOrConnectWithoutAnimeEntryInput = {
    where: AnimeEpisodeWhereUniqueInput
    create: XOR<AnimeEpisodeCreateWithoutAnimeEntryInput, AnimeEpisodeUncheckedCreateWithoutAnimeEntryInput>
  }

  export type AnimeEpisodeCreateManyAnimeEntryInputEnvelope = {
    data: AnimeEpisodeCreateManyAnimeEntryInput | AnimeEpisodeCreateManyAnimeEntryInput[]
    skipDuplicates?: boolean
  }

  export type AnimeEntryAuthorCreateWithoutAnimeEntryInput = {
    role?: string | null
    createdAt?: Date | string
    author: AnimeAuthorCreateNestedOneWithoutAnimeLinksInput
  }

  export type AnimeEntryAuthorUncheckedCreateWithoutAnimeEntryInput = {
    authorId: string
    role?: string | null
    createdAt?: Date | string
  }

  export type AnimeEntryAuthorCreateOrConnectWithoutAnimeEntryInput = {
    where: AnimeEntryAuthorWhereUniqueInput
    create: XOR<AnimeEntryAuthorCreateWithoutAnimeEntryInput, AnimeEntryAuthorUncheckedCreateWithoutAnimeEntryInput>
  }

  export type AnimeEntryAuthorCreateManyAnimeEntryInputEnvelope = {
    data: AnimeEntryAuthorCreateManyAnimeEntryInput | AnimeEntryAuthorCreateManyAnimeEntryInput[]
    skipDuplicates?: boolean
  }

  export type AnimeRatingCreateWithoutAnimeEntryInput = {
    id?: string
    value: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAnimeRatingsInput
  }

  export type AnimeRatingUncheckedCreateWithoutAnimeEntryInput = {
    id?: string
    userId: string
    value: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnimeRatingCreateOrConnectWithoutAnimeEntryInput = {
    where: AnimeRatingWhereUniqueInput
    create: XOR<AnimeRatingCreateWithoutAnimeEntryInput, AnimeRatingUncheckedCreateWithoutAnimeEntryInput>
  }

  export type AnimeRatingCreateManyAnimeEntryInputEnvelope = {
    data: AnimeRatingCreateManyAnimeEntryInput | AnimeRatingCreateManyAnimeEntryInput[]
    skipDuplicates?: boolean
  }

  export type AnimeEntryGenreCreateWithoutAnimeEntryInput = {
    createdAt?: Date | string
    genre: GenreCreateNestedOneWithoutAnimeLinksInput
  }

  export type AnimeEntryGenreUncheckedCreateWithoutAnimeEntryInput = {
    genreId: string
    createdAt?: Date | string
  }

  export type AnimeEntryGenreCreateOrConnectWithoutAnimeEntryInput = {
    where: AnimeEntryGenreWhereUniqueInput
    create: XOR<AnimeEntryGenreCreateWithoutAnimeEntryInput, AnimeEntryGenreUncheckedCreateWithoutAnimeEntryInput>
  }

  export type AnimeEntryGenreCreateManyAnimeEntryInputEnvelope = {
    data: AnimeEntryGenreCreateManyAnimeEntryInput | AnimeEntryGenreCreateManyAnimeEntryInput[]
    skipDuplicates?: boolean
  }

  export type AnimeTypeCreateWithoutAnimeEntriesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnimeTypeUncheckedCreateWithoutAnimeEntriesInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnimeTypeCreateOrConnectWithoutAnimeEntriesInput = {
    where: AnimeTypeWhereUniqueInput
    create: XOR<AnimeTypeCreateWithoutAnimeEntriesInput, AnimeTypeUncheckedCreateWithoutAnimeEntriesInput>
  }

  export type UserUpsertWithoutAnimeEntriesInput = {
    update: XOR<UserUpdateWithoutAnimeEntriesInput, UserUncheckedUpdateWithoutAnimeEntriesInput>
    create: XOR<UserCreateWithoutAnimeEntriesInput, UserUncheckedCreateWithoutAnimeEntriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnimeEntriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnimeEntriesInput, UserUncheckedUpdateWithoutAnimeEntriesInput>
  }

  export type UserUpdateWithoutAnimeEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    animeAuthors?: AnimeAuthorUpdateManyWithoutUserNestedInput
    animeRatings?: AnimeRatingUpdateManyWithoutUserNestedInput
    roleLinks?: UserRoleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAnimeEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    animeAuthors?: AnimeAuthorUncheckedUpdateManyWithoutUserNestedInput
    animeRatings?: AnimeRatingUncheckedUpdateManyWithoutUserNestedInput
    roleLinks?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AnimeEpisodeUpsertWithWhereUniqueWithoutAnimeEntryInput = {
    where: AnimeEpisodeWhereUniqueInput
    update: XOR<AnimeEpisodeUpdateWithoutAnimeEntryInput, AnimeEpisodeUncheckedUpdateWithoutAnimeEntryInput>
    create: XOR<AnimeEpisodeCreateWithoutAnimeEntryInput, AnimeEpisodeUncheckedCreateWithoutAnimeEntryInput>
  }

  export type AnimeEpisodeUpdateWithWhereUniqueWithoutAnimeEntryInput = {
    where: AnimeEpisodeWhereUniqueInput
    data: XOR<AnimeEpisodeUpdateWithoutAnimeEntryInput, AnimeEpisodeUncheckedUpdateWithoutAnimeEntryInput>
  }

  export type AnimeEpisodeUpdateManyWithWhereWithoutAnimeEntryInput = {
    where: AnimeEpisodeScalarWhereInput
    data: XOR<AnimeEpisodeUpdateManyMutationInput, AnimeEpisodeUncheckedUpdateManyWithoutAnimeEntryInput>
  }

  export type AnimeEpisodeScalarWhereInput = {
    AND?: AnimeEpisodeScalarWhereInput | AnimeEpisodeScalarWhereInput[]
    OR?: AnimeEpisodeScalarWhereInput[]
    NOT?: AnimeEpisodeScalarWhereInput | AnimeEpisodeScalarWhereInput[]
    id?: StringFilter<"AnimeEpisode"> | string
    animeEntryId?: StringFilter<"AnimeEpisode"> | string
    episodeNumber?: IntFilter<"AnimeEpisode"> | number
    title?: StringNullableFilter<"AnimeEpisode"> | string | null
    description?: StringNullableFilter<"AnimeEpisode"> | string | null
    durationMinutes?: IntNullableFilter<"AnimeEpisode"> | number | null
    airDate?: DateTimeNullableFilter<"AnimeEpisode"> | Date | string | null
    videoUrl?: StringNullableFilter<"AnimeEpisode"> | string | null
    createdAt?: DateTimeFilter<"AnimeEpisode"> | Date | string
    updatedAt?: DateTimeFilter<"AnimeEpisode"> | Date | string
  }

  export type AnimeEntryAuthorUpsertWithWhereUniqueWithoutAnimeEntryInput = {
    where: AnimeEntryAuthorWhereUniqueInput
    update: XOR<AnimeEntryAuthorUpdateWithoutAnimeEntryInput, AnimeEntryAuthorUncheckedUpdateWithoutAnimeEntryInput>
    create: XOR<AnimeEntryAuthorCreateWithoutAnimeEntryInput, AnimeEntryAuthorUncheckedCreateWithoutAnimeEntryInput>
  }

  export type AnimeEntryAuthorUpdateWithWhereUniqueWithoutAnimeEntryInput = {
    where: AnimeEntryAuthorWhereUniqueInput
    data: XOR<AnimeEntryAuthorUpdateWithoutAnimeEntryInput, AnimeEntryAuthorUncheckedUpdateWithoutAnimeEntryInput>
  }

  export type AnimeEntryAuthorUpdateManyWithWhereWithoutAnimeEntryInput = {
    where: AnimeEntryAuthorScalarWhereInput
    data: XOR<AnimeEntryAuthorUpdateManyMutationInput, AnimeEntryAuthorUncheckedUpdateManyWithoutAnimeEntryInput>
  }

  export type AnimeEntryAuthorScalarWhereInput = {
    AND?: AnimeEntryAuthorScalarWhereInput | AnimeEntryAuthorScalarWhereInput[]
    OR?: AnimeEntryAuthorScalarWhereInput[]
    NOT?: AnimeEntryAuthorScalarWhereInput | AnimeEntryAuthorScalarWhereInput[]
    animeEntryId?: StringFilter<"AnimeEntryAuthor"> | string
    authorId?: StringFilter<"AnimeEntryAuthor"> | string
    role?: StringNullableFilter<"AnimeEntryAuthor"> | string | null
    createdAt?: DateTimeFilter<"AnimeEntryAuthor"> | Date | string
  }

  export type AnimeRatingUpsertWithWhereUniqueWithoutAnimeEntryInput = {
    where: AnimeRatingWhereUniqueInput
    update: XOR<AnimeRatingUpdateWithoutAnimeEntryInput, AnimeRatingUncheckedUpdateWithoutAnimeEntryInput>
    create: XOR<AnimeRatingCreateWithoutAnimeEntryInput, AnimeRatingUncheckedCreateWithoutAnimeEntryInput>
  }

  export type AnimeRatingUpdateWithWhereUniqueWithoutAnimeEntryInput = {
    where: AnimeRatingWhereUniqueInput
    data: XOR<AnimeRatingUpdateWithoutAnimeEntryInput, AnimeRatingUncheckedUpdateWithoutAnimeEntryInput>
  }

  export type AnimeRatingUpdateManyWithWhereWithoutAnimeEntryInput = {
    where: AnimeRatingScalarWhereInput
    data: XOR<AnimeRatingUpdateManyMutationInput, AnimeRatingUncheckedUpdateManyWithoutAnimeEntryInput>
  }

  export type AnimeEntryGenreUpsertWithWhereUniqueWithoutAnimeEntryInput = {
    where: AnimeEntryGenreWhereUniqueInput
    update: XOR<AnimeEntryGenreUpdateWithoutAnimeEntryInput, AnimeEntryGenreUncheckedUpdateWithoutAnimeEntryInput>
    create: XOR<AnimeEntryGenreCreateWithoutAnimeEntryInput, AnimeEntryGenreUncheckedCreateWithoutAnimeEntryInput>
  }

  export type AnimeEntryGenreUpdateWithWhereUniqueWithoutAnimeEntryInput = {
    where: AnimeEntryGenreWhereUniqueInput
    data: XOR<AnimeEntryGenreUpdateWithoutAnimeEntryInput, AnimeEntryGenreUncheckedUpdateWithoutAnimeEntryInput>
  }

  export type AnimeEntryGenreUpdateManyWithWhereWithoutAnimeEntryInput = {
    where: AnimeEntryGenreScalarWhereInput
    data: XOR<AnimeEntryGenreUpdateManyMutationInput, AnimeEntryGenreUncheckedUpdateManyWithoutAnimeEntryInput>
  }

  export type AnimeEntryGenreScalarWhereInput = {
    AND?: AnimeEntryGenreScalarWhereInput | AnimeEntryGenreScalarWhereInput[]
    OR?: AnimeEntryGenreScalarWhereInput[]
    NOT?: AnimeEntryGenreScalarWhereInput | AnimeEntryGenreScalarWhereInput[]
    animeEntryId?: StringFilter<"AnimeEntryGenre"> | string
    genreId?: StringFilter<"AnimeEntryGenre"> | string
    createdAt?: DateTimeFilter<"AnimeEntryGenre"> | Date | string
  }

  export type AnimeTypeUpsertWithoutAnimeEntriesInput = {
    update: XOR<AnimeTypeUpdateWithoutAnimeEntriesInput, AnimeTypeUncheckedUpdateWithoutAnimeEntriesInput>
    create: XOR<AnimeTypeCreateWithoutAnimeEntriesInput, AnimeTypeUncheckedCreateWithoutAnimeEntriesInput>
    where?: AnimeTypeWhereInput
  }

  export type AnimeTypeUpdateToOneWithWhereWithoutAnimeEntriesInput = {
    where?: AnimeTypeWhereInput
    data: XOR<AnimeTypeUpdateWithoutAnimeEntriesInput, AnimeTypeUncheckedUpdateWithoutAnimeEntriesInput>
  }

  export type AnimeTypeUpdateWithoutAnimeEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeTypeUncheckedUpdateWithoutAnimeEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeEntryGenreCreateWithoutGenreInput = {
    createdAt?: Date | string
    animeEntry: AnimeEntryCreateNestedOneWithoutGenreLinksInput
  }

  export type AnimeEntryGenreUncheckedCreateWithoutGenreInput = {
    animeEntryId: string
    createdAt?: Date | string
  }

  export type AnimeEntryGenreCreateOrConnectWithoutGenreInput = {
    where: AnimeEntryGenreWhereUniqueInput
    create: XOR<AnimeEntryGenreCreateWithoutGenreInput, AnimeEntryGenreUncheckedCreateWithoutGenreInput>
  }

  export type AnimeEntryGenreCreateManyGenreInputEnvelope = {
    data: AnimeEntryGenreCreateManyGenreInput | AnimeEntryGenreCreateManyGenreInput[]
    skipDuplicates?: boolean
  }

  export type AnimeEntryGenreUpsertWithWhereUniqueWithoutGenreInput = {
    where: AnimeEntryGenreWhereUniqueInput
    update: XOR<AnimeEntryGenreUpdateWithoutGenreInput, AnimeEntryGenreUncheckedUpdateWithoutGenreInput>
    create: XOR<AnimeEntryGenreCreateWithoutGenreInput, AnimeEntryGenreUncheckedCreateWithoutGenreInput>
  }

  export type AnimeEntryGenreUpdateWithWhereUniqueWithoutGenreInput = {
    where: AnimeEntryGenreWhereUniqueInput
    data: XOR<AnimeEntryGenreUpdateWithoutGenreInput, AnimeEntryGenreUncheckedUpdateWithoutGenreInput>
  }

  export type AnimeEntryGenreUpdateManyWithWhereWithoutGenreInput = {
    where: AnimeEntryGenreScalarWhereInput
    data: XOR<AnimeEntryGenreUpdateManyMutationInput, AnimeEntryGenreUncheckedUpdateManyWithoutGenreInput>
  }

  export type AnimeEntryCreateWithoutTypeInput = {
    id?: string
    slug: string
    title: string
    description: string
    coverImageUrl: string
    status?: $Enums.WatchStatus
    airedFrom?: Date | string | null
    airedTo?: Date | string | null
    airedStatus?: $Enums.AnimeAiredStatus
    viewCount?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAnimeEntriesInput
    episodes?: AnimeEpisodeCreateNestedManyWithoutAnimeEntryInput
    authorLinks?: AnimeEntryAuthorCreateNestedManyWithoutAnimeEntryInput
    ratings?: AnimeRatingCreateNestedManyWithoutAnimeEntryInput
    genreLinks?: AnimeEntryGenreCreateNestedManyWithoutAnimeEntryInput
  }

  export type AnimeEntryUncheckedCreateWithoutTypeInput = {
    id?: string
    slug: string
    title: string
    description: string
    coverImageUrl: string
    status?: $Enums.WatchStatus
    airedFrom?: Date | string | null
    airedTo?: Date | string | null
    airedStatus?: $Enums.AnimeAiredStatus
    viewCount?: number
    notes?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    episodes?: AnimeEpisodeUncheckedCreateNestedManyWithoutAnimeEntryInput
    authorLinks?: AnimeEntryAuthorUncheckedCreateNestedManyWithoutAnimeEntryInput
    ratings?: AnimeRatingUncheckedCreateNestedManyWithoutAnimeEntryInput
    genreLinks?: AnimeEntryGenreUncheckedCreateNestedManyWithoutAnimeEntryInput
  }

  export type AnimeEntryCreateOrConnectWithoutTypeInput = {
    where: AnimeEntryWhereUniqueInput
    create: XOR<AnimeEntryCreateWithoutTypeInput, AnimeEntryUncheckedCreateWithoutTypeInput>
  }

  export type AnimeEntryCreateManyTypeInputEnvelope = {
    data: AnimeEntryCreateManyTypeInput | AnimeEntryCreateManyTypeInput[]
    skipDuplicates?: boolean
  }

  export type AnimeEntryUpsertWithWhereUniqueWithoutTypeInput = {
    where: AnimeEntryWhereUniqueInput
    update: XOR<AnimeEntryUpdateWithoutTypeInput, AnimeEntryUncheckedUpdateWithoutTypeInput>
    create: XOR<AnimeEntryCreateWithoutTypeInput, AnimeEntryUncheckedCreateWithoutTypeInput>
  }

  export type AnimeEntryUpdateWithWhereUniqueWithoutTypeInput = {
    where: AnimeEntryWhereUniqueInput
    data: XOR<AnimeEntryUpdateWithoutTypeInput, AnimeEntryUncheckedUpdateWithoutTypeInput>
  }

  export type AnimeEntryUpdateManyWithWhereWithoutTypeInput = {
    where: AnimeEntryScalarWhereInput
    data: XOR<AnimeEntryUpdateManyMutationInput, AnimeEntryUncheckedUpdateManyWithoutTypeInput>
  }

  export type AnimeEntryCreateWithoutGenreLinksInput = {
    id?: string
    slug: string
    title: string
    description: string
    coverImageUrl: string
    status?: $Enums.WatchStatus
    airedFrom?: Date | string | null
    airedTo?: Date | string | null
    airedStatus?: $Enums.AnimeAiredStatus
    viewCount?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAnimeEntriesInput
    episodes?: AnimeEpisodeCreateNestedManyWithoutAnimeEntryInput
    authorLinks?: AnimeEntryAuthorCreateNestedManyWithoutAnimeEntryInput
    ratings?: AnimeRatingCreateNestedManyWithoutAnimeEntryInput
    type?: AnimeTypeCreateNestedOneWithoutAnimeEntriesInput
  }

  export type AnimeEntryUncheckedCreateWithoutGenreLinksInput = {
    id?: string
    slug: string
    title: string
    description: string
    coverImageUrl: string
    status?: $Enums.WatchStatus
    airedFrom?: Date | string | null
    airedTo?: Date | string | null
    airedStatus?: $Enums.AnimeAiredStatus
    viewCount?: number
    notes?: string | null
    userId: string
    typeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    episodes?: AnimeEpisodeUncheckedCreateNestedManyWithoutAnimeEntryInput
    authorLinks?: AnimeEntryAuthorUncheckedCreateNestedManyWithoutAnimeEntryInput
    ratings?: AnimeRatingUncheckedCreateNestedManyWithoutAnimeEntryInput
  }

  export type AnimeEntryCreateOrConnectWithoutGenreLinksInput = {
    where: AnimeEntryWhereUniqueInput
    create: XOR<AnimeEntryCreateWithoutGenreLinksInput, AnimeEntryUncheckedCreateWithoutGenreLinksInput>
  }

  export type GenreCreateWithoutAnimeLinksInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GenreUncheckedCreateWithoutAnimeLinksInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GenreCreateOrConnectWithoutAnimeLinksInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutAnimeLinksInput, GenreUncheckedCreateWithoutAnimeLinksInput>
  }

  export type AnimeEntryUpsertWithoutGenreLinksInput = {
    update: XOR<AnimeEntryUpdateWithoutGenreLinksInput, AnimeEntryUncheckedUpdateWithoutGenreLinksInput>
    create: XOR<AnimeEntryCreateWithoutGenreLinksInput, AnimeEntryUncheckedCreateWithoutGenreLinksInput>
    where?: AnimeEntryWhereInput
  }

  export type AnimeEntryUpdateToOneWithWhereWithoutGenreLinksInput = {
    where?: AnimeEntryWhereInput
    data: XOR<AnimeEntryUpdateWithoutGenreLinksInput, AnimeEntryUncheckedUpdateWithoutGenreLinksInput>
  }

  export type AnimeEntryUpdateWithoutGenreLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumWatchStatusFieldUpdateOperationsInput | $Enums.WatchStatus
    airedFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airedTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airedStatus?: EnumAnimeAiredStatusFieldUpdateOperationsInput | $Enums.AnimeAiredStatus
    viewCount?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAnimeEntriesNestedInput
    episodes?: AnimeEpisodeUpdateManyWithoutAnimeEntryNestedInput
    authorLinks?: AnimeEntryAuthorUpdateManyWithoutAnimeEntryNestedInput
    ratings?: AnimeRatingUpdateManyWithoutAnimeEntryNestedInput
    type?: AnimeTypeUpdateOneWithoutAnimeEntriesNestedInput
  }

  export type AnimeEntryUncheckedUpdateWithoutGenreLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumWatchStatusFieldUpdateOperationsInput | $Enums.WatchStatus
    airedFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airedTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airedStatus?: EnumAnimeAiredStatusFieldUpdateOperationsInput | $Enums.AnimeAiredStatus
    viewCount?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    typeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: AnimeEpisodeUncheckedUpdateManyWithoutAnimeEntryNestedInput
    authorLinks?: AnimeEntryAuthorUncheckedUpdateManyWithoutAnimeEntryNestedInput
    ratings?: AnimeRatingUncheckedUpdateManyWithoutAnimeEntryNestedInput
  }

  export type GenreUpsertWithoutAnimeLinksInput = {
    update: XOR<GenreUpdateWithoutAnimeLinksInput, GenreUncheckedUpdateWithoutAnimeLinksInput>
    create: XOR<GenreCreateWithoutAnimeLinksInput, GenreUncheckedCreateWithoutAnimeLinksInput>
    where?: GenreWhereInput
  }

  export type GenreUpdateToOneWithWhereWithoutAnimeLinksInput = {
    where?: GenreWhereInput
    data: XOR<GenreUpdateWithoutAnimeLinksInput, GenreUncheckedUpdateWithoutAnimeLinksInput>
  }

  export type GenreUpdateWithoutAnimeLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreUncheckedUpdateWithoutAnimeLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeEntryCreateWithoutRatingsInput = {
    id?: string
    slug: string
    title: string
    description: string
    coverImageUrl: string
    status?: $Enums.WatchStatus
    airedFrom?: Date | string | null
    airedTo?: Date | string | null
    airedStatus?: $Enums.AnimeAiredStatus
    viewCount?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAnimeEntriesInput
    episodes?: AnimeEpisodeCreateNestedManyWithoutAnimeEntryInput
    authorLinks?: AnimeEntryAuthorCreateNestedManyWithoutAnimeEntryInput
    genreLinks?: AnimeEntryGenreCreateNestedManyWithoutAnimeEntryInput
    type?: AnimeTypeCreateNestedOneWithoutAnimeEntriesInput
  }

  export type AnimeEntryUncheckedCreateWithoutRatingsInput = {
    id?: string
    slug: string
    title: string
    description: string
    coverImageUrl: string
    status?: $Enums.WatchStatus
    airedFrom?: Date | string | null
    airedTo?: Date | string | null
    airedStatus?: $Enums.AnimeAiredStatus
    viewCount?: number
    notes?: string | null
    userId: string
    typeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    episodes?: AnimeEpisodeUncheckedCreateNestedManyWithoutAnimeEntryInput
    authorLinks?: AnimeEntryAuthorUncheckedCreateNestedManyWithoutAnimeEntryInput
    genreLinks?: AnimeEntryGenreUncheckedCreateNestedManyWithoutAnimeEntryInput
  }

  export type AnimeEntryCreateOrConnectWithoutRatingsInput = {
    where: AnimeEntryWhereUniqueInput
    create: XOR<AnimeEntryCreateWithoutRatingsInput, AnimeEntryUncheckedCreateWithoutRatingsInput>
  }

  export type UserCreateWithoutAnimeRatingsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    username?: string | null
    bio?: string | null
    avatarUrl?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    animeEntries?: AnimeEntryCreateNestedManyWithoutUserInput
    animeAuthors?: AnimeAuthorCreateNestedManyWithoutUserInput
    roleLinks?: UserRoleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAnimeRatingsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    username?: string | null
    bio?: string | null
    avatarUrl?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    animeEntries?: AnimeEntryUncheckedCreateNestedManyWithoutUserInput
    animeAuthors?: AnimeAuthorUncheckedCreateNestedManyWithoutUserInput
    roleLinks?: UserRoleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAnimeRatingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnimeRatingsInput, UserUncheckedCreateWithoutAnimeRatingsInput>
  }

  export type AnimeEntryUpsertWithoutRatingsInput = {
    update: XOR<AnimeEntryUpdateWithoutRatingsInput, AnimeEntryUncheckedUpdateWithoutRatingsInput>
    create: XOR<AnimeEntryCreateWithoutRatingsInput, AnimeEntryUncheckedCreateWithoutRatingsInput>
    where?: AnimeEntryWhereInput
  }

  export type AnimeEntryUpdateToOneWithWhereWithoutRatingsInput = {
    where?: AnimeEntryWhereInput
    data: XOR<AnimeEntryUpdateWithoutRatingsInput, AnimeEntryUncheckedUpdateWithoutRatingsInput>
  }

  export type AnimeEntryUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumWatchStatusFieldUpdateOperationsInput | $Enums.WatchStatus
    airedFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airedTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airedStatus?: EnumAnimeAiredStatusFieldUpdateOperationsInput | $Enums.AnimeAiredStatus
    viewCount?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAnimeEntriesNestedInput
    episodes?: AnimeEpisodeUpdateManyWithoutAnimeEntryNestedInput
    authorLinks?: AnimeEntryAuthorUpdateManyWithoutAnimeEntryNestedInput
    genreLinks?: AnimeEntryGenreUpdateManyWithoutAnimeEntryNestedInput
    type?: AnimeTypeUpdateOneWithoutAnimeEntriesNestedInput
  }

  export type AnimeEntryUncheckedUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumWatchStatusFieldUpdateOperationsInput | $Enums.WatchStatus
    airedFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airedTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airedStatus?: EnumAnimeAiredStatusFieldUpdateOperationsInput | $Enums.AnimeAiredStatus
    viewCount?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    typeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: AnimeEpisodeUncheckedUpdateManyWithoutAnimeEntryNestedInput
    authorLinks?: AnimeEntryAuthorUncheckedUpdateManyWithoutAnimeEntryNestedInput
    genreLinks?: AnimeEntryGenreUncheckedUpdateManyWithoutAnimeEntryNestedInput
  }

  export type UserUpsertWithoutAnimeRatingsInput = {
    update: XOR<UserUpdateWithoutAnimeRatingsInput, UserUncheckedUpdateWithoutAnimeRatingsInput>
    create: XOR<UserCreateWithoutAnimeRatingsInput, UserUncheckedCreateWithoutAnimeRatingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnimeRatingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnimeRatingsInput, UserUncheckedUpdateWithoutAnimeRatingsInput>
  }

  export type UserUpdateWithoutAnimeRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    animeEntries?: AnimeEntryUpdateManyWithoutUserNestedInput
    animeAuthors?: AnimeAuthorUpdateManyWithoutUserNestedInput
    roleLinks?: UserRoleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAnimeRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    animeEntries?: AnimeEntryUncheckedUpdateManyWithoutUserNestedInput
    animeAuthors?: AnimeAuthorUncheckedUpdateManyWithoutUserNestedInput
    roleLinks?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AnimeEntryCreateWithoutEpisodesInput = {
    id?: string
    slug: string
    title: string
    description: string
    coverImageUrl: string
    status?: $Enums.WatchStatus
    airedFrom?: Date | string | null
    airedTo?: Date | string | null
    airedStatus?: $Enums.AnimeAiredStatus
    viewCount?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAnimeEntriesInput
    authorLinks?: AnimeEntryAuthorCreateNestedManyWithoutAnimeEntryInput
    ratings?: AnimeRatingCreateNestedManyWithoutAnimeEntryInput
    genreLinks?: AnimeEntryGenreCreateNestedManyWithoutAnimeEntryInput
    type?: AnimeTypeCreateNestedOneWithoutAnimeEntriesInput
  }

  export type AnimeEntryUncheckedCreateWithoutEpisodesInput = {
    id?: string
    slug: string
    title: string
    description: string
    coverImageUrl: string
    status?: $Enums.WatchStatus
    airedFrom?: Date | string | null
    airedTo?: Date | string | null
    airedStatus?: $Enums.AnimeAiredStatus
    viewCount?: number
    notes?: string | null
    userId: string
    typeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    authorLinks?: AnimeEntryAuthorUncheckedCreateNestedManyWithoutAnimeEntryInput
    ratings?: AnimeRatingUncheckedCreateNestedManyWithoutAnimeEntryInput
    genreLinks?: AnimeEntryGenreUncheckedCreateNestedManyWithoutAnimeEntryInput
  }

  export type AnimeEntryCreateOrConnectWithoutEpisodesInput = {
    where: AnimeEntryWhereUniqueInput
    create: XOR<AnimeEntryCreateWithoutEpisodesInput, AnimeEntryUncheckedCreateWithoutEpisodesInput>
  }

  export type AnimeEntryUpsertWithoutEpisodesInput = {
    update: XOR<AnimeEntryUpdateWithoutEpisodesInput, AnimeEntryUncheckedUpdateWithoutEpisodesInput>
    create: XOR<AnimeEntryCreateWithoutEpisodesInput, AnimeEntryUncheckedCreateWithoutEpisodesInput>
    where?: AnimeEntryWhereInput
  }

  export type AnimeEntryUpdateToOneWithWhereWithoutEpisodesInput = {
    where?: AnimeEntryWhereInput
    data: XOR<AnimeEntryUpdateWithoutEpisodesInput, AnimeEntryUncheckedUpdateWithoutEpisodesInput>
  }

  export type AnimeEntryUpdateWithoutEpisodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumWatchStatusFieldUpdateOperationsInput | $Enums.WatchStatus
    airedFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airedTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airedStatus?: EnumAnimeAiredStatusFieldUpdateOperationsInput | $Enums.AnimeAiredStatus
    viewCount?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAnimeEntriesNestedInput
    authorLinks?: AnimeEntryAuthorUpdateManyWithoutAnimeEntryNestedInput
    ratings?: AnimeRatingUpdateManyWithoutAnimeEntryNestedInput
    genreLinks?: AnimeEntryGenreUpdateManyWithoutAnimeEntryNestedInput
    type?: AnimeTypeUpdateOneWithoutAnimeEntriesNestedInput
  }

  export type AnimeEntryUncheckedUpdateWithoutEpisodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumWatchStatusFieldUpdateOperationsInput | $Enums.WatchStatus
    airedFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airedTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airedStatus?: EnumAnimeAiredStatusFieldUpdateOperationsInput | $Enums.AnimeAiredStatus
    viewCount?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    typeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authorLinks?: AnimeEntryAuthorUncheckedUpdateManyWithoutAnimeEntryNestedInput
    ratings?: AnimeRatingUncheckedUpdateManyWithoutAnimeEntryNestedInput
    genreLinks?: AnimeEntryGenreUncheckedUpdateManyWithoutAnimeEntryNestedInput
  }

  export type UserCreateWithoutAnimeAuthorsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    username?: string | null
    bio?: string | null
    avatarUrl?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    animeEntries?: AnimeEntryCreateNestedManyWithoutUserInput
    animeRatings?: AnimeRatingCreateNestedManyWithoutUserInput
    roleLinks?: UserRoleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAnimeAuthorsInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    username?: string | null
    bio?: string | null
    avatarUrl?: string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    animeEntries?: AnimeEntryUncheckedCreateNestedManyWithoutUserInput
    animeRatings?: AnimeRatingUncheckedCreateNestedManyWithoutUserInput
    roleLinks?: UserRoleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAnimeAuthorsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnimeAuthorsInput, UserUncheckedCreateWithoutAnimeAuthorsInput>
  }

  export type AnimeEntryAuthorCreateWithoutAuthorInput = {
    role?: string | null
    createdAt?: Date | string
    animeEntry: AnimeEntryCreateNestedOneWithoutAuthorLinksInput
  }

  export type AnimeEntryAuthorUncheckedCreateWithoutAuthorInput = {
    animeEntryId: string
    role?: string | null
    createdAt?: Date | string
  }

  export type AnimeEntryAuthorCreateOrConnectWithoutAuthorInput = {
    where: AnimeEntryAuthorWhereUniqueInput
    create: XOR<AnimeEntryAuthorCreateWithoutAuthorInput, AnimeEntryAuthorUncheckedCreateWithoutAuthorInput>
  }

  export type AnimeEntryAuthorCreateManyAuthorInputEnvelope = {
    data: AnimeEntryAuthorCreateManyAuthorInput | AnimeEntryAuthorCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutAnimeAuthorsInput = {
    update: XOR<UserUpdateWithoutAnimeAuthorsInput, UserUncheckedUpdateWithoutAnimeAuthorsInput>
    create: XOR<UserCreateWithoutAnimeAuthorsInput, UserUncheckedCreateWithoutAnimeAuthorsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnimeAuthorsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnimeAuthorsInput, UserUncheckedUpdateWithoutAnimeAuthorsInput>
  }

  export type UserUpdateWithoutAnimeAuthorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    animeEntries?: AnimeEntryUpdateManyWithoutUserNestedInput
    animeRatings?: AnimeRatingUpdateManyWithoutUserNestedInput
    roleLinks?: UserRoleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAnimeAuthorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    socialLinks?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    animeEntries?: AnimeEntryUncheckedUpdateManyWithoutUserNestedInput
    animeRatings?: AnimeRatingUncheckedUpdateManyWithoutUserNestedInput
    roleLinks?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AnimeEntryAuthorUpsertWithWhereUniqueWithoutAuthorInput = {
    where: AnimeEntryAuthorWhereUniqueInput
    update: XOR<AnimeEntryAuthorUpdateWithoutAuthorInput, AnimeEntryAuthorUncheckedUpdateWithoutAuthorInput>
    create: XOR<AnimeEntryAuthorCreateWithoutAuthorInput, AnimeEntryAuthorUncheckedCreateWithoutAuthorInput>
  }

  export type AnimeEntryAuthorUpdateWithWhereUniqueWithoutAuthorInput = {
    where: AnimeEntryAuthorWhereUniqueInput
    data: XOR<AnimeEntryAuthorUpdateWithoutAuthorInput, AnimeEntryAuthorUncheckedUpdateWithoutAuthorInput>
  }

  export type AnimeEntryAuthorUpdateManyWithWhereWithoutAuthorInput = {
    where: AnimeEntryAuthorScalarWhereInput
    data: XOR<AnimeEntryAuthorUpdateManyMutationInput, AnimeEntryAuthorUncheckedUpdateManyWithoutAuthorInput>
  }

  export type AnimeEntryCreateWithoutAuthorLinksInput = {
    id?: string
    slug: string
    title: string
    description: string
    coverImageUrl: string
    status?: $Enums.WatchStatus
    airedFrom?: Date | string | null
    airedTo?: Date | string | null
    airedStatus?: $Enums.AnimeAiredStatus
    viewCount?: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAnimeEntriesInput
    episodes?: AnimeEpisodeCreateNestedManyWithoutAnimeEntryInput
    ratings?: AnimeRatingCreateNestedManyWithoutAnimeEntryInput
    genreLinks?: AnimeEntryGenreCreateNestedManyWithoutAnimeEntryInput
    type?: AnimeTypeCreateNestedOneWithoutAnimeEntriesInput
  }

  export type AnimeEntryUncheckedCreateWithoutAuthorLinksInput = {
    id?: string
    slug: string
    title: string
    description: string
    coverImageUrl: string
    status?: $Enums.WatchStatus
    airedFrom?: Date | string | null
    airedTo?: Date | string | null
    airedStatus?: $Enums.AnimeAiredStatus
    viewCount?: number
    notes?: string | null
    userId: string
    typeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    episodes?: AnimeEpisodeUncheckedCreateNestedManyWithoutAnimeEntryInput
    ratings?: AnimeRatingUncheckedCreateNestedManyWithoutAnimeEntryInput
    genreLinks?: AnimeEntryGenreUncheckedCreateNestedManyWithoutAnimeEntryInput
  }

  export type AnimeEntryCreateOrConnectWithoutAuthorLinksInput = {
    where: AnimeEntryWhereUniqueInput
    create: XOR<AnimeEntryCreateWithoutAuthorLinksInput, AnimeEntryUncheckedCreateWithoutAuthorLinksInput>
  }

  export type AnimeAuthorCreateWithoutAnimeLinksInput = {
    id?: string
    name: string
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAnimeAuthorsInput
  }

  export type AnimeAuthorUncheckedCreateWithoutAnimeLinksInput = {
    id?: string
    name: string
    bio?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnimeAuthorCreateOrConnectWithoutAnimeLinksInput = {
    where: AnimeAuthorWhereUniqueInput
    create: XOR<AnimeAuthorCreateWithoutAnimeLinksInput, AnimeAuthorUncheckedCreateWithoutAnimeLinksInput>
  }

  export type AnimeEntryUpsertWithoutAuthorLinksInput = {
    update: XOR<AnimeEntryUpdateWithoutAuthorLinksInput, AnimeEntryUncheckedUpdateWithoutAuthorLinksInput>
    create: XOR<AnimeEntryCreateWithoutAuthorLinksInput, AnimeEntryUncheckedCreateWithoutAuthorLinksInput>
    where?: AnimeEntryWhereInput
  }

  export type AnimeEntryUpdateToOneWithWhereWithoutAuthorLinksInput = {
    where?: AnimeEntryWhereInput
    data: XOR<AnimeEntryUpdateWithoutAuthorLinksInput, AnimeEntryUncheckedUpdateWithoutAuthorLinksInput>
  }

  export type AnimeEntryUpdateWithoutAuthorLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumWatchStatusFieldUpdateOperationsInput | $Enums.WatchStatus
    airedFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airedTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airedStatus?: EnumAnimeAiredStatusFieldUpdateOperationsInput | $Enums.AnimeAiredStatus
    viewCount?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAnimeEntriesNestedInput
    episodes?: AnimeEpisodeUpdateManyWithoutAnimeEntryNestedInput
    ratings?: AnimeRatingUpdateManyWithoutAnimeEntryNestedInput
    genreLinks?: AnimeEntryGenreUpdateManyWithoutAnimeEntryNestedInput
    type?: AnimeTypeUpdateOneWithoutAnimeEntriesNestedInput
  }

  export type AnimeEntryUncheckedUpdateWithoutAuthorLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumWatchStatusFieldUpdateOperationsInput | $Enums.WatchStatus
    airedFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airedTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airedStatus?: EnumAnimeAiredStatusFieldUpdateOperationsInput | $Enums.AnimeAiredStatus
    viewCount?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    typeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: AnimeEpisodeUncheckedUpdateManyWithoutAnimeEntryNestedInput
    ratings?: AnimeRatingUncheckedUpdateManyWithoutAnimeEntryNestedInput
    genreLinks?: AnimeEntryGenreUncheckedUpdateManyWithoutAnimeEntryNestedInput
  }

  export type AnimeAuthorUpsertWithoutAnimeLinksInput = {
    update: XOR<AnimeAuthorUpdateWithoutAnimeLinksInput, AnimeAuthorUncheckedUpdateWithoutAnimeLinksInput>
    create: XOR<AnimeAuthorCreateWithoutAnimeLinksInput, AnimeAuthorUncheckedCreateWithoutAnimeLinksInput>
    where?: AnimeAuthorWhereInput
  }

  export type AnimeAuthorUpdateToOneWithWhereWithoutAnimeLinksInput = {
    where?: AnimeAuthorWhereInput
    data: XOR<AnimeAuthorUpdateWithoutAnimeLinksInput, AnimeAuthorUncheckedUpdateWithoutAnimeLinksInput>
  }

  export type AnimeAuthorUpdateWithoutAnimeLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAnimeAuthorsNestedInput
  }

  export type AnimeAuthorUncheckedUpdateWithoutAnimeLinksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeEntryCreateManyUserInput = {
    id?: string
    slug: string
    title: string
    description: string
    coverImageUrl: string
    status?: $Enums.WatchStatus
    airedFrom?: Date | string | null
    airedTo?: Date | string | null
    airedStatus?: $Enums.AnimeAiredStatus
    viewCount?: number
    notes?: string | null
    typeId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnimeAuthorCreateManyUserInput = {
    id?: string
    name: string
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnimeRatingCreateManyUserInput = {
    id?: string
    animeEntryId: string
    value: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserRoleCreateManyUserInput = {
    roleId: string
    createdAt?: Date | string
  }

  export type AnimeEntryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumWatchStatusFieldUpdateOperationsInput | $Enums.WatchStatus
    airedFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airedTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airedStatus?: EnumAnimeAiredStatusFieldUpdateOperationsInput | $Enums.AnimeAiredStatus
    viewCount?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: AnimeEpisodeUpdateManyWithoutAnimeEntryNestedInput
    authorLinks?: AnimeEntryAuthorUpdateManyWithoutAnimeEntryNestedInput
    ratings?: AnimeRatingUpdateManyWithoutAnimeEntryNestedInput
    genreLinks?: AnimeEntryGenreUpdateManyWithoutAnimeEntryNestedInput
    type?: AnimeTypeUpdateOneWithoutAnimeEntriesNestedInput
  }

  export type AnimeEntryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumWatchStatusFieldUpdateOperationsInput | $Enums.WatchStatus
    airedFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airedTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airedStatus?: EnumAnimeAiredStatusFieldUpdateOperationsInput | $Enums.AnimeAiredStatus
    viewCount?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    typeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: AnimeEpisodeUncheckedUpdateManyWithoutAnimeEntryNestedInput
    authorLinks?: AnimeEntryAuthorUncheckedUpdateManyWithoutAnimeEntryNestedInput
    ratings?: AnimeRatingUncheckedUpdateManyWithoutAnimeEntryNestedInput
    genreLinks?: AnimeEntryGenreUncheckedUpdateManyWithoutAnimeEntryNestedInput
  }

  export type AnimeEntryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumWatchStatusFieldUpdateOperationsInput | $Enums.WatchStatus
    airedFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airedTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airedStatus?: EnumAnimeAiredStatusFieldUpdateOperationsInput | $Enums.AnimeAiredStatus
    viewCount?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    typeId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeAuthorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    animeLinks?: AnimeEntryAuthorUpdateManyWithoutAuthorNestedInput
  }

  export type AnimeAuthorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    animeLinks?: AnimeEntryAuthorUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type AnimeAuthorUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeRatingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    animeEntry?: AnimeEntryUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type AnimeRatingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    animeEntryId?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeRatingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    animeEntryId?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutUserLinksNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutUserInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleUncheckedUpdateManyWithoutUserInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleCreateManyRoleInput = {
    userId: string
    createdAt?: Date | string
  }

  export type RolePermissionCreateManyRoleInput = {
    permissionId: string
    createdAt?: Date | string
  }

  export type UserRoleUpdateWithoutRoleInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRoleLinksNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutRoleInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionUpdateWithoutRoleInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    permission?: PermissionUpdateOneRequiredWithoutRolesNestedInput
  }

  export type RolePermissionUncheckedUpdateWithoutRoleInput = {
    permissionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionUncheckedUpdateManyWithoutRoleInput = {
    permissionId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionCreateManyPermissionInput = {
    roleId: string
    createdAt?: Date | string
  }

  export type RolePermissionUpdateWithoutPermissionInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    role?: RoleUpdateOneRequiredWithoutPermissionsNestedInput
  }

  export type RolePermissionUncheckedUpdateWithoutPermissionInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RolePermissionUncheckedUpdateManyWithoutPermissionInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeEpisodeCreateManyAnimeEntryInput = {
    id?: string
    episodeNumber: number
    title?: string | null
    description?: string | null
    durationMinutes?: number | null
    airDate?: Date | string | null
    videoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnimeEntryAuthorCreateManyAnimeEntryInput = {
    authorId: string
    role?: string | null
    createdAt?: Date | string
  }

  export type AnimeRatingCreateManyAnimeEntryInput = {
    id?: string
    userId: string
    value: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnimeEntryGenreCreateManyAnimeEntryInput = {
    genreId: string
    createdAt?: Date | string
  }

  export type AnimeEpisodeUpdateWithoutAnimeEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    episodeNumber?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    airDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeEpisodeUncheckedUpdateWithoutAnimeEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    episodeNumber?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    airDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeEpisodeUncheckedUpdateManyWithoutAnimeEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    episodeNumber?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    durationMinutes?: NullableIntFieldUpdateOperationsInput | number | null
    airDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    videoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeEntryAuthorUpdateWithoutAnimeEntryInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    author?: AnimeAuthorUpdateOneRequiredWithoutAnimeLinksNestedInput
  }

  export type AnimeEntryAuthorUncheckedUpdateWithoutAnimeEntryInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeEntryAuthorUncheckedUpdateManyWithoutAnimeEntryInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeRatingUpdateWithoutAnimeEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAnimeRatingsNestedInput
  }

  export type AnimeRatingUncheckedUpdateWithoutAnimeEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeRatingUncheckedUpdateManyWithoutAnimeEntryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    value?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeEntryGenreUpdateWithoutAnimeEntryInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genre?: GenreUpdateOneRequiredWithoutAnimeLinksNestedInput
  }

  export type AnimeEntryGenreUncheckedUpdateWithoutAnimeEntryInput = {
    genreId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeEntryGenreUncheckedUpdateManyWithoutAnimeEntryInput = {
    genreId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeEntryGenreCreateManyGenreInput = {
    animeEntryId: string
    createdAt?: Date | string
  }

  export type AnimeEntryGenreUpdateWithoutGenreInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    animeEntry?: AnimeEntryUpdateOneRequiredWithoutGenreLinksNestedInput
  }

  export type AnimeEntryGenreUncheckedUpdateWithoutGenreInput = {
    animeEntryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeEntryGenreUncheckedUpdateManyWithoutGenreInput = {
    animeEntryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeEntryCreateManyTypeInput = {
    id?: string
    slug: string
    title: string
    description: string
    coverImageUrl: string
    status?: $Enums.WatchStatus
    airedFrom?: Date | string | null
    airedTo?: Date | string | null
    airedStatus?: $Enums.AnimeAiredStatus
    viewCount?: number
    notes?: string | null
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AnimeEntryUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumWatchStatusFieldUpdateOperationsInput | $Enums.WatchStatus
    airedFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airedTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airedStatus?: EnumAnimeAiredStatusFieldUpdateOperationsInput | $Enums.AnimeAiredStatus
    viewCount?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAnimeEntriesNestedInput
    episodes?: AnimeEpisodeUpdateManyWithoutAnimeEntryNestedInput
    authorLinks?: AnimeEntryAuthorUpdateManyWithoutAnimeEntryNestedInput
    ratings?: AnimeRatingUpdateManyWithoutAnimeEntryNestedInput
    genreLinks?: AnimeEntryGenreUpdateManyWithoutAnimeEntryNestedInput
  }

  export type AnimeEntryUncheckedUpdateWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumWatchStatusFieldUpdateOperationsInput | $Enums.WatchStatus
    airedFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airedTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airedStatus?: EnumAnimeAiredStatusFieldUpdateOperationsInput | $Enums.AnimeAiredStatus
    viewCount?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    episodes?: AnimeEpisodeUncheckedUpdateManyWithoutAnimeEntryNestedInput
    authorLinks?: AnimeEntryAuthorUncheckedUpdateManyWithoutAnimeEntryNestedInput
    ratings?: AnimeRatingUncheckedUpdateManyWithoutAnimeEntryNestedInput
    genreLinks?: AnimeEntryGenreUncheckedUpdateManyWithoutAnimeEntryNestedInput
  }

  export type AnimeEntryUncheckedUpdateManyWithoutTypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImageUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumWatchStatusFieldUpdateOperationsInput | $Enums.WatchStatus
    airedFrom?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airedTo?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    airedStatus?: EnumAnimeAiredStatusFieldUpdateOperationsInput | $Enums.AnimeAiredStatus
    viewCount?: IntFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeEntryAuthorCreateManyAuthorInput = {
    animeEntryId: string
    role?: string | null
    createdAt?: Date | string
  }

  export type AnimeEntryAuthorUpdateWithoutAuthorInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    animeEntry?: AnimeEntryUpdateOneRequiredWithoutAuthorLinksNestedInput
  }

  export type AnimeEntryAuthorUncheckedUpdateWithoutAuthorInput = {
    animeEntryId?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnimeEntryAuthorUncheckedUpdateManyWithoutAuthorInput = {
    animeEntryId?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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