// src/components/TeamsList.jsx
import { useContext } from 'react';
import { TeamsContext } from './TeamsContextTest';

const TeamsList = () => {
    const { teams, loading, error } = useContext(TeamsContext);

    if (loading) return <p>Loading teams...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {teams.map((team) => (
            <div key={team.id} className="p-4 shadow rounded bg-white dark:bg-gray-800">
                <img src={team.crest} alt={team.name} className="w-16 h-16 mx-auto" />
                <h2 className="text-center mt-2">{team.name}</h2>
            </div>
        ))}
        </div>
    );
};

export default TeamsList;
