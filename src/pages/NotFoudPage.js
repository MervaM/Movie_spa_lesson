import {Link} from 'react-router-dom';
function NotFoundPage() {
    return(
        <main className="container main">
            <h2>This page does not exist</h2>
            <div>
                <Link to='/'>Home page</Link>
            </div>

        </main>

    )
}
export {NotFoundPage};