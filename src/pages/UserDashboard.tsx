import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Layout } from "@/components/layout/Layout";
import {
  Car,
  BookOpen,
  Calendar,
  Clock,
  Star,
  MessageSquare,
  Trophy,
  TrendingUp,
  Bell,
  LogOut,
  User,
  FileText,
  CheckCircle2,
  XCircle,
  AlertCircle,
} from "lucide-react";

// Données fictives
const mockUser = {
  firstName: "Jean",
  lastName: "Dupont",
  email: "jean.dupont@email.com",
  phone: "06 12 34 56 78",
  avatarUrl: null,
  createdAt: "2024-01-15",
};

const mockEnrollments = [
  {
    id: 1,
    courseName: "Permis B - Formation Complète",
    category: "B",
    progress: 65,
    status: "in_progress",
    startDate: "2024-01-15",
    hoursCompleted: 18,
    totalHours: 30,
  },
  {
    id: 2,
    courseName: "Code de la Route",
    category: "Code",
    progress: 85,
    status: "in_progress",
    startDate: "2024-01-10",
    hoursCompleted: 25,
    totalHours: 30,
  },
];

const mockSessions = [
  {
    id: 1,
    type: "Conduite",
    date: "2024-12-30",
    time: "10:00",
    duration: "2h",
    instructor: "Marie Martin",
    status: "upcoming",
  },
  {
    id: 2,
    type: "Code",
    date: "2024-12-31",
    time: "14:00",
    duration: "1h30",
    instructor: "Pierre Durand",
    status: "upcoming",
  },
  {
    id: 3,
    type: "Conduite",
    date: "2024-12-28",
    time: "09:00",
    duration: "2h",
    instructor: "Marie Martin",
    status: "completed",
  },
];

const mockNotifications = [
  {
    id: 1,
    title: "Nouvelle session planifiée",
    message: "Votre prochaine leçon de conduite est prévue le 30 décembre.",
    date: "2024-12-28",
    read: false,
  },
  {
    id: 2,
    title: "Résultat du test",
    message: "Félicitations ! Vous avez obtenu 38/40 à votre dernier test de code.",
    date: "2024-12-27",
    read: true,
  },
];

const mockExamResults = [
  { id: 1, type: "Code", score: 38, maxScore: 40, date: "2024-12-20", passed: true },
  { id: 2, type: "Code", score: 32, maxScore: 40, date: "2024-12-10", passed: false },
];

