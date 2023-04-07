<script>
    import * as firebaseui from "firebaseui";
    import {getAuth} from "firebase/auth"
    import "firebaseui/dist/firebaseui.css"
    import { get } from "svelte/store";
    import firebase from "firebase/compat/app"
    import {onMount} from "svelte"
    onMount(() => {
        var ui = new firebaseui.auth.AuthUI(getAuth())
        ui.start("#firebaseui-auth-container", {
        signInOptions: [
                firebase.auth.EmailAuthProvider.PROVIDER_ID
            ], signInSuccessUrl:"http://localhost:5173"
        })
    })

</script>
    <div id="firebaseui-auth-container">
</div>