import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { selectTheme } from './redux/features';
import routes from './routes';

function App() {
  const isDark = useSelector(selectTheme);

  return (
    <div className={isDark ? 'dark-theme' : 'light-theme'}>
      <main className="min-h-screen bg-background text-sm text-primary transition-all duration-200">
        <RouterProvider router={routes} />
      </main>
    </div>
  );
}

export default App;
