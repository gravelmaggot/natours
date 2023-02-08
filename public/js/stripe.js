import axios from 'axios';
import { showAlert } from "./alerts.js";


export const bookTour = async tourId => {
    const stripe = Stripe(process.env.STRIPE_PUBLIC_KEY);

    try {
        const session = await axios(`http://localhost:3000/api/v1/bookings/checkout-session/${tourId}`);

        await stripe.redirectToCheckout({
            sessionId: session.data.session.id
        });
    } catch (error) {
        showAlert('error', 'Something went wrong! Please try again later.');
    }
};