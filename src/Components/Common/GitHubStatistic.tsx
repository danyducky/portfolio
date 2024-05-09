import GitHubCalendar from "react-github-calendar";

interface GitHubStatisticProps {
    username: string
}

function GitHubStatistic({username}: GitHubStatisticProps) {
    return (
        <div style={{fontSize: '20px', fontWeight: '500'}}>
            <span>
                <a style={{backgroundImage: 'none', fontWeight: 'bold'}} href={`https://github.com/${username}`}
                   target='_blank'
                   rel='noopener noreferrer'>@{username}
                </a> on GitHub
            </span>

            <GitHubCalendar fontSize={18} username={username} style={{marginTop: "1rem"}}/>
        </div>
    )
}

export default GitHubStatistic;