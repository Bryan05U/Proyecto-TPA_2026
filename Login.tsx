import React, { useState } from 'react';
import { HiOutlineMail } from 'react-icons/hi'; 
import { RiEyeCloseLine } from 'react-icons/ri'; 
import './Login.css';

const USER_VALIDO = "admin@domoserv.cl";
const PASS_VALIDA = "domo2026";

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const [errorEmail, setErrorEmail] = useState(false);
const [errorPassword, setErrorPassword] = useState(false);

const [isLoading, setIsLoading] = useState(false);
const [isLoggedIn, setIsLoggedIn] = useState(false);