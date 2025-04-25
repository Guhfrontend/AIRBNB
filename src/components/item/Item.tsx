

export default function Item() {
    return (
        <a href="#" className="flex flex-col gap-2">
            <img src="/src/assets/001_261511aea8.jpg" alt="" className="aspect-square object-cover rounded-2xl" />
            <h3 className="text-xl font-semibold">Cabo Frio, Rio de janeiro</h3>
            <p className="truncate text-gray-600 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repudiandae impedit vel alias exercitationem tempore iure veniam at. Veritatis ea illo obcaecati nisi officiis animi saepe cum blanditiis nemo porro? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas, eos facere esse quam maxime cupiditate temporibus sint dolorum laudantium explicabo asperiores et soluta deserunt saepe iusto! Repellendus assumenda deserunt ea!</p>
            <p>
                <span className="font-semibold"> R$ 550</span> por noite
            </p>
        </a>
    )
}
