import { Code2, Cpu, Database, Globe, Layout, Mail, MapPin, Smartphone, Terminal } from 'lucide-react';

function SkillGroup({ title, items, icon }) {
	return (
		<div>
			<div className="flex items-center gap-2 mb-4 text-zinc-900 dark:text-zinc-100">
				{icon}
				<h3 className="font-bold">{title}</h3>
			</div>
			<div className="flex flex-wrap gap-2">
				{items.map(function (item) {
					return (
						<span
							key={item}
							className="px-3 py-1.5 rounded-lg text-sm font-medium border border-zinc-200 bg-white text-zinc-600 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-400">
							{item}
						</span>
					);
				})}
			</div>
		</div>
	);
}

export default function App() {
	const skills = {
		frontend: ['React.js', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS', 'Shadcn UI'],
		backend: ['Node.js', 'Fastify.js', 'Go', 'REST APIs', 'WebSockets', 'Vercel AI SDK'],
		infrastructure: ['PostgreSQL', 'MongoDB', 'Redis', 'AWS (EC2, S3, Lambda)', 'Docker', 'Podman'],
		mobile: ['React Native', 'Expo', 'Ionic', 'Capacitor'],
		ai: ['OpenAI Codex', 'Gemini CLI', 'Ollama', 'Tavily API', 'n8n'],
	};

	const experience = [
		{
			company: 'Nordic Medical Tech',
			role: 'Web & Mobile Developer',
			period: 'May 2023 – Present',
			location: 'Remote',
			description: 'Building real-time healthcare communication platforms. Focused on scalable frontend systems and real-time video conferencing infrastructure.',
			tech: ['React', 'TypeScript', 'React Native', 'WebRTC', 'Node.js'],
		},
		{
			company: 'Trivedi Advanced Tech',
			role: 'Full-Stack Developer',
			period: 'Feb 2022 – Apr 2023',
			location: 'Ahmedabad, India',
			description: 'Developed IoT monitoring applications and data visualization dashboards. Deployed production workloads on AWS.',
			tech: ['Angular', 'Node.js', 'Apache Cassandra', 'AWS', 'Docker'],
		},
		{
			company: 'Aliter Business Solutions',
			role: 'Full-Stack Developer',
			period: 'Feb 2021 – Aug 2021',
			location: 'Ahmedabad, India',
			description: 'Redesigned ERP interfaces and developed REST APIs. Improved system performance for core ERP workflows.',
			tech: ['Nuxt.js', 'Express.js', 'MySQL', 'JavaScript'],
		},
	];

	const projects = [
		{
			title: 'Reference',
			type: 'Multi-LLM AI Chat Platform',
			description: 'AI-powered chat platform supporting multiple LLM providers and local models via Ollama. Features web search integration and PG-backed storage.',
			tech: ['React', 'Fastify.js', 'PostgreSQL', 'Docker', 'Tavily API'],
		},
		{
			title: 'Forge CLI',
			type: 'Terminal AI Coding Agent',
			description: 'A terminal-first developer tool for AI model orchestration, inspired by Claude Code. Supports local and cloud LLMs.',
			tech: ['Node.js', 'TypeScript', 'Vercel AI SDK', 'Ollama'],
		},
		{
			title: 'Recreate',
			type: 'AI Image Generation App',
			description: 'Cross-platform mobile app for AI image generation using Flux models via Replicate API. Includes cloud media synchronization.',
			tech: ['React Native', 'Replicate API', 'Cloudinary', 'Firebase'],
		},
		{
			title: 'Digital Cold Chain',
			type: 'Vaccine Monitoring Platform',
			description: 'Real-time dashboard for vaccine logistics using AWS cloud-native infrastructure for queueing and storage.',
			tech: ['Angular', 'AWS Lambda', 'SQS', 'Redis', 'Cassandra'],
		},
	];

	return (
		<div className="min-h-screen transition-colors duration-300">
			{/* Navigation */}
			<nav className="fixed top-0 w-full z-50 border-b bg-white/80 border-zinc-200 dark:bg-zinc-950/80 dark:border-zinc-800 backdrop-blur-md">
				<div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
					<span className="font-bold tracking-tight text-xl">RS.</span>
				</div>
			</nav>

			<main className="max-w-4xl mx-auto px-6 pt-32 pb-24">
				{/* Hero Section */}
				<header className="mb-20">
					<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
						<div>
							<h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">Rajat Sharma</h1>
							<div className="flex flex-wrap gap-4 text-zinc-500 dark:text-zinc-400 font-medium">
								<span className="flex items-center gap-1">
									<MapPin size={16} /> Patan, Gujarat, India
								</span>
								<span className="flex items-center gap-1">
									<Code2 size={16} /> Full-stack JavaScript Developer
								</span>
							</div>
						</div>
						<div className="flex gap-4">
							<a
								href="mailto:rajatxt@proton.me"
								className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-zinc-100 dark:text-zinc-900 hover:opacity-90 transition-opacity font-medium">
								<Mail size={16} /> Contact
							</a>
							<a
								href="https://github.com/rajatxs"
								target="_blank"
								rel="noopener"
								className="flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-200 hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900 transition-all font-medium">
								<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-5 fill-black dark:fill-white">
									<title>GitHub</title>
									<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
								</svg>
								&nbsp;GitHub
							</a>
						</div>
					</div>
					<p className="text-xl md:text-2xl leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-3xl">
						Building scalable web and mobile applications with 5+ years of experience across healthcare, IoT, and AI-driven products. Focused on performance, clean
						architectures, and developer experience.
					</p>
				</header>

				{/* Skills Grid */}
				<section className="mb-24">
					<h2 className="text-sm uppercase tracking-[0.2em] font-bold text-zinc-400 dark:text-zinc-500 mb-8 flex items-center gap-2">
						<Cpu size={16} /> Technical Expertise
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-10">
						<SkillGroup title="Frontend" items={skills.frontend} icon={<Layout size={18} />} />
						<SkillGroup title="Backend & API" items={skills.backend} icon={<Terminal size={18} />} />
						<SkillGroup title="Infra & Database" items={skills.infrastructure} icon={<Database size={18} />} />
						<SkillGroup title="Mobile & AI" items={[...skills.mobile, ...skills.ai]} icon={<Smartphone size={18} />} />
					</div>
				</section>

				{/* Experience */}
				<section className="mb-24">
					<h2 className="text-sm uppercase tracking-[0.2em] font-bold text-zinc-400 dark:text-zinc-500 mb-8 flex items-center gap-2">
						<Globe size={16} /> Professional Journey
					</h2>
					<div className="space-y-12">
						{experience.map(function (exp, index) {
							return (
								<div key={index} className="group relative pl-8 border-l-2 border-zinc-200 dark:border-zinc-800 py-1">
									<div className="absolute left-[-9px] top-2 w-4 h-4 rounded-full border-2 bg-zinc-50 border-zinc-300 dark:bg-zinc-950 dark:border-zinc-700 transition-colors group-hover:border-blue-500" />
									<div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2 gap-1">
										<div>
											<h3 className="text-xl font-bold">{exp.company}</h3>
											<p className="font-semibold text-zinc-500 dark:text-zinc-400">{exp.role}</p>
										</div>
										<div className="text-right flex flex-col md:items-end">
											<span className="text-sm font-medium text-zinc-500 bg-zinc-100 dark:bg-zinc-900 px-3 py-1 rounded-full">{exp.period}</span>
											<span className="text-xs text-zinc-400 mt-1">{exp.location}</span>
										</div>
									</div>
									<p className="text-zinc-600 dark:text-zinc-400 mb-4 max-w-2xl">{exp.description}</p>
									<div className="flex flex-wrap gap-2">
										{exp.tech.map(function (t) {
											return (
												<span key={t} className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
													{t}
												</span>
											);
										})}
									</div>
								</div>
							);
						})}
					</div>
				</section>

				{/* Selected Projects */}
				<section className="mb-24">
					<h2 className="text-sm uppercase tracking-[0.2em] font-bold text-zinc-400 dark:text-zinc-500 mb-8 flex items-center gap-2">
						<Code2 size={16} /> Selected Projects
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						{projects.map(function (project, index) {
							return (
								<div
									key={index}
									className="p-6 rounded-2xl border bg-white border-zinc-200 hover:border-zinc-300 dark:bg-zinc-900/50 dark:border-zinc-800 dark:hover:border-zinc-700 transition-all flex flex-col">
									<div className="flex justify-between items-start mb-4">
										<h3 className="text-lg font-bold">{project.title}</h3>
									</div>
									<p className="text-sm font-semibold text-zinc-500 dark:text-zinc-500 mb-2">{project.type}</p>
									<p className="text-zinc-600 dark:text-zinc-400 mb-6 text-sm flex-grow leading-relaxed">{project.description}</p>
									<div className="flex flex-wrap gap-2">
										{project.tech.map(function (t) {
											return (
												<span
													key={t}
													className="text-[10px] px-2 py-1 rounded font-bold uppercase tracking-widest bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
													{t}
												</span>
											);
										})}
									</div>
								</div>
							);
						})}
					</div>
				</section>

				{/* Footer */}
				<footer className="pt-12 border-t border-zinc-200 dark:border-zinc-900 flex flex-col md:flex-row items-center justify-between gap-6">
					<p className="text-sm text-zinc-500 dark:text-zinc-500">© {new Date().getFullYear()} Rajat Sharma · Patan, Gujarat</p>
					<div className="flex items-center gap-6">
						<a href="https://gravatar.com/rajatxs" className="text-sm font-bold text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
							Profile
						</a>
						<a href="mailto:rajatxt@proton.me" className="text-sm font-bold text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
							Email
						</a>
						<a href="https://github.com/rajatxs" className="text-sm font-bold text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
							GitHub
						</a>
					</div>
				</footer>
			</main>
		</div>
	);
}
