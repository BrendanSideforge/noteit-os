FROM debian:latest

RUN apt-get update && \
    apt-get install -y curl unzip

# Install Deno
RUN curl -fsSL https://deno.land/x/install/install.sh | sh

ENV DENO_INSTALL="/root/.deno"
ENV PATH="$DENO_INSTALL/bin:$PATH"

RUN deno install --name opengb --force --allow-net \
    --allow-read --allow-env --allow-run --allow-write \
    --allow-sys https://raw.githubusercontent.com/rivet-gg/opengb/main/src/cli/main.ts

# Build OpenGB
COPY . .
RUN opengb build

# {/* TODO: Switch to some other user here for security */}

# Tell docker to run OpenGB on startup
CMD ["deno", "run", ".opengb/entrypoint.ts"] 