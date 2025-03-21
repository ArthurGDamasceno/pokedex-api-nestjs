import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

/**
 * Filtro global de exceções HTTP.
 * Captura exceções do tipo HttpException e retorna uma resposta padronizada.
 */
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  /**
   * Método principal que processa a exceção e gera a resposta HTTP.
   *
   * @param exception - A exceção capturada.
   * @param host - O contexto de execução da requisição.
   */
  catch(exception: HttpException, host: ArgumentsHost): void {
    const context = this.getHttpContext(host);
    const status = exception.getStatus();

    // Gera a resposta padronizada
    const responseBody = this.buildResponseBody(status, context.request);

    // Define o status e envia a resposta
    context.response.status(status).json(responseBody);
  }

  /**
   * Extrai o contexto HTTP (request e response) do ArgumentsHost.
   *
   * @param host - O contexto de execução da requisição.
   * @returns Um objeto contendo o request e o response.
   */
  private getHttpContext(host: ArgumentsHost): {
    request: Request;
    response: Response;
  } {
    const ctx = host.switchToHttp();
    return {
      request: ctx.getRequest<Request>(),
      response: ctx.getResponse<Response>(),
    };
  }

  /**
   * Constrói o corpo da resposta padronizada.
   *
   * @param status - O status HTTP da exceção.
   * @param request - O objeto de requisição.
   * @returns Um objeto contendo os detalhes da resposta.
   */
  private buildResponseBody(status: number, request: Request): object {
    return {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      message: 'Ocorreu um erro ao processar sua requisição.',
    };
  }
}