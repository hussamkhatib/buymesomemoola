import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../stores/user.store'

// import { userService } from 'services';


function RouteGuard({ children }) {
    const address = useUser(state => state.address)

    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        // on initial load - run auth check 
      
        // on route change start - hide page content by setting authorized to false  
        // const hideContent = () => setAuthorized(false);
        // router.events.on('routeChangeStart', hideContent);
        const authCheck = () => {
            if (!address) {
                setAuthorized(false);
                router.push('/');
            } else {
                setAuthorized(true);
            }
        }
        authCheck()

        // on route change complete - run auth check 
        // router.events.on('routeChangeComplete', authCheck)

        // unsubscribe from events in useEffect return function
        return () => {
            // router.events.off('routeChangeStart', hideContent);
            // router.events.off('routeChangeComplete', authCheck);
        }

    }, [address]);

    return (authorized && children);
}


export default RouteGuard