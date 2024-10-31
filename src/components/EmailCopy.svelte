<script>
    const address = 'lukas@nabholz.work';

    const copyAddress = async () => {
        try {
            await navigator.clipboard.writeText(address);
            console.log('Email address copied successfully!');
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };
</script>

<button onclick={copyAddress}>
    lukas@nabholz.work
    <span class="icons">C</span>
</button>

<style>
    button {
        font-weight: 600;
        display: flex;
        align-items: center;
        gap: 14px;
        background-color: transparent;
        margin: 0;
        border: none;
        padding: 0;
        outline: none;
    }

    button:hover,
    button:active,
    button:hover .icons,
    button:active .icons {
        color: var(--accent-color);
    }
</style>
