import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Layout } from "@/components/layout/Layout";
import {
  Users,
  Car,
  BookOpen,
  Calendar,
  TrendingUp,
  DollarSign,
  Bell,
  Settings,
  LogOut,
  Plus,
  Edit,
  Trash2,
  Eye,
  Search,
  Download,
  Upload,
  BarChart3,
  UserCheck,
  Clock,
  FileText,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Megaphone,
} from "lucide-react";

// Données fictives Admin
const mockStats = {
  totalStudents: 156,
  activeStudents: 89,
  totalCourses: 12,
  sessionsThisMonth: 234,
  revenueThisMonth: 45680,
  successRate: 87,
};

const mockStudents = [
  { id: 1, name: "Jean Dupont", email: "jean@email.com", phone: "06 12 34 56 78", course: "Permis B", progress: 65, status: "active" },
  { id: 2, name: "Marie Martin", email: "marie@email.com", phone: "06 23 45 67 89", course: "Permis A", progress: 45, status: "active" },
  { id: 3, name: "Pierre Durand", email: "pierre@email.com", phone: "06 34 56 78 90", course: "Permis B", progress: 100, status: "completed" },
  { id: 4, name: "Sophie Bernard", email: "sophie@email.com", phone: "06 45 67 89 01", course: "Code", progress: 80, status: "active" },
  { id: 5, name: "Lucas Petit", email: "lucas@email.com", phone: "06 56 78 90 12", course: "Permis B", progress: 20, status: "inactive" },
];

const mockCourses = [
  { id: 1, name: "Permis B - Formation Complète", category: "B", price: 1200, students: 45, duration: "30h" },
  { id: 2, name: "Permis A - Moto", category: "A", price: 800, students: 23, duration: "20h" },
  { id: 3, name: "Code de la Route", category: "Code", price: 300, students: 67, duration: "Illimité" },
  { id: 4, name: "Conduite Accompagnée", category: "AAC", price: 1400, students: 21, duration: "35h" },
];

const mockSessions = [
  { id: 1, student: "Jean Dupont", instructor: "Marc Lefevre", type: "Conduite", date: "2024-12-30", time: "10:00", status: "scheduled" },
  { id: 2, student: "Marie Martin", instructor: "Anne Moreau", type: "Code", date: "2024-12-30", time: "14:00", status: "scheduled" },
  { id: 3, student: "Sophie Bernard", instructor: "Marc Lefevre", type: "Conduite", date: "2024-12-29", time: "09:00", status: "completed" },
  { id: 4, student: "Lucas Petit", instructor: "Anne Moreau", type: "Conduite", date: "2024-12-28", time: "16:00", status: "cancelled" },
];

const mockInstructors = [
  { id: 1, name: "Marc Lefevre", speciality: "Permis B, AAC", students: 34, rating: 4.8 },
  { id: 2, name: "Anne Moreau", speciality: "Code, Permis B", students: 28, rating: 4.9 },
  { id: 3, name: "Thomas Garcia", speciality: "Permis A, A2", students: 19, rating: 4.7 },
];

const mockAnnouncements = [
  { id: 1, title: "Fermeture exceptionnelle", content: "L'auto-école sera fermée le 25 décembre.", date: "2024-12-20", priority: "high" },
  { id: 2, title: "Nouveau moniteur", content: "Bienvenue à Thomas Garcia qui rejoint notre équipe.", date: "2024-12-15", priority: "normal" },
];

