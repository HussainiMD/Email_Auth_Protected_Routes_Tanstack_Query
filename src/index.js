import ReactDOM from "react-dom/client";
import {App} from "./components/App";
import {createBrowserRouter, redirect, RouterProvider} from "react-router-dom";
import { RegisterForm } from "./components/RegisterForm";
import { SignInForm } from "./components/SignInForm";
import { Posts } from "./components/Posts";
import { User } from "./components/User";
import { AuthStore } from "./state/AuthStore";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

const browserRouter = new createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '', //we want register form to be shown by default, so empty path
                element: <RegisterForm />
            },
            {
                path: 'signup',
                element: <RegisterForm />,
                index: true
            },
            {
                path: 'signin',
                element: <SignInForm />                
            },
            {
                path: 'user',
                element: <User />,
                loader: () => { 
                    const user = AuthStore.getUser();
                    if(!user) return redirect('/signin') 
                    return user;
                    },
                children: [
                    {
                        path: 'posts',
                        element: <Posts />,
                    }
                ]
            }
            
        ]
    }
]);

const queryClient = new QueryClient();

const rootApp = document.querySelector('.app');
const root = ReactDOM.createRoot(rootApp);
root.render(
    <QueryClientProvider client={queryClient} >
        <RouterProvider router={browserRouter} />
    </QueryClientProvider>
);