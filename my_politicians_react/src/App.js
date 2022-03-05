import './App.css';
import Navbar from './Components/Navbar';
import PositionTitle from './Components/PositionTitle';
import PoliticianCard from './Components/PoliticianCard';
import { officialsData } from './script';

function App() {
	return (
		<div className="App">
			<Navbar></Navbar>
			<PositionTitle title="President"></PositionTitle>
			<PoliticianCard name={officialsData[0]}></PoliticianCard>
			<PositionTitle title="Governor"></PositionTitle>
			<PoliticianCard></PoliticianCard>
			<PositionTitle title="Senator"></PositionTitle>
			<PoliticianCard></PoliticianCard>
			<PositionTitle title="Representative"></PositionTitle>
			<PoliticianCard></PoliticianCard>
		</div>
	);
}

export default App;
