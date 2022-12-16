export declare class InputHandler {
    private inputService;
    private onModelChange;
    private onModelTouched;
    constructor(htmlInputElement: HTMLInputElement, options: any);
    handleCut(event: any): void;
    handleInput(event: any): void;
    handleKeydown(event: any): void;
    clearValue(): void;
    handleKeypress(event: any): void;
    private handleKeypressImpl;
    handlePaste(event: any): void;
    updateOptions(options: any): void;
    getOnModelChange(): Function;
    setOnModelChange(callbackFunction: Function): void;
    getOnModelTouched(): Function;
    setOnModelTouched(callbackFunction: Function): void;
    setValue(value: number): void;
    /**
     * Passthrough to setTimeout that can be stubbed out in tests.
     */
    private timer;
}
