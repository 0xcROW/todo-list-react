import { StatsCard } from '../StatsCard/StatsCard';
import styles from './Header.module.scss';

export const Header: React.FC = (props) => {
  return (
    <header>
      <>
        <div className={styles.header}>
            <div className={styles.container}>
                <div>
                    <h1>My TODO</h1>
                    <span>Welcome!</span>
                </div>
                <div>
                    <StatsCard title='Total of tasks' value={5}/>
                    <StatsCard title='Pending tasks' value={2}/>
                    <StatsCard title='Finished tasks' value={57}/>
                </div>
            </div>
        </div>
      </>
    </header>
  );
}