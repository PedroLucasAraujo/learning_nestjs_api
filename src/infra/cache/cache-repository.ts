export abstract class CacheRepository {
  abstract set(key: string, value: string): Promise<void>;
  abstract get(key: string, value: string): Promise<void>;
  abstract delete(key: string, value: string): Promise<void>;
}
