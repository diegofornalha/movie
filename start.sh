#!/bin/bash

# Script para iniciar o projeto Hoodie Store

echo "🚀 Iniciando Hoodie Store..."
echo ""

# Verifica se node_modules existe
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependências..."
    npm install --legacy-peer-deps
    echo ""
fi

# Inicia o servidor de desenvolvimento
echo "🔧 Iniciando servidor de desenvolvimento..."
echo "📍 Local: http://localhost:3000"
echo ""

npm run dev
