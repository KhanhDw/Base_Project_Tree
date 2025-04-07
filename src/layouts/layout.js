function MainLayout({ children }) {
    return (
        <div>
            <header></header>
            <main>{children}</main>
            <footer></footer>
        </div>
    );
}

export default MainLayout;


