import { Body, Controller, Get, Post, Delete, HttpException, HttpStatus } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { SignUpModel } from './models/signup.model';
import { SignInModel } from './models/signin.model';
import { firebaseApp } from "../main";

@Controller('auth')
export class AuthController {
    constructor() { }

    @Post('signup')
    async signUp(@Body() signupModel: SignUpModel) {
        console.log('signupModel', signupModel);
        const auth = getAuth(firebaseApp);
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            signupModel.email,
            signupModel.password,
        );
        const user = userCredential.user;
        return user;
    }

    @Post('signin')
    async signIn(@Body() signInModel: SignInModel) {
        try {
            const auth = getAuth(firebaseApp);
            const userCredential = await signInWithEmailAndPassword(
                auth,
                signInModel.email,
                signInModel.password,
            );

            return userCredential.user;
        } catch (error) {
            return { "statusCode": 400, "message": "wrong email or password" };
        }
    }

    @Delete('signout')
    async signout() {
        const auth = getAuth(firebaseApp);
        signOut(auth).then(() => {
            return { "statusCode": 200, "message": "OK!" };
        }).catch((error) => {
            return { "statusCode": 400, "message": "NG!" };
        });;
    }
}