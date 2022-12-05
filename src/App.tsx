import Layout from './layout'
import Dashboard from '@/pages/Dashboard'
import LoadingScreen from './components/LoadingScreen'

function App() {
	return (
		<>
			<LoadingScreen presentation />
			<Layout>
				<Dashboard />
			</Layout>
		</>
	)
}

export default App
