import {surpriseMePrompts} from '../constants';

export function getRandomPrompt(prompt){
    const randomIndex = surpriseMePrompts[Math.floor(Math.random() * surpriseMePrompts.length)];
    const randomPrompt = surpriseMePrompts[randomIndex];
    return prompt === randomPrompt ? getRandomPrompt(prompt) : randomPrompt;
}