import css from "./HomePage.module.css"
export default function HomePage() {
    return (
        <div className={css.container}>
            <h1>Welcome to the home page of contacts manager</h1>
            <p>Here you can create your own contacts book</p> 
        </div>
    )
}