const AdminDashboard = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [announcementTitle, setAnnouncementTitle] = useState("");
  const [announcementContent, setAnnouncementContent] = useState("");

  const handleLogout = () => {
    toast({
      title: "Déconnexion",
      description: "Vous avez été déconnecté avec succès",
    });
  };

  const handleAddAnnouncement = () => {
    if (!announcementTitle || !announcementContent) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Annonce publiée",
      description: "L'annonce a été publiée avec succès",
    });
    setAnnouncementTitle("");
    setAnnouncementContent("");
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-500">Actif</Badge>;
      case "inactive":
        return <Badge variant="secondary">Inactif</Badge>;
      case "completed":
        return <Badge className="bg-blue-500">Terminé</Badge>;
      case "scheduled":
        return <Badge className="bg-blue-500">Planifié</Badge>;
      case "cancelled":
        return <Badge variant="destructive">Annulé</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const filteredStudents = mockStudents.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto py-8 px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-bold text-primary">
                Tableau de Bord Administrateur
              </h1>
              <p className="text-muted-foreground">
                Gérez votre auto-école en toute simplicité
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Paramètres
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link to="/auth" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Déconnexion
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats principales */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-8">
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{mockStats.totalStudents}</p>
                    <p className="text-xs text-muted-foreground">Élèves total</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-green-500/10 rounded-lg">
                    <UserCheck className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{mockStats.activeStudents}</p>
                    <p className="text-xs text-muted-foreground">Élèves actifs</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <BookOpen className="h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{mockStats.totalCourses}</p>
                    <p className="text-xs text-muted-foreground">Formations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-500/10 rounded-lg">
                    <Calendar className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{mockStats.sessionsThisMonth}</p>
                    <p className="text-xs text-muted-foreground">Sessions/mois</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-500/10 rounded-lg">
                    <DollarSign className="h-5 w-5 text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{mockStats.revenueThisMonth}€</p>
                    <p className="text-xs text-muted-foreground">Revenus/mois</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-emerald-500/10 rounded-lg">
                    <TrendingUp className="h-5 w-5 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{mockStats.successRate}%</p>
                    <p className="text-xs text-muted-foreground">Taux réussite</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contenu principal */}
          <Tabs defaultValue="students" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 gap-2">
              <TabsTrigger value="students">Élèves</TabsTrigger>
              <TabsTrigger value="courses">Formations</TabsTrigger>
              <TabsTrigger value="sessions">Sessions</TabsTrigger>
              <TabsTrigger value="instructors">Moniteurs</TabsTrigger>
              <TabsTrigger value="announcements">Annonces</TabsTrigger>
              <TabsTrigger value="reports">Rapports</TabsTrigger>
            </TabsList>

            {/* Élèves */}
            <TabsContent value="students" className="space-y-4">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Gestion des Élèves
                </h2>
                <div className="flex gap-2 w-full md:w-auto">
                  <div className="relative flex-1 md:w-64">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Rechercher..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Ajouter
                  </Button>
                  <Button variant="outline">
                    <Download className="h-4 w-4 mr-2" />
                    Exporter
                  </Button>
                </div>
              </div>
              <Card className="border-primary/20">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Élève</TableHead>
                      <TableHead>Contact</TableHead>
                      <TableHead>Formation</TableHead>
                      <TableHead>Progression</TableHead>
                      <TableHead>Statut</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredStudents.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <Avatar className="h-8 w-8">
                              <AvatarFallback className="text-xs">
                                {student.name.split(" ").map((n) => n[0]).join("")}
                              </AvatarFallback>
                            </Avatar>
                            <span className="font-medium">{student.name}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="text-sm">
                            <p>{student.email}</p>
                            <p className="text-muted-foreground">{student.phone}</p>
                          </div>
                        </TableCell>
                        <TableCell>{student.course}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="w-16 bg-muted rounded-full h-2">
                              <div
                                className="bg-primary h-2 rounded-full"
                                style={{ width: `${student.progress}%` }}
                              />
                            </div>
                            <span className="text-sm">{student.progress}%</span>
                          </div>
                        </TableCell>
                        <TableCell>{getStatusBadge(student.status)}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-1">
                            <Button variant="ghost" size="icon">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="h-4 w-4 text-destructive" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </TabsContent>

            {/* Formations */}
            <TabsContent value="courses" className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Gestion des Formations
                </h2>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Nouvelle Formation
                </Button>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {mockCourses.map((course) => (
                  <Card key={course.id} className="border-primary/20">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{course.name}</CardTitle>
                          <CardDescription>
                            <Badge variant="outline" className="mt-1">{course.category}</Badge>
                          </CardDescription>
                        </div>
                        <div className="flex gap-1">
                          <Button variant="ghost" size="icon">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-bold text-primary">{course.price}€</p>
                          <p className="text-xs text-muted-foreground">Prix</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold">{course.students}</p>
                          <p className="text-xs text-muted-foreground">Élèves</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold">{course.duration}</p>
                          <p className="text-xs text-muted-foreground">Durée</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Sessions */}
            <TabsContent value="sessions" className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Gestion des Sessions
                </h2>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Nouvelle Session
                </Button>
              </div>
              <Card className="border-primary/20">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Élève</TableHead>
                      <TableHead>Moniteur</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Heure</TableHead>
                      <TableHead>Statut</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockSessions.map((session) => (
                      <TableRow key={session.id}>
                        <TableCell className="font-medium">{session.student}</TableCell>
                        <TableCell>{session.instructor}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{session.type}</Badge>
                        </TableCell>
                        <TableCell>{new Date(session.date).toLocaleDateString("fr-FR")}</TableCell>
                        <TableCell>{session.time}</TableCell>
                        <TableCell>{getStatusBadge(session.status)}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-1">
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <XCircle className="h-4 w-4 text-destructive" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </TabsContent>

            {/* Moniteurs */}
            <TabsContent value="instructors" className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Car className="h-5 w-5" />
                  Gestion des Moniteurs
                </h2>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Ajouter un Moniteur
                </Button>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                {mockInstructors.map((instructor) => (
                  <Card key={instructor.id} className="border-primary/20">
                    <CardContent className="pt-6">
                      <div className="text-center space-y-4">
                        <Avatar className="h-20 w-20 mx-auto">
                          <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                            {instructor.name.split(" ").map((n) => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-lg">{instructor.name}</h3>
                          <p className="text-sm text-muted-foreground">{instructor.speciality}</p>
                        </div>
                        <div className="flex justify-center gap-6">
                          <div className="text-center">
                            <p className="text-xl font-bold">{instructor.students}</p>
                            <p className="text-xs text-muted-foreground">Élèves</p>
                          </div>
                          <div className="text-center">
                            <p className="text-xl font-bold flex items-center justify-center gap-1">
                              {instructor.rating}
                              <span className="text-yellow-400">★</span>
                            </p>
                            <p className="text-xs text-muted-foreground">Note</p>
                          </div>
                        </div>
                        <div className="flex gap-2 justify-center">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4 mr-1" />
                            Voir
                          </Button>
                          <Button variant="outline" size="sm">
                            <Edit className="h-4 w-4 mr-1" />
                            Modifier
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Annonces */}
            <TabsContent value="announcements" className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Megaphone className="h-5 w-5" />
                  Gestion des Annonces
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle>Nouvelle Annonce</CardTitle>
                    <CardDescription>Publiez une annonce pour tous les élèves</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label>Titre</Label>
                      <Input
                        value={announcementTitle}
                        onChange={(e) => setAnnouncementTitle(e.target.value)}
                        placeholder="Titre de l'annonce"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Contenu</Label>
                      <Textarea
                        value={announcementContent}
                        onChange={(e) => setAnnouncementContent(e.target.value)}
                        placeholder="Contenu de l'annonce..."
                        rows={4}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Priorité</Label>
                      <Select defaultValue="normal">
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionner la priorité" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Basse</SelectItem>
                          <SelectItem value="normal">Normale</SelectItem>
                          <SelectItem value="high">Haute</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button onClick={handleAddAnnouncement} className="w-full">
                      <Bell className="h-4 w-4 mr-2" />
                      Publier l'annonce
                    </Button>
                  </CardContent>
                </Card>
                <div className="space-y-4">
                  <h3 className="font-semibold">Annonces récentes</h3>
                  {mockAnnouncements.map((announcement) => (
                    <Card key={announcement.id} className={`border-l-4 ${announcement.priority === "high" ? "border-l-red-500" : "border-l-primary"}`}>
                      <CardContent className="pt-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-semibold flex items-center gap-2">
                              {announcement.priority === "high" && (
                                <AlertTriangle className="h-4 w-4 text-red-500" />
                              )}
                              {announcement.title}
                            </h4>
                            <p className="text-sm text-muted-foreground mt-1">{announcement.content}</p>
                            <p className="text-xs text-muted-foreground mt-2">
                              {new Date(announcement.date).toLocaleDateString("fr-FR")}
                            </p>
                          </div>
                          <div className="flex gap-1">
                            <Button variant="ghost" size="icon">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="icon">
                              <Trash2 className="h-4 w-4 text-destructive" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Rapports */}
            <TabsContent value="reports" className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Rapports et Statistiques
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle>Répartition des Formations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockCourses.map((course) => (
                        <div key={course.id} className="flex items-center gap-4">
                          <div className="w-24 text-sm">{course.category}</div>
                          <div className="flex-1 bg-muted rounded-full h-4">
                            <div
                              className="bg-primary h-4 rounded-full"
                              style={{ width: `${(course.students / 67) * 100}%` }}
                            />
                          </div>
                          <div className="w-12 text-sm text-right">{course.students}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle>Actions Rapides</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="h-4 w-4 mr-2" />
                      Exporter la liste des élèves
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      Générer un rapport mensuel
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <BarChart3 className="h-4 w-4 mr-2" />
                      Statistiques détaillées
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Upload className="h-4 w-4 mr-2" />
                      Importer des données
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
