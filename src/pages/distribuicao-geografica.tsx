import dynamic from 'next/dynamic';
import { GeographicDistTemplate } from 'templates';

const MapCore = dynamic(() => import('components/Map/Map'), { ssr: false });

export default function DistribuicaoGeografica() {
  return <GeographicDistTemplate Map={MapCore} />;
}
