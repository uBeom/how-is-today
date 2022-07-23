import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Practice from './components/Practice';

const queryClinet = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClinet}>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      <Practice label='asdsad' isActive />
    </QueryClientProvider>
  );
};

export default App;
