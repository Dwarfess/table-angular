
export class Task {
    public id: number;
    public name: string;
    public creation_date: string;
    public due_date: string;
    public start_date: string;
    public is_completed: boolean;
    public is_archived: boolean;
    public is_high_priority: boolean;
    public estimated_effort: number;
    public actual_effort: number;
    public physical_progress: number;
    public obj_status: string;
    public description: string;
    public project_id: number;
    public tags: string[];

    constructor(id,
                name,
                creation_date,
                due_date,
                start_date,
                is_completed,
                is_archived,
                is_high_priority,
                estimated_effort,
                actual_effort,
                physical_progress,
                obj_status,
                description,
                project_id,
                tags) {
        this.id = id;
        this.name = name;
        this.creation_date = creation_date;
        this.due_date = due_date;
        this.start_date = start_date;
        this.is_completed = is_completed;
        this.is_archived = is_archived;
        this.is_high_priority = is_high_priority;
        this.estimated_effort = estimated_effort;
        this.actual_effort = actual_effort;
        this.physical_progress = physical_progress;
        this.obj_status = obj_status;
        this.description = description;
        this.project_id = project_id;
        this.tags = tags;
    }
}

