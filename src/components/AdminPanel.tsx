import { useEffect, useState, type FormEvent } from 'react';
import { ArrowLeft, Inbox, LogOut } from 'lucide-react';

const sections = ['profile', 'skills', 'services', 'metrics', 'projects', 'testimonials'] as const;
type Section = typeof sections[number];

export default function AdminPanel() {
  const [token, setToken] = useState(() => sessionStorage.getItem('portfolio-admin-token') || '');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [active, setActive] = useState<Section | 'enquiries'>('profile');
  const [content, setContent] = useState<Record<string, unknown>>({});
  const [draft, setDraft] = useState('');
  const [enquiries, setEnquiries] = useState<any[]>([]);
  const [notice, setNotice] = useState('');

  const authHeaders = () => ({
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  });

  useEffect(() => {
    if (!token) return;
    fetch('/api/admin/content', { headers: authHeaders() })
      .then((response) => response.ok ? response.json() : Promise.reject())
      .then(setContent)
      .catch(() => setToken(''));
  }, [token]);

  useEffect(() => {
    if (active !== 'enquiries' || !token) return;
    fetch('/api/admin/enquiries', { headers: authHeaders() })
      .then((response) => response.ok ? response.json() : Promise.reject())
      .then(setEnquiries)
      .catch(() => setNotice('Unable to load enquiries.'));
  }, [active, token]);

  useEffect(() => {
    if (active !== 'enquiries') {
      setDraft(JSON.stringify(content[active] || {}, null, 2));
    }
  }, [active, content]);

  const login = async (event: FormEvent) => {
    event.preventDefault();
    setLoginError('');
    const response = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (!response.ok) {
      setLoginError(data.error || 'Login failed.');
      return;
    }
    sessionStorage.setItem('portfolio-admin-token', data.token);
    setToken(data.token);
  };

  const saveSection = async () => {
    setNotice('');
    try {
      const value = JSON.parse(draft);
      const response = await fetch(`/api/admin/content/${active}`, {
        method: 'PUT',
        headers: authHeaders(),
        body: JSON.stringify(value),
      });
      if (!response.ok) throw new Error('Could not save changes.');
      setContent((current) => ({ ...current, [active]: value }));
      setNotice('Saved and ready for the next public content refresh.');
    } catch (error) {
      setNotice(error instanceof Error ? error.message : 'Invalid JSON.');
    }
  };

  const updateEnquiry = async (id: string, status: string) => {
    await fetch(`/api/admin/enquiries/${id}`, {
      method: 'PATCH',
      headers: authHeaders(),
      body: JSON.stringify({ status }),
    });
    setEnquiries((current) => current.map((item) => item._id === id ? { ...item, status } : item));
  };

  const deleteEnquiry = async (id: string) => {
    await fetch(`/api/admin/enquiries/${id}`, { method: 'DELETE', headers: authHeaders() });
    setEnquiries((current) => current.filter((item) => item._id !== id));
  };

  if (!token) {
    return (
      <main className="min-h-screen bg-[#111215] px-4 py-16 text-zinc-100">
        <div className="mx-auto max-w-md rounded-2xl border border-orange-500/20 bg-[#17191D] p-7">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-orange-400">Local admin</p>
          <h1 className="mt-3 text-3xl font-extrabold">Portfolio sign in</h1>
          <form onSubmit={login} className="mt-7 space-y-4">
            <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" required placeholder="Email" className="w-full rounded-lg border border-zinc-700 bg-[#111215] px-4 py-3" />
            <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" required placeholder="Password" className="w-full rounded-lg border border-zinc-700 bg-[#111215] px-4 py-3" />
            {loginError && <p role="alert" className="text-sm text-red-400">{loginError}</p>}
            <button className="w-full rounded-lg bg-orange-500 px-4 py-3 font-bold text-zinc-950" type="submit">Sign in</button>
          </form>
          <a href="/" className="mt-6 inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white"><ArrowLeft className="h-4 w-4" /> Back to portfolio</a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#111215] text-zinc-100">
      <header className="border-b border-zinc-800 px-5 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="font-extrabold">Shivam. <span className="text-orange-400">Admin</span></a>
          <button onClick={() => { sessionStorage.removeItem('portfolio-admin-token'); setToken(''); }} className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white"><LogOut className="h-4 w-4" /> Sign out</button>
        </div>
      </header>
      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 lg:grid-cols-[220px_1fr]">
        <nav className="flex gap-2 overflow-x-auto lg:flex-col">
          {[...sections, 'enquiries' as const].map((item) => (
            <button key={item} onClick={() => setActive(item)} className={`rounded-lg px-4 py-2.5 text-left text-sm font-semibold capitalize ${active === item ? 'bg-orange-500 text-zinc-950' : 'text-zinc-400 hover:bg-zinc-900 hover:text-white'}`}>
              {item === 'enquiries' ? <span className="inline-flex items-center gap-2"><Inbox className="h-4 w-4" /> Enquiries</span> : item}
            </button>
          ))}
        </nav>
        <section className="min-w-0">
          {active === 'enquiries' ? (
            <div className="space-y-3">
              <h1 className="text-2xl font-bold">Enquiry inbox</h1>
              {enquiries.length === 0 && <p className="rounded-xl border border-zinc-800 p-5 text-zinc-400">No enquiries yet.</p>}
              {enquiries.map((item) => (
                <article key={item._id} className="rounded-xl border border-zinc-800 bg-[#17191D] p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div><h2 className="font-bold">{item.name}</h2><a className="text-sm text-orange-300" href={`mailto:${item.email}`}>{item.email}</a><p className="mt-1 text-xs text-zinc-500">{item.projectType}</p></div>
                    <select value={item.status} onChange={(event) => updateEnquiry(item._id, event.target.value)} className="rounded border border-zinc-700 bg-[#111215] px-2 py-1 text-xs"><option value="new">New</option><option value="read">Read</option><option value="closed">Closed</option></select>
                  </div>
                  <p className="mt-4 whitespace-pre-wrap text-sm leading-relaxed text-zinc-300">{item.message}</p>
                  <button onClick={() => deleteEnquiry(item._id)} className="mt-4 text-xs text-red-400">Delete enquiry</button>
                </article>
              ))}
            </div>
          ) : (
            <div>
              <div className="flex items-end justify-between gap-4">
                <div><p className="text-xs uppercase tracking-wider text-orange-400">Content editor</p><h1 className="mt-1 text-2xl font-bold capitalize">{active}</h1></div>
                <button onClick={saveSection} className="rounded-lg bg-orange-500 px-4 py-2.5 text-sm font-bold text-zinc-950">Publish changes</button>
              </div>
              <p className="mt-3 text-xs text-zinc-500">Edit valid JSON. Projects can set published, featured, order, externalUrl, and ownContribution. Testimonials remain hidden until approved is true.</p>
              <textarea value={draft} onChange={(event) => setDraft(event.target.value)} spellCheck={false} className="mt-4 min-h-[520px] w-full resize-y rounded-xl border border-zinc-800 bg-[#17191D] p-4 font-mono text-xs leading-relaxed text-zinc-200 outline-none focus:border-orange-500" />
              {notice && <p className="mt-3 text-sm text-orange-300">{notice}</p>}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
