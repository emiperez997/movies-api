import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { ApiKeyService } from "../api-key.service";
import { ApiKeyType } from "../schema/api-key.schema";

@Injectable()
export class ApiKeyGuardRead implements CanActivate {
  constructor(private readonly apiKeyService: ApiKeyService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // Obtengo los datos de la petición
    const request = context.switchToHttp().getRequest();

    // Obtengo el apiKey
    const apiKey = request.query["apikey"];

    if (!apiKey) {
      throw new UnauthorizedException("Se necesita una API key");
    }

    const apiKeyData = await this.apiKeyService.validate({ key: apiKey });

    if (!apiKeyData) {
      throw new UnauthorizedException("La API key no es válida");
    }

    if (
      apiKeyData.type !== ApiKeyType.READ &&
      apiKeyData.type !== ApiKeyType.ALL
    ) {
      throw new UnauthorizedException(
        "No tiene permisos para realizar esta acción",
      );
    }

    return true;
  }
}
