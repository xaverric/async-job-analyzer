const buildUrl = (baseUri: string, ...other: string[]): string => {
    return `${baseUri}/${other.join("/")}`;
}

export default buildUrl;