const UserDashboard = () => {
  const { toast } = useToast();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleLogout = () => {
    toast({
      title: "Déconnexion",
      description: "Vous avez été déconnecté avec succès",
    });
  };

  const handleSubmitRating = () => {
    if (rating === 0) {
      toast({
        title: "Erreur",
        description: "Veuillez sélectionner une note",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Merci !",
      description: "Votre avis a été enregistré",
    });
    setRating(0);
    setComment("");
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "upcoming":
        return <Badge className="bg-blue-500">À venir</Badge>;
      case "completed":
        return <Badge className="bg-green-500">Terminé</Badge>;
      case "cancelled":
        return <Badge variant="destructive">Annulé</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto py-8 px-4">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16 border-2 border-primary">
                <AvatarImage src={mockUser.avatarUrl || undefined} />
                <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                  {mockUser.firstName[0]}{mockUser.lastName[0]}
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className="text-2xl font-bold">
                  Bonjour, {mockUser.firstName} !
                </h1>
                <p className="text-muted-foreground">
                  Bienvenue sur votre espace personnel
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link to="/auth" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Déconnexion
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats rapides */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{mockEnrollments.length}</p>
                    <p className="text-sm text-muted-foreground">Formations</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-green-500/10 rounded-lg">
                    <Clock className="h-6 w-6 text-green-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">43h</p>
                    <p className="text-sm text-muted-foreground">Heures totales</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <Calendar className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">2</p>
                    <p className="text-sm text-muted-foreground">Sessions à venir</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-yellow-500/10 rounded-lg">
                    <Trophy className="h-6 w-6 text-yellow-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">75%</p>
                    <p className="text-sm text-muted-foreground">Progression</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contenu principal */}
          <Tabs defaultValue="courses" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-6 gap-2">
              <TabsTrigger value="courses">Mes Formations</TabsTrigger>
              <TabsTrigger value="sessions">Sessions</TabsTrigger>
              <TabsTrigger value="exams">Examens</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
              <TabsTrigger value="ratings">Évaluations</TabsTrigger>
              <TabsTrigger value="profile">Profil</TabsTrigger>
            </TabsList>

            {/* Formations */}
            <TabsContent value="courses" className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Mes Formations
              </h2>
              <div className="grid gap-4">
                {mockEnrollments.map((enrollment) => (
                  <Card key={enrollment.id} className="border-primary/20">
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Car className="h-5 w-5 text-primary" />
                            <h3 className="font-semibold">{enrollment.courseName}</h3>
                            <Badge variant="outline">{enrollment.category}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-4">
                            Débuté le {new Date(enrollment.startDate).toLocaleDateString("fr-FR")}
                          </p>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Progression</span>
                              <span className="font-medium">{enrollment.progress}%</span>
                            </div>
                            <Progress value={enrollment.progress} className="h-2" />
                          </div>
                        </div>
                        <div className="flex flex-col items-end justify-between gap-2">
                          <Badge className={enrollment.status === "in_progress" ? "bg-blue-500" : "bg-green-500"}>
                            {enrollment.status === "in_progress" ? "En cours" : "Terminé"}
                          </Badge>
                          <div className="text-right">
                            <p className="text-2xl font-bold">{enrollment.hoursCompleted}h</p>
                            <p className="text-sm text-muted-foreground">sur {enrollment.totalHours}h</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Sessions */}
            <TabsContent value="sessions" className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Mes Sessions
              </h2>
              <div className="grid gap-4">
                {mockSessions.map((session) => (
                  <Card key={session.id} className="border-primary/20">
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-lg ${session.type === "Conduite" ? "bg-primary/10" : "bg-blue-500/10"}`}>
                            {session.type === "Conduite" ? (
                              <Car className={`h-6 w-6 ${session.type === "Conduite" ? "text-primary" : "text-blue-500"}`} />
                            ) : (
                              <BookOpen className="h-6 w-6 text-blue-500" />
                            )}
                          </div>
                          <div>
                            <h3 className="font-semibold">{session.type}</h3>
                            <p className="text-sm text-muted-foreground">
                              Avec {session.instructor}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="font-medium">
                              {new Date(session.date).toLocaleDateString("fr-FR", {
                                weekday: "long",
                                day: "numeric",
                                month: "long",
                              })}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {session.time} - {session.duration}
                            </p>
                          </div>
                          {getStatusBadge(session.status)}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Examens */}
            <TabsContent value="exams" className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Résultats d'Examens
              </h2>
              <div className="grid gap-4">
                {mockExamResults.map((exam) => (
                  <Card key={exam.id} className={`border-2 ${exam.passed ? "border-green-500/30" : "border-red-500/30"}`}>
                    <CardContent className="pt-6">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          {exam.passed ? (
                            <CheckCircle2 className="h-8 w-8 text-green-500" />
                          ) : (
                            <XCircle className="h-8 w-8 text-red-500" />
                          )}
                          <div>
                            <h3 className="font-semibold">Examen {exam.type}</h3>
                            <p className="text-sm text-muted-foreground">
                              {new Date(exam.date).toLocaleDateString("fr-FR")}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`text-3xl font-bold ${exam.passed ? "text-green-500" : "text-red-500"}`}>
                            {exam.score}/{exam.maxScore}
                          </p>
                          <Badge variant={exam.passed ? "default" : "destructive"}>
                            {exam.passed ? "Réussi" : "Échoué"}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Notifications */}
            <TabsContent value="notifications" className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Bell className="h-5 w-5" />
                Notifications
              </h2>
              <div className="grid gap-4">
                {mockNotifications.map((notification) => (
                  <Card key={notification.id} className={`border-primary/20 ${!notification.read ? "bg-primary/5" : ""}`}>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className={`p-2 rounded-full ${!notification.read ? "bg-primary/20" : "bg-muted"}`}>
                          <Bell className={`h-4 w-4 ${!notification.read ? "text-primary" : "text-muted-foreground"}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <h3 className="font-semibold">{notification.title}</h3>
                            <span className="text-xs text-muted-foreground">
                              {new Date(notification.date).toLocaleDateString("fr-FR")}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Évaluations */}
            <TabsContent value="ratings" className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Star className="h-5 w-5" />
                Donner une Évaluation
              </h2>
              <Card className="border-primary/20">
                <CardHeader>
                  <CardTitle>Évaluez votre expérience</CardTitle>
                  <CardDescription>
                    Partagez votre avis sur votre formation et vos moniteurs
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Votre note</p>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => setRating(star)}
                          className="transition-transform hover:scale-110"
                        >
                          <Star
                            className={`h-8 w-8 ${
                              star <= rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                            }`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Votre commentaire</p>
                    <Textarea
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      placeholder="Partagez votre expérience..."
                      rows={4}
                    />
                  </div>
                  <Button onClick={handleSubmitRating}>
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Envoyer mon avis
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Profil */}
            <TabsContent value="profile" className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <User className="h-5 w-5" />
                Mon Profil
              </h2>
              <Card className="border-primary/20">
                <CardContent className="pt-6 space-y-6">
                  <div className="flex items-center gap-6">
                    <Avatar className="h-24 w-24 border-4 border-primary/20">
                      <AvatarFallback className="bg-primary text-primary-foreground text-3xl">
                        {mockUser.firstName[0]}{mockUser.lastName[0]}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-2xl font-bold">{mockUser.firstName} {mockUser.lastName}</h3>
                      <p className="text-muted-foreground">Membre depuis le {new Date(mockUser.createdAt).toLocaleDateString("fr-FR")}</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">{mockUser.email}</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Téléphone</p>
                      <p className="font-medium">{mockUser.phone}</p>
                    </div>
                  </div>
                  <Button variant="outline">
                    Modifier mon profil
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default UserDashboard;
