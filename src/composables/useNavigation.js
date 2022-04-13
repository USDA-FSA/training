
import { useRouter } from 'vue-router';

export function useNavigation() {
  
  const router = useRouter();

  const goto = (path, target='') => {
    if(path.includes('http')){
      if(target=='_blank') window.open(path, target);
      else window.location.href = path;
    } else {
      router.push(path)
    }
  }

  return {
    goto
  }
}