import subprocess
import sys

def run_command(command):
    """Executa um comando no shell e lida com erros."""
    try:
        # Usamos shell=True para simplicidade com os comandos do Git.
        # Como os comandos são fixos, não há risco de segurança.
        process = subprocess.run(
            command, check=True, capture_output=True, text=True, shell=True, encoding='utf-8'
        )
        if process.stdout:
            print(process.stdout.strip())
        # O Git frequentemente usa stderr para mensagens de progresso, então as exibimos.
        if process.stderr:
            print(process.stderr.strip())
        return process.stdout.strip()
    except subprocess.CalledProcessError as e:
        print(f"❌ Erro ao executar: {command}", file=sys.stderr)
        print(f"   Saída de erro:\n{e.stderr.strip()}", file=sys.stderr)
        sys.exit(1)

def atualizar():
    """Guarda as alterações, puxa do repositório e aplica as alterações de volta."""
    print("🔄 Atualizando projeto local...")
    stash_output = run_command("git stash")
    run_command("git pull origin main --rebase")
    if "No local changes to save" not in stash_output:
        run_command("git stash pop")
    print("\n✅ Projeto atualizado com sucesso!")

def subir():
    """Adiciona, commita e envia as alterações para o repositório."""
    print("📝 Digite sua mensagem de commit (termine com uma linha vazia):")
    mensagem_lista = []
    while True:
        try:
            linha = input()
            if not linha:
                break
            mensagem_lista.append(linha)
        except EOFError:
            print("\n❌ Operação cancelada por EOF.")
            sys.exit(1)
    
    mensagem = '\n'.join(mensagem_lista)
    if not mensagem.strip():
        print("❌ Mensagem de commit não pode ser vazia. Operação cancelada.")
        sys.exit(1)

    print("\n➕ Adicionando arquivos...")
    run_command("git add .")

    print("📦 Commitando alterações...")
    process = subprocess.run(
        ["git", "commit", "-m", mensagem], 
        check=True, 
        capture_output=True, 
        text=True, 
        encoding='utf-8'
    )
    if process.stdout:
        print(process.stdout.strip())
    if process.stderr:
        print(process.stderr.strip())

    print("📤 Enviando para o repositório...")
    run_command("git push origin main")

    print("\n✅ Alterações enviadas com sucesso!")

def main():
    if len(sys.argv) != 2 or sys.argv[1] not in ["atualizar", "subir"]:
        print("Uso: python scripts/git_manager.py [atualizar|subir]")
        sys.exit(1)

    command = sys.argv[1]
    if command == "atualizar":
        atualizar()
    elif command == "subir":
        subir()

if __name__ == "__main__":
    main()