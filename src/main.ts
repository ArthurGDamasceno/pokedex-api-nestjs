import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  // Cria uma única instância da aplicação
  const app = await NestFactory.create(AppModule);

  // Configura o Swagger
  const config = new DocumentBuilder()
    .setTitle('Pokédex API')
    .setDescription('API para consultar dados de Pokémon')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Registra o filtro global de exceções
  app.useGlobalFilters(new HttpExceptionFilter());

  // Inicia o servidor
  await app.listen(process.env.PORT || 3000);
}

bootstrap();