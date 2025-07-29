import { TeamsProvider } from './TeamsContextTest';
import TeamsList from './TeamsListTest';


export default function TestHome() {
    return (
        <TeamsProvider>
            <h1 className="text-2xl font-bold mb-4">Premier League Teams</h1>
            <TeamsList />
        </TeamsProvider>
    )
}
