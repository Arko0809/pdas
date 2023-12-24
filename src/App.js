import 'bulma/css/bulma.css'
import ProfileCard from './ProfileCard'
import che from './images/1.jpeg'
import louis from './images/2.jpg'
import charu from './images/3.jpg'

export default function App(){
    return(
        <>
        <section className="hero is-primary">
            <div className="hero-body">
                <p className="title">Polka Dots</p>
            </div>
        </section>
        <div className='container'>
            <section className='section'>
                <div className='columns'>
                    <div className='column is-4'>
                        <ProfileCard image={louis} title="Louis XIV" handle="@versaille.org" />
                    </div>
                    <div className='column is-4'>
                        <ProfileCard image={che} title="Che Guevera" handle="@soycuba.org" />
                    </div>
                    <div className='column is-4'>
                        <ProfileCard image={charu} title="Charu Majumdar" handle="@calcutta.org" />
                    </div>
                </div>
            </section>
        </div>
        </>
    )
}
