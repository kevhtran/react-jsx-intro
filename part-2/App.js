const App = () => {
    return <div>
        <Tweet username="andyroo" name="Drew" message="Ayoo" date={new Date().toDateString()} />
        <Tweet username="superloo" name="Mazie" message="Wazzup" date={new Date().toDateString()} />
        <Tweet username="moonstruck" name="Lunar" message="new acct who dis" date={new Date().toDateString()} />

    </div>
}