import { render, screen } from "@testing-library/react";
import Game from '../Game';

test('if the button for hero to attack villain is visible', () => {
    render(<Game/>);
    const heroAttackButton = screen.getByText("Click To Attack The Villain");
    expect(heroAttackButton).toBeVisible();
});

test('if the button for villain to attack hero is visible', () => {
    render(<Game/>);
    const villainAttackButton = screen.getByText("Click To Attack The Hero");
    expect(villainAttackButton).toBeVisible();
});

test('if the button for villain to toggle armour is visible', () => {
    render(<Game/>);
    const villainArmourButton = screen.getByText("Turn On Villain's Armour");
    expect(villainArmourButton).toBeVisible();
});

test('if the health of hero is visible', () => {
    render(<Game/>);
    const heroHealthPane = screen.getByTestId("heroHealth");
    expect(heroHealthPane).toBeInTheDocument();
    
});

test('if the health of villain is visible', () => {
    render(<Game/>);
    const villainHealthPane = screen.getByTestId("villainHealth");
    expect(villainHealthPane).toBeInTheDocument();
});
