import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import Router from '@/router';

const queryClinet = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClinet}>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
      <Router />
    </QueryClientProvider>
  );
};

export default App;
