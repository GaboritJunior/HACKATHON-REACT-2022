import { useState, useEffect } from 'react' 
import { useAuth } from '../hooks/auth'
import { useNavigate } from 'react-router-dom'
<<<<<<< HEAD
import { Navigate } from 'react-router';
=======
import Header from './../parts/Header'
>>>>>>> 24-integrer-la-barre-de-navigation

const Credits = () => {

    const [loginState] = useAuth(true)
    const [credits, setCredits] = useState(0)
    const [id, setId] = useState(0)

    const user = loginState.user

    useEffect(() => {
        if(user) {
            // getCredits()
            console.log(user)
            getCredits()
        }
    }, [user])
    
    const navigate = useNavigate()

    const getCredits = () => {
        fetch(`/api/students?lastName=${user.lastName}`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Failed to retrieve user')
            }
            return res.json()
        })
        .then(user => {
            setCredits(user[0].credits)
            setId(user[0].id)
        })
    }


    const offers = [
        {
            amount: 1,
            price: 42
        },
        {
            amount: 5,
            price: 39,
            total: 190
        },
        {
            amount: 20,
            price: 32,
            total: 650
        },
    ]

    
    const submitOffer = (offer) => {
        if(offer) {
            fetch(`/api/students/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'Application/json'
                },
                body: JSON.stringify({
                    credits: credits + offer.amount 
                })
            })
            .then(res => console.log(res.json()))
        }
        navigate('/')
    }

    return <section className='wrapper'>
        <Header />
        <main className='container'>
            <section className='credits'>
                <h2 className='credits__title'>Optez pour l’offre la plus adaptée</h2>
                {user &&<h3 className='credits__subtitle'>Vous avez {credits} crédits</h3>}
                
                <ul className='credits-list'>

                    {offers.map((offer, i) => {
                        return <li key={i} className='offer'>
                            <h3 className='offer-name'>Pack {offer.amount} crédit{offer.amount > 1 ? 's' : ''}</h3>
                            <div className='offer-price'>
                                <h4 className='offer-price-content'>{offer.price} €</h4>
                                <span>La leçon de conduite</span>
                            </div>
                            <span className='offer-total'> {offer.total ? `Soit ${offer.total} €` : ''}</span>
                            <input type="button" className='offer-btn' onClick={() => submitOffer(offer)} value="Payer" />
                        </li>
                    })}
                </ul>
            </section>
        </main>
    </section>
}

export default Credits