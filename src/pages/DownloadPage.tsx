import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, AlertTriangle, Home } from "lucide-react";

// --- LÓGICA DO BACKEND (A SER IMPLEMENTADA NO SEU SERVIDOR) ---
// Esta função é uma simulação. No futuro, ela fará uma chamada
// para o seu próprio backend (ex: fetch('/api/get-clip?slug=...')).
// Seu backend então chamará a API da Twitch e retornará o link do MP4.
const getClipDownloadUrl = async (slug: string): Promise<string> => {
  console.log(`Buscando URL de download para o slug: ${slug}`);

  // Simulação de chamada de API com um pequeno delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Lógica para obter a URL real do clipe a partir da API da Twitch
  // Esta lógica DEVE ficar no seu backend para proteger suas chaves da API.
  // O backend faria algo como:
  // 1. Chamar https://api.twitch.tv/helix/clips?id={slug}
  // 2. Pegar a `thumbnail_url` da resposta.
  // 3. Montar a URL do MP4: thumbnail_url.split('-preview-')[0] + '.mp4'
  // 4. Retornar a URL do MP4.

  // Por enquanto, retornaremos um link de exemplo funcional para teste.
  // Substitua este trecho pela chamada real ao seu backend.
  if (slug) {
    // Exemplo de como a URL final se pareceria:
    return `https://clips-media-assets2.twitch.tv/AT-cm%7C${slug}.mp4`;
  } else {
    throw new Error("Slug inválido");
  }
};
// --- FIM DA LÓGICA DO BACKEND ---

const DownloadPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchAndRedirect = async () => {
      if (!slug) {
        setErrorMessage("O link do clipe parece estar inválido ou incompleto.");
        setStatus("error");
        return;
      }

      try {
        const mp4Url = await getClipDownloadUrl(slug);
        setStatus("success");
        // Redireciona o navegador para o link do MP4, iniciando o download
        window.location.replace(mp4Url);
      } catch (error) {
        console.error("Erro ao buscar clipe:", error);
        setErrorMessage(
          "O clipe não foi encontrado ou expirou. Tente novamente ou verifique o link."
        );
        setStatus("error");
      }
    };

    fetchAndRedirect();
  }, [slug]);

  const renderContent = () => {
    switch (status) {
      case "loading":
        return (
          <>
            <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
            <CardTitle className="text-2xl">
              Preparando seu download...
            </CardTitle>
            <CardDescription>
              Estamos buscando o seu clipe. O download começará em instantes.
            </CardDescription>
          </>
        );
      case "success":
        return (
          <>
            <Loader2 className="w-12 h-12 text-primary animate-spin mb-4" />
            <CardTitle className="text-2xl">Redirecionando...</CardTitle>
            <CardDescription>
              Seu download está pronto e deve começar agora.
            </CardDescription>
          </>
        );
      case "error":
        return (
          <>
            <AlertTriangle className="w-12 h-12 text-destructive mb-4" />
            <CardTitle className="text-2xl">Oops! Algo deu errado</CardTitle>
            <CardDescription className="mb-6">{errorMessage}</CardDescription>
            <Button asChild>
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Voltar para o Início
              </Link>
            </Button>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-bg flex items-center justify-center p-4">
      <Card className="w-full max-w-md text-center bg-card/50 backdrop-blur-sm border-border/50">
        <CardHeader>
          <img
            src="/src/assets/logo-branco.png"
            alt="Clipador Logo"
            className="w-32 mx-auto mb-4"
          />
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center p-8">
          {renderContent()}
        </CardContent>
      </Card>
    </div>
  );
};

export default DownloadPage;
