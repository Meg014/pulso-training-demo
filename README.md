# PULSO Training Club

Landing page conceitual de uma academia fictícia para o portfólio da VortexVision. Projeto local independente, sem vínculo de código com outros diretórios, sem backend, cookies, cadastro ou coleta de dados. Nenhum contato, unidade ou oferta comercial real é apresentado.

## Desenvolvimento

Requer Node.js 22.13+ e npm.

```sh
npm ci
npm run dev
```

Acesse http://localhost:3000.

```sh
npm run lint
npm run typecheck
npm run build
```

## Cloudflare Pages

Build: `npm run build`. Diretório de saída: `out`. Não requer Functions, Worker ou adaptador. O arquivo `public/_headers` é copiado para a exportação e aplicado pelo Pages. Não foi criado repositório remoto nem realizada publicação.

Antes de uma futura publicação, configure `NEXT_PUBLIC_SITE_URL` com a URL definitiva e execute o build novamente. O domínio reservado `pulso.example` é apenas a base de desenvolvimento dos metadados e sitemap, sem aparecer como link de contato. O conceito usa `noindex` por padrão para evitar confusão com uma academia real.

## Personalização

Configuração, modalidades, planos e FAQ: `src/content/site.ts`. Contato real pode ser cadastrado em `site.contact.email`; vazio mantém o estado demonstrativo sem link. `site.contact.whatsapp` é uma reserva de configuração, sem integração ativa. Nunca adicionar segredos em variáveis `NEXT_PUBLIC_*`.

Componentes em `src/components`, composição em `src/app/page.tsx`, identidade responsiva em `src/app/globals.css`. Menu com estado acessível, FAQ nativo de teclado, link para pular conteúdo e animações respeitando `prefers-reduced-motion`.

Fontes de sistema evitam chamadas externas. Veja [IMAGE-LICENSES.md](IMAGE-LICENSES.md) para fontes e licença das fotografias. As únicas dependências de execução são Next.js, React e Lucide